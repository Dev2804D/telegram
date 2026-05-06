import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Industries from './components/Industries';
import AboutVideo from './components/AboutVideo';
import Workflow from './components/Workflow';
import OurWork from './components/OurWork';
import Technology from './components/Technology';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <Header />
      <Hero />
      <Industries />
      <AboutVideo />
      <Workflow />
      <OurWork />
      <Technology />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
