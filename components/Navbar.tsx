
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-obsidian/90 backdrop-blur-md py-4 shadow-lg border-b border-yellow-400/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-4 group">
          <Logo size={44} glow={false} className="group-hover:scale-110 transition-transform duration-300" />
          <div className="flex flex-col">
            <span className="text-white font-bold text-xl tracking-tighter leading-none">LLM <span className="text-yellow-400">ADVOCATES</span></span>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          <Link to="/" className="text-sm font-semibold text-slate-300 hover:text-yellow-400 transition-colors uppercase tracking-widest">Home</Link>
          <Link to="/practice-areas" className="text-sm font-semibold text-slate-300 hover:text-yellow-400 transition-colors uppercase tracking-widest">Practice Areas</Link>
          <Link to="/team" className="text-sm font-semibold text-slate-300 hover:text-yellow-400 transition-colors uppercase tracking-widest">Advocates</Link>
          <Link to="/contact" className="px-6 py-2 border-2 border-yellow-400 text-yellow-400 text-xs font-bold rounded-md hover:bg-yellow-400 hover:text-black transition-all uppercase tracking-[0.15em]">Contact</Link>
        </div>

        <div className="md:hidden text-yellow-400 text-2xl">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
