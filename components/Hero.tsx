
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Hero: React.FC = () => {
  const mailToUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=deepakkhohalcod@gmail.com&su=Consultation%20Booking&body=Client%20Name%3A%0AType%20of%20Consultation%20Needed%3A%0ATiming%3A%0ADate%3A%0AMobile%20Number%3A";
  
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-obsidian">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#FACC15_1px,transparent_1px)] [background-size:60px_60px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="animate-in fade-in slide-in-from-left duration-1000">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8">
            Traditional <br />
            <span className="text-yellow-400">Litigation</span> Meets <br />
            <span className="relative">
                AI Governance
                <span className="absolute -bottom-2 left-0 w-1/3 h-1.5 bg-yellow-400 rounded-full"></span>
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-12 max-w-xl leading-relaxed">
            Led by <span className="text-white font-bold">ISO 42001:2023 Lead Auditors</span>. We provide elite legal representation for complex disputes and strategic compliance for the AI era.
          </p>
          
          <div className="flex flex-wrap gap-5">
            <a 
              href={mailToUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-yellow-400 text-black font-extrabold rounded-xl hover:shadow-[0_0_35px_rgba(250,204,21,0.6)] transition-all transform hover:-translate-y-1 uppercase tracking-wider"
            >
              Book Consultation
            </a>
            <Link 
              to="/practice-areas" 
              className="px-10 py-5 border-2 border-yellow-400/30 text-white font-bold rounded-xl hover:border-yellow-400 hover:bg-yellow-400/5 transition-all uppercase tracking-wider"
            >
              Our Expertise
            </Link>
          </div>
        </div>
        
        <div className="relative hidden lg:block animate-in fade-in zoom-in duration-1000 delay-200">
            <div className="absolute -inset-10 bg-yellow-400/10 rounded-full blur-[120px] animate-pulse"></div>
            
            <div className="relative aspect-square max-w-lg mx-auto rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-carbon to-black shadow-2xl flex items-center justify-center group">
                <div className="relative z-10 flex flex-col items-center gap-6 animate-float">
                  <Logo size={200} className="drop-shadow-[0_0_30px_rgba(250,204,21,0.4)]" />
                  <div className="flex flex-col items-center text-center">
                    <span className="text-white font-black text-4xl tracking-tighter">LLM <span className="text-yellow-400">ADVOCATES</span></span>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute bottom-10 left-10 right-10">
                    <div className="p-6 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-yellow-400 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(250,204,21,0.4)]">
                          <i className="fas fa-fingerprint text-black text-2xl"></i>
                        </div>
                        <div>
                          <p className="text-white font-bold text-sm tracking-tight">ISO 42001:2023 Lead Auditor Firm</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Visual Accents */}
            <div className="absolute top-0 right-0 p-4 border border-white/10 bg-carbon/50 backdrop-blur rounded-xl animate-bounce duration-[3000ms] shadow-lg">
              <i className="fas fa-gavel text-yellow-400"></i>
            </div>
            <div className="absolute bottom-20 -left-10 p-4 border border-white/10 bg-carbon/50 backdrop-blur rounded-xl animate-bounce duration-[4000ms] shadow-lg">
              <i className="fas fa-microchip text-yellow-400"></i>
            </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
