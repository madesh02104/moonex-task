import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Comparison from './components/Comparison';
import FAQs from './components/FAQs';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-[url('../assets/circles.png')] bg-no-repeat bg-background text-secondary font-raleway ">
      <div className="bg-[url('../assets/bg.png')] bg-cover">
        <Header />
        <Hero />
        <Comparison />
        <Features />
        <FAQs />
        <Footer />
      </div>
      
    </div>
  );
};

export default App;