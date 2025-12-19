import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero';
import Hook from './components/Hook/Hook';
import WhyUs from './components/WhyUs/WhyUs';
import Steps from './components/Steps/Steps';
import CTA from './components/CTA/CTA';

function App() {
  return (
    <div className="App">
    <Header />
      <Hero />
      <Hook />
      <WhyUs />
      <Steps />
      <CTA />
    </div>
  );
}

export default App;
