
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import Logo from './Logo';

// Comprehensive Structured Legal Knowledge Base
const OFFLINE_ACTS_DB: Record<string, { title: string, sections: string[] }> = {
  "BNS": {
    title: "Bharatiya Nyaya Sanhita, 2023",
    sections: [
      "Sec 4-13: Punishments and Commutation",
      "Sec 14-44: General Exceptions",
      "Sec 63-73: Sexual Offences",
      "Sec 100-113: Offences affecting Life",
      "Sec 303-313: Theft, Snatching, Robbery",
      "Sec 356: Defamation"
    ]
  },
  "BNSS": {
    title: "Bharatiya Nagarik Suraksha Sanhita, 2023",
    sections: [
      "Sec 35-62: Arrest of Persons",
      "Sec 173-196: FIR and Investigation",
      "Sec 478-496: Bail and Bonds"
    ]
  },
  "BSA": {
    title: "Bharatiya Sakshya Adhiniyam, 2023",
    sections: [
      "Sec 15-25: Admissions and Confessions",
      "Sec 61: Electronic Records",
      "Sec 104-120: Burden of Proof"
    ]
  },
  "CONSTITUTION": {
    title: "The Constitution of India",
    sections: [
      "Art 14-18: Right to Equality",
      "Art 21: Right to Life & Liberty",
      "Art 32/226: Writ Jurisdictions"
    ]
  }
};

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      role: 'assistant', 
      text: 'Greetings! I am LLM Advocate, your expert legal companion. I am fully loaded with the Arrangement of Sections for BNS, BNSS, BSA, and the Constitution. How can I serve you today?' 
    }
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
  }, [messages]);

  const searchLocalDB = (query: string) => {
    const q = query.toUpperCase();
    if (q.includes("CONTACT") || q.includes("EMAIL") || q.includes("HIRE")) {
      return "To reach our advocates, please email deepakkhohalcod@gmail.com directly.";
    }

    let foundActs: string[] = [];
    for (const key in OFFLINE_ACTS_DB) {
      if (q.includes(key) || OFFLINE_ACTS_DB[key].title.toUpperCase().includes(q)) {
        foundActs.push(`${OFFLINE_ACTS_DB[key].title}:\n${OFFLINE_ACTS_DB[key].sections.join('\n')}`);
      }
    }
    return foundActs.length > 0 ? foundActs.join('\n\n') : "Please specify an Act (BNS, BSA, etc.) or connect to the internet for a deep AI analysis.";
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    if (!isOnline) {
      setTimeout(() => {
        const localResponse = searchLocalDB(input);
        setMessages(prev => [...prev, { role: 'assistant', text: localResponse }]);
        setIsLoading(false);
      }, 600);
      return;
    }

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: input,
        config: {
          systemInstruction: `You are 'LLM Advocate', the official AI Legal Assistant for LLM Advocates. Speak with authority, provide Bare Act references, and avoid formatting characters like asterisks. Email: deepakkhohalcod@gmail.com.`,
          temperature: 0.4,
        },
      });

      const cleanText = (response.text || "Service error.").replace(/\*/g, '');
      setMessages(prev => [...prev, { role: 'assistant', text: cleanText }]);
    } catch (error) {
      const localFallback = searchLocalDB(input);
      setMessages(prev => [...prev, { role: 'assistant', text: `Connection Issue. Local DB Results:\n\n${localFallback}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="w-80 md:w-96 h-[550px] bg-carbon border border-yellow-400/40 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header with Logo */}
          <div className="bg-yellow-400 p-4 flex justify-between items-center shadow-lg">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-black rounded-full border-2 border-black flex items-center justify-center overflow-hidden shadow-inner">
                  <Logo size={32} glow={false} />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-yellow-400 animate-pulse"></div>
              </div>
              <div>
                <span className="font-bold text-black block leading-none text-lg">LLM Advocate</span>
                <span className="text-[9px] text-black/70 font-mono font-bold uppercase tracking-widest">
                  {isOnline ? 'Active AI Support' : 'Offline Mode Active'}
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-black hover:scale-110 transition-transform p-2 bg-black/5 rounded-lg">
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
          
          {/* Chat Window */}
          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-6 bg-obsidian/40 custom-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start items-end gap-2'}`}>
                {m.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center shrink-0 mb-1">
                    <Logo size={20} glow={false} />
                  </div>
                )}
                <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap shadow-sm ${
                  m.role === 'user' 
                    ? 'bg-yellow-400 text-black rounded-tr-none font-medium' 
                    : 'bg-carbon border border-white/5 text-slate-300 rounded-bl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center shrink-0">
                  <Logo size={20} glow={false} className="animate-pulse" />
                </div>
                <div className="bg-carbon border border-white/5 p-3 rounded-xl rounded-bl-none flex gap-1.5 items-center">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce [animation-delay:-0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce [animation-delay:-0.4s]"></div>
                </div>
              </div>
            )}
          </div>
          
          {/* Input Area */}
          <div className="p-4 border-t border-white/5 bg-obsidian/60 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={isOnline ? "Ask about BNS, Writs, or Hire us..." : "BNS/BNSS Search..."} 
              className="flex-grow bg-carbon border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-yellow-400/50 transition-all placeholder:text-slate-600"
              disabled={isLoading}
            />
            <button 
              onClick={handleSend} 
              disabled={isLoading}
              className={`bg-yellow-400 text-black w-12 h-12 rounded-xl flex items-center justify-center transition-all ${isLoading ? 'opacity-50' : 'hover:scale-105 active:scale-95 shadow-lg'}`}
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(250,204,21,0.4)] hover:scale-110 transition-transform group relative border-4 border-obsidian overflow-hidden"
        >
          <Logo size={40} variant="black" className="group-hover:rotate-12 transition-transform" />
          <div className="absolute top-0 right-0 flex h-4 w-4">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
             <span className="relative inline-flex rounded-full h-4 w-4 bg-white border-2 border-obsidian"></span>
          </div>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
