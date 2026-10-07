import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/home/Hero'
import Editorial from '../components/home/Editorial'
import Signature from '../components/home/Signature'
import FeaturedDesigns from '../components/home/FeaturedDesigns'
import HowItWorks from '../components/home/HowItWorks'
import HomeCta from '../components/home/HomeCta'
import './Home.css'

function Home() {
  return (
    <div id="top" className="home-page">
      <Navbar />
      <main>
        <Hero />
        <Editorial />
        <Signature />
        <FeaturedDesigns />
        <HowItWorks />
        <HomeCta />
      </main>
      <Footer />
    </div>
  )
}

export default Home
