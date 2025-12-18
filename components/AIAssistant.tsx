
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import Logo from './Logo';

const OFFLINE_ACTS_DB: Record<string, { title: string, sections: string[] }> = {
  "BNS": {
    title: "Bharatiya Nyaya Sanhita, 2023",
    sections: ["Sec 4-13: Punishments", "Sec 14-44: Exceptions", "Sec 63-73: Sexual Offences", "Sec 100-113: Offences affecting Life"]
  },
  "BNSS": {
    title: "Bharatiya Nagarik Suraksha Sanhita, 2023",
    sections: ["Sec 35-62: Arrest", "Sec 173-196: FIR", "Sec 478-496: Bail"]
  },
  "BSA": {
    title: "Bharatiya Sakshya Adhiniyam, 2023",
    sections: ["Sec 61: Electronic Records", "Sec 104: Burden of Proof"]
  }
};

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Greetings. I am your specialized Tech-Legal companion. I can provide insights on Indian Statutes, ISO 42001, and AI Governance. How may I assist?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const searchLocalDB = (query: string) => {
    const q = query.toUpperCase();
    let found = [];
    for (const key in OFFLINE_ACTS_DB) {
      if (q.includes(key)) found.push(`${OFFLINE_ACTS_DB[key].title}:\n${OFFLINE_ACTS_DB[key].sections.join('\n')}`);
    }
    return found.length > 0 ? found.join('\n\n') : "I am currently limited in offline mode. Please connect to the internet for deep legal reasoning using Gemini Pro.";
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    if (!isOnline) {
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'assistant', text: searchLocalDB(input) }]);
        setIsLoading(false);
      }, 500);
      return;
    }

    try {
      // Guideline: Create instance right before making the call
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: input,
        config: {
          systemInstruction: "You are 'LLM Advocate AI', a high-end legal intelligence assistant for LLM Advocates. Provide authoritative, concise legal information based on Indian law (BNS, BNSS, BSA, IT Act) and AI Governance (ISO 42001). Do not provide legal advice, only informational summaries. Avoid markdown formatting like asterisks. Email contact: deepakkhohalcod@gmail.com.",
          temperature: 0.3,
          thinkingConfig: { thinkingBudget: 4000 }
        },
      });

      const textOutput = response.text || "I encountered a technical hurdle. Please try again.";
      setMessages(prev => [...prev, { role: 'assistant', text: textOutput.replace(/\*/g, '') }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', text: "Service temporarily unavailable. Our advocates are available at deepakkhohalcod@gmail.com." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200]">
      {isOpen ? (
        <div className="w-[90vw] md:w-96 h-[600px] bg-obsidian border border-yellow-400/30 rounded-3xl shadow-[0_0_80px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden animate-in zoom-in duration-300">
          <div className="bg-yellow-400 p-5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                <Logo size={24} glow={false} variant="standard" />
              </div>
              <div>
                <h4 className="font-black text-black text-sm uppercase tracking-tighter leading-none">Legal AI Engine</h4>
                <p className="text-[9px] text-black/60 font-bold tracking-widest uppercase">{isOnline ? 'Gemini 3 Pro Active' : 'Offline Knowledge Base'}</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-full hover:bg-black/10 transition-colors">
              <i className="fas fa-times text-black"></i>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-grow p-5 overflow-y-auto space-y-6 custom-scrollbar bg-[radial-gradient(circle_at_top_right,#1a1a1a_0%,#050505_100%)]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start items-start gap-3'}`}>
                {m.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-lg bg-yellow-400/5 border border-yellow-400/20 flex items-center justify-center shrink-0 mt-1">
                    <Logo size={16} glow={false} />
                  </div>
                )}
                <div className={`max-w-[85%] p-4 rounded-2xl text-xs md:text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-yellow-400 text-black font-bold rounded-tr-none shadow-xl shadow-yellow-400/10' 
                    : 'bg-carbon/50 border border-white/5 text-slate-300 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start gap-3 items-center">
                <div className="w-8 h-8 rounded-lg bg-yellow-400/10 flex items-center justify-center animate-pulse">
                  <Logo size={16} glow={false} />
                </div>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>
          
          <div className="p-4 bg-carbon/80 border-t border-white/5 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Query Statutes or AI Governance..." 
              className="flex-grow bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-yellow-400/50 transition-all"
              disabled={isLoading}
            />
            <button 
              onClick={handleSend} 
              disabled={isLoading}
              className="bg-yellow-400 text-black w-12 h-12 rounded-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-[0_15px_40px_rgba(250,204,21,0.3)] hover:scale-110 hover:-rotate-3 transition-all group relative border border-white/10 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          <Logo size={32} variant="black" />
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
