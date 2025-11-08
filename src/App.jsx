import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Method from './components/Method';
import Impact from './components/Impact';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black font-inter">
      <Header />
      <main>
        <Hero />
        <Services />
        <Method />
        <Impact />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
