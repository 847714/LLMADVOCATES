
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Expertise', path: '/practice-areas' },
    { name: 'Advocates', path: '/team' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-obsidian/80 blur-bg py-3 shadow-2xl border-b border-yellow-400/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <Logo size={40} glow={scrolled} className="group-hover:rotate-[360deg] transition-transform duration-700" />
          <div className="flex flex-col">
            <span className="text-white font-black text-xl tracking-tighter leading-none">LLM <span className="text-yellow-400">ADVOCATES</span></span>
            <span className="text-[9px] text-slate-500 font-mono tracking-[0.3em] uppercase hidden sm:block">Tech-Legal Fusion</span>
          </div>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-xs font-bold uppercase tracking-widest transition-all hover:text-yellow-400 ${location.pathname === link.path ? 'text-yellow-400' : 'text-slate-400'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="px-5 py-2.5 bg-yellow-400/5 border border-yellow-400/30 text-yellow-400 text-[10px] font-black rounded-lg hover:bg-yellow-400 hover:text-black transition-all uppercase tracking-[0.2em] shadow-lg shadow-yellow-400/5">
            Contact Partner
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-yellow-400 text-2xl p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-obsidian z-[90] flex flex-col items-center justify-center gap-8 transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        {navLinks.map(link => (
          <Link 
            key={link.path} 
            to={link.path} 
            className="text-2xl font-black text-white uppercase tracking-tighter hover:text-yellow-400 transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <Link to="/contact" className="mt-4 px-10 py-4 bg-yellow-400 text-black font-black rounded-xl uppercase tracking-widest">
          Get in Touch
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
