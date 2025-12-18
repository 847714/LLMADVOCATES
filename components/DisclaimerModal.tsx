
import React, { useEffect, useState } from 'react';

interface DisclaimerModalProps {
  isVisible: boolean;
  onAgree: () => void;
}

const DisclaimerModal: React.FC<DisclaimerModalProps> = ({ isVisible, onAgree }) => {
  const [shouldRender, setShouldRender] = useState(isVisible);

  useEffect(() => {
    if (isVisible) setShouldRender(true);
  }, [isVisible]);

  if (!shouldRender) return null;

  const handleDisagree = () => {
    if (document.referrer) {
      window.location.href = document.referrer;
    } else {
      window.history.back();
    }
  };

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="relative max-w-2xl w-full mx-4 overflow-hidden rounded-[2rem] bg-[#0A0A0A] border border-white/10 shadow-[0_0_100px_rgba(0,0,0,1)]">
        {/* Decorative Gold Accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
        
        <div className="p-8 md:p-12">
          <div className="flex items-center gap-5 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center">
              <i className="fas fa-scale-balanced text-yellow-400 text-3xl"></i>
            </div>
            <div>
              <h2 className="text-3xl font-black text-white tracking-tighter uppercase leading-none">Legal <span className="text-yellow-400">Notice</span></h2>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.3em] mt-1">Bar Council of India Compliance</p>
            </div>
          </div>

          <div className="space-y-6 text-slate-400 text-sm md:text-base leading-relaxed max-h-[40vh] overflow-y-auto pr-4 custom-scrollbar">
            <p className="text-white font-bold">Solicitation & Advertisement Policy:</p>
            <p>
              As per the rules of the Bar Council of India, we are not permitted to solicit work or advertise. By proceeding, you acknowledge the following:
            </p>
            <ul className="space-y-4">
              {[
                "There has been no advertisement, personal communication, solicitation, or inducement of any sort whatsoever from us or any of our members.",
                "The purpose of this website is to provide the user with information about our practice areas and our advocates.",
                "The user wishes to gain information about us for his/her own use.",
                "The information provided is solely at your request for informational purposes only and should not be interpreted as legal advice."
              ].map((text, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-yellow-400 font-black shrink-0 mt-1">0{i+1}.</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-end gap-4">
            <button 
              onClick={handleDisagree}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/5 text-slate-500 font-bold rounded-xl hover:bg-white/5 hover:text-white transition-all uppercase tracking-widest text-xs"
            >
              Exit Site
            </button>
            <button 
              onClick={onAgree}
              className="w-full sm:w-auto px-12 py-4 bg-yellow-400 text-black font-black rounded-xl hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-xl shadow-yellow-400/20 uppercase tracking-[0.2em] text-sm"
            >
              I Acknowledge
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
