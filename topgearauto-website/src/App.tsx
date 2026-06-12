import CallToAction from './components/CallToAction';
import FeaturedCars from './components/FeaturedCars';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <FeaturedCars />
        <Services />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
