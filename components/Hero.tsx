
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Hero: React.FC = () => {
  const mailToUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=deepakkhohalcod@gmail.com&su=Consultation%20Booking&body=Client%20Name%3A%0AType%20of%20Consultation%20Needed%3A%0ATiming%3A%0ADate%3A%0AMobile%20Number%3A";
  
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-obsidian">
      {/* Dynamic Animated Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a1a1a_0%,#050505_100%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.05)_0%,transparent_50%)] animate-slow-spin"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 z-10 grid lg:grid-cols-2 gap-20 items-center">
        <div className="animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
            </span>
            <span className="text-[10px] font-black text-yellow-400 uppercase tracking-[0.3em]">ISO 42001:2023 Certified Firm</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter">
            THE FUTURE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">OF COUNSEL</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-xl leading-relaxed font-medium">
            Bridging the gap between <span className="text-white italic">High Court Litigation</span> and <span className="text-white italic">Generative AI Compliance</span>. Elite representation for a digital-first world.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href={mailToUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 bg-yellow-400 text-black font-black rounded-2xl transition-all hover:shadow-[0_0_50px_rgba(250,204,21,0.4)] overflow-hidden"
            >
              <span className="relative z-10 uppercase tracking-widest">Book Consultation</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <Link 
              to="/practice-areas" 
              className="px-10 py-5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/5 hover:border-white/30 transition-all uppercase tracking-widest"
            >
              Our Expertise
            </Link>
          </div>
        </div>
        
        <div className="relative hidden lg:block animate-in fade-in zoom-in duration-1000 delay-300">
            {/* The Floating Core */}
            <div className="relative z-10 group">
                <div className="absolute -inset-20 bg-yellow-400/10 rounded-full blur-[150px] animate-pulse"></div>
                
                <div className="relative aspect-square max-w-lg mx-auto rounded-[3rem] overflow-hidden border border-white/10 bg-gradient-to-br from-[#121212] to-black shadow-3xl flex flex-col items-center justify-center group-hover:border-yellow-400/30 transition-all duration-500">
                    <div className="relative z-20 flex flex-col items-center gap-8 animate-float">
                      <Logo size={220} glow={true} className="drop-shadow-[0_0_40px_rgba(250,204,21,0.3)] group-hover:scale-110 transition-transform duration-1000" />
                      <div className="flex flex-col items-center text-center">
                        <span className="text-white font-black text-5xl tracking-tighter">LLM <span className="text-yellow-400">ADVOCATES</span></span>
                        <div className="h-0.5 w-12 bg-yellow-400 mt-2 group-hover:w-full transition-all duration-700"></div>
                      </div>
                    </div>

                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.1),transparent_50%)]"></div>
                    <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(250,204,21,0.05),transparent_50%)]"></div>
                </div>

                {/* Satellite Tags */}
                <div className="absolute -top-10 -right-10 p-5 bg-carbon/80 blur-bg border border-white/10 rounded-2xl shadow-2xl animate-bounce-slow">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
                      <i className="fas fa-gavel text-black"></i>
                    </div>
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">High Court</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-5 -left-10 p-5 bg-carbon/80 blur-bg border border-white/10 rounded-2xl shadow-2xl animate-bounce-slower">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                      <i className="fas fa-microchip text-white"></i>
                    </div>
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">AI Governance</span>
                  </div>
                </div>
            </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-25px); }
        }
        @keyframes slow-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes bounce-slower {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(15px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-slow-spin { animation: slow-spin 20s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 5s ease-in-out infinite; }
        .animate-bounce-slower { animation: bounce-slower 7s ease-in-out infinite; }
        .shadow-3xl { box-shadow: 0 40px 100px -20px rgba(0,0,0,0.8); }
        .blur-bg { backdrop-filter: blur(12px); }
      `}</style>
    </section>
  );
};

export default Hero;
