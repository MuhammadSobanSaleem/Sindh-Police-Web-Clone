import './App.css'
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import MessageSection from './components/MessageSection.jsx'
import WelcomeSection from './components/WelcomeSection.jsx'
import QuickLinks from './components/QuickLinks.jsx'
import LatestNews from './components/LatestNews.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WelcomeSection />
      <MessageSection />
      <QuickLinks />
      <LatestNews />
      <Footer />
    </>
  )
}

export default App
