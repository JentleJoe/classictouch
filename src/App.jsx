import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Leadership from './components/Leadership';
import Pricing from './components/Pricing';
import Portfolio from './components/Portfolio';
import OtherServices from './components/OtherServices';
import Process from './components/Process';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Leadership />
      <Pricing />
      <Portfolio />
      <OtherServices />
      <Process />
      <Team />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
