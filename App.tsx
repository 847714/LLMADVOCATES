
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Team from './components/Team';
import PracticeAreas from './components/PracticeAreas';
import Footer from './components/Footer';
import DisclaimerModal from './components/DisclaimerModal';
import AIAssistant from './components/AIAssistant';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookiesPolicy from './components/CookiesPolicy';

const Home: React.FC = () => (
  <>
    <Hero />
    <PracticeAreas />
    <Team />
  </>
);

const App: React.FC = () => {
  const [isDisclaimerVisible, setIsDisclaimerVisible] = useState(true);
  const { pathname } = useLocation();
  const mailToUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=deepakkhohalcod@gmail.com&su=Consultation%20Booking&body=Client%20Name%3A%0AType%20of%20Consultation%20Needed%3A%0ATiming%3A%0ADate%3A%0AMobile%20Number%3A";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleAgree = () => {
    setIsDisclaimerVisible(false);
  };

  return (
    <div className={`min-h-screen flex flex-col ${isDisclaimerVisible ? 'overflow-hidden max-h-screen' : ''}`}>
      <DisclaimerModal isVisible={isDisclaimerVisible} onAgree={handleAgree} />
      
      <div className={`${isDisclaimerVisible ? 'blur-sm pointer-events-none' : 'transition-all duration-500'}`}>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/practice-areas" element={<PracticeAreas />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/cookies" element={<CookiesPolicy />} />
            <Route path="/contact" element={<div className="pt-32 pb-20 text-center px-6"><h1 className="text-4xl font-bold text-yellow-400">Contact Us</h1><p className="mt-4 text-xl">Chandigarh & Punjab Region</p><div className="mt-10 max-w-2xl mx-auto p-8 bg-carbon rounded-xl border border-yellow-400/20"><p className="mb-4 text-xl">Email: <a href="mailto:deepakkhohalcod@gmail.com" className="text-yellow-400 hover:underline">deepakkhohalcod@gmail.com</a></p><p>Practice: Punjab & Haryana High Court</p><a href={mailToUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block px-8 py-3 bg-yellow-400 text-black font-bold rounded hover:bg-white transition-colors">Compose in Gmail</a></div></div>} />
          </Routes>
        </main>
        <Footer />
        <AIAssistant />
      </div>
    </div>
  );
};

export default App;
