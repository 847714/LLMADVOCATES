
import React from 'react';

interface DisclaimerModalProps {
  isVisible: boolean;
  onAgree: () => void;
}

const DisclaimerModal: React.FC<DisclaimerModalProps> = ({ isVisible, onAgree }) => {
  if (!isVisible) return null;

  const handleDisagree = () => {
    // Redirects the user to the previous page they visited (the source)
    if (document.referrer) {
      window.location.href = document.referrer;
    } else {
      window.history.back();
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-lg p-4">
      <div className="bg-carbon border border-yellow-400 max-w-2xl w-full p-8 rounded-lg shadow-[0_0_50px_rgba(250,204,21,0.1)] animate-in fade-in zoom-in duration-300">
        <div className="flex items-center gap-3 mb-6">
          <i className="fas fa-gavel text-yellow-400 text-3xl"></i>
          <h2 className="text-2xl font-bold text-yellow-400 tracking-wide uppercase">Disclaimer</h2>
        </div>
        <div className="text-slate-300 space-y-4 text-sm md:text-base leading-relaxed">
          <p className="font-semibold text-white">Bar Council of India Disclaimer:</p>
          <p>
            The rules of the Bar Council of India prohibit law firms from soliciting work or advertising in any manner or form. 
            By clicking on "I AGREE" below, the user acknowledges the following:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-400">
            <li>The user acknowledges that there has been no solicitation or advertisement.</li>
            <li>The user wishes to gain information about LLM Advocates for their own knowledge and use.</li>
            <li>The information provided under this website is solely available at your request for informational purposes only.</li>
            <li>Any information obtained or materials downloaded from this website is completely at the user's volition.</li>
          </ul>
        </div>
        <div className="mt-8 flex justify-end gap-4">
          <button 
            onClick={handleDisagree}
            className="px-6 py-3 bg-transparent border border-white/10 text-slate-500 font-bold rounded hover:bg-white/5 hover:text-white transition-all duration-300 uppercase tracking-widest text-xs"
          >
            Disagree
          </button>
          <button 
            onClick={onAgree}
            className="px-8 py-3 bg-transparent border border-yellow-400 text-yellow-400 font-bold rounded hover:bg-yellow-400 hover:text-black transition-all duration-300 uppercase tracking-widest text-sm"
          >
            I Agree
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
