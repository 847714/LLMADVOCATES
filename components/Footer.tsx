
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  const mailToUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=deepakkhohalcod@gmail.com&su=Consultation%20Booking&body=Client%20Name%3A%0AType%20of%20Consultation%20Needed%3A%0ATiming%3A%0ADate%3A%0AMobile%20Number%3A";

  return (
    <footer className="bg-obsidian border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center gap-4 mb-8 group">
            <Logo size={40} glow={false} className="group-hover:scale-110 transition-transform" />
            <span className="text-white font-bold text-2xl tracking-tighter">LLM <span className="text-yellow-400 font-extrabold">ADVOCATES</span></span>
          </Link>
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 border border-white/10 rounded-xl flex items-center justify-center text-slate-400 hover:border-yellow-400 hover:text-yellow-400 hover:bg-yellow-400/5 transition-all shadow-lg"><i className="fab fa-linkedin-in text-lg"></i></a>
            <a href="#" className="w-12 h-12 border border-white/10 rounded-xl flex items-center justify-center text-slate-400 hover:border-yellow-400 hover:text-yellow-400 hover:bg-yellow-400/5 transition-all shadow-lg"><i className="fab fa-twitter text-lg"></i></a>
            <a href={`mailto:deepakkhohalcod@gmail.com`} className="w-12 h-12 border border-white/10 rounded-xl flex items-center justify-center text-slate-400 hover:border-yellow-400 hover:text-yellow-400 hover:bg-yellow-400/5 transition-all shadow-lg"><i className="fas fa-envelope text-lg"></i></a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Navigation</h4>
          <ul className="space-y-4 text-sm text-slate-400 font-medium">
            <li><Link to="/" className="hover:text-yellow-400 transition-colors flex items-center gap-2"><i className="fas fa-chevron-right text-[10px] text-yellow-400/40"></i> Home</Link></li>
            <li><Link to="/team" className="hover:text-yellow-400 transition-colors flex items-center gap-2"><i className="fas fa-chevron-right text-[10px] text-yellow-400/40"></i> Our Advocates</Link></li>
            <li><Link to="/practice-areas" className="hover:text-yellow-400 transition-colors flex items-center gap-2"><i className="fas fa-chevron-right text-[10px] text-yellow-400/40"></i> Practice Areas</Link></li>
            <li>
              <a href={mailToUrl} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors flex items-center gap-2">
                <i className="fas fa-chevron-right text-[10px] text-yellow-400/40"></i> Consultation
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Contact Info</h4>
          <ul className="space-y-6 text-sm text-slate-400">
            <li className="flex gap-4">
              <i className="fas fa-map-marker-alt text-yellow-400 text-lg"></i>
              <span>Punjab & Haryana High Court Region<br /><span className="text-slate-500 italic">Chandigarh Office</span></span>
            </li>
            <li className="flex gap-4">
              <i className="fas fa-envelope-open text-yellow-400 text-lg"></i>
              <span className="break-all">deepakkhohalcod@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] text-slate-500 font-mono tracking-widest uppercase">
        <p>&copy; {new Date().getFullYear()} LLM Advocates</p>
        <div className="flex gap-8">
          <Link to="/privacy" className="hover:text-yellow-400 transition-colors">Privacy</Link>
          <Link to="/cookies" className="hover:text-yellow-400 transition-colors">Cookies</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
