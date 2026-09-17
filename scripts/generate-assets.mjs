import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import sharp from 'sharp'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const pub = join(root, 'public')

const faviconSvg = await readFile(join(pub, 'favicon.svg'))
const logoSvg = await readFile(join(pub, 'logo.svg'))

const png = (size) =>
  sharp(faviconSvg, { density: 384 }).resize(size, size).png().toBuffer()

const targets = [
  ['favicon-48x48.png', 48],
  ['favicon-96x96.png', 96],
  ['apple-touch-icon.png', 180],
  ['icon-192.png', 192],
  ['icon-512.png', 512],
]

for (const [name, size] of targets) {
  await writeFile(join(pub, name), await png(size))
  console.log(`wrote public/${name}`)
}

function buildIco(images) {
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0)
  header.writeUInt16LE(1, 2)
  header.writeUInt16LE(images.length, 4)

  let offset = 6 + images.length * 16
  const entries = []
  for (const { size, buffer } of images) {
    const entry = Buffer.alloc(16)
    entry.writeUInt8(size >= 256 ? 0 : size, 0)
    entry.writeUInt8(size >= 256 ? 0 : size, 1)
    entry.writeUInt8(0, 2)
    entry.writeUInt8(0, 3)
    entry.writeUInt16LE(1, 4)
    entry.writeUInt16LE(32, 6)
    entry.writeUInt32LE(buffer.length, 8)
    entry.writeUInt32LE(offset, 12)
    offset += buffer.length
    entries.push(entry)
  }

  return Buffer.concat([header, ...entries, ...images.map((i) => i.buffer)])
}

const icoSizes = [16, 32, 48, 64]
const icoImages = await Promise.all(
  icoSizes.map(async (size) => ({ size, buffer: await png(size) })),
)
await writeFile(join(pub, 'favicon.ico'), buildIco(icoImages))
console.log('wrote public/favicon.ico')

const ogBackground = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#ffffff"/>
      <stop offset="1" stop-color="#f4f0fd"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.85" cy="0.1" r="0.9">
      <stop offset="0" stop-color="#a855f7" stop-opacity="0.28"/>
      <stop offset="1" stop-color="#a855f7" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="bar" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#4c1d95"/>
      <stop offset="0.55" stop-color="#7c3aed"/>
      <stop offset="1" stop-color="#a855f7"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="0" y="0" width="1200" height="10" fill="url(#bar)"/>
  <text x="600" y="470" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="42" font-weight="600" fill="#1a1425">Tu negocio nunca se detiene</text>
  <text x="600" y="524" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="26" fill="#5b5666">Soporte técnico · Instalación · Implementación · Software a la medida</text>
</svg>`

const logo = await sharp(logoSvg, { density: 384 })
  .resize({ width: 560 })
  .png()
  .toBuffer()

const ogImage = await sharp(Buffer.from(ogBackground))
  .composite([{ input: logo, top: 150, left: 320 }])
  .png()
  .toBuffer()

await writeFile(join(pub, 'og-image.png'), ogImage)
console.log('wrote public/og-image.png')
