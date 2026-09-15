import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Stats from './components/Stats'
import Services from './components/Services'
import HowWeWork from './components/HowWeWork'
import Cases from './components/Cases'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Services />
        <HowWeWork />
        <Cases />
        <WhyUs />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}

export default App