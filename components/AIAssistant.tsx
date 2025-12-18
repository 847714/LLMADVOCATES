
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import Logo from './Logo';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Greetings. I am your specialized Tech-Legal companion. How may I assist you with Indian Statutes or AI Governance today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput || isLoading) return;
    
    const userMsg = { role: 'user', text: trimmedInput };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Guideline: Create instance right before making the call
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: trimmedInput,
        config: {
          systemInstruction: "You are 'LLM Advocate AI'. You assist visitors of the LLM Advocates law firm website. You specialize in Indian law (BNS, BNSS, BSA, IT Act) and ISO 42001 AI Governance. Provide authoritative, concise, and academic summaries. Never give personal legal advice. Always state: 'This is for informational purposes only'. If asked for a consultation, provide the partner's email: deepakkhohalcod@gmail.com.",
          temperature: 0.4,
          thinkingConfig: { thinkingBudget: 16000 }
        },
      });

      const textOutput = response.text || "I was unable to process that query. Please try again or contact a partner directly.";
      setMessages(prev => [...prev, { role: 'assistant', text: textOutput }]);
    } catch (error) {
      console.error("AI Assistant Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', text: "Service temporarily limited. Please reach out to our partners for immediate legal assistance." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200]">
      {isOpen ? (
        <div className="w-[90vw] md:w-[400px] h-[600px] bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] shadow-[0_30px_90px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden animate-fade-in">
          <div className="bg-yellow-400 p-6 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center shadow-lg">
                <Logo size={24} glow={false} variant="standard" />
              </div>
              <div>
                <h4 className="font-black text-black text-xs uppercase tracking-widest">Legal AI</h4>
                <p className="text-[9px] text-black/50 font-bold tracking-widest uppercase">Proprietary Engine</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-full hover:bg-black/10 transition-colors flex items-center justify-center">
              <i className="fas fa-times text-black"></i>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-6 custom-scrollbar bg-gradient-to-b from-transparent to-black/20">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start items-start gap-4'}`}>
                {m.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-lg bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center shrink-0 mt-1">
                    <Logo size={16} glow={false} />
                  </div>
                )}
                <div className={`max-w-[85%] p-4 rounded-2xl text-xs md:text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-yellow-400 text-black font-bold rounded-tr-none shadow-lg shadow-yellow-400/10' 
                    : 'bg-white/5 border border-white/10 text-slate-300 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start gap-4 items-center">
                <div className="w-8 h-8 rounded-lg bg-yellow-400/20 flex items-center justify-center animate-pulse">
                  <Logo size={16} glow={false} />
                </div>
                <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-widest animate-pulse">Analyzing Statutes...</span>
              </div>
            )}
          </div>
          
          <div className="p-4 bg-black/40 border-t border-white/5 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Query BNS, BNSS or AI Risk..." 
              className="flex-grow bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-xs text-white focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-all"
              disabled={isLoading}
            />
            <button 
              onClick={handleSend} 
              disabled={isLoading}
              className="bg-yellow-400 text-black w-14 h-14 rounded-2xl flex items-center justify-center hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-lg"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-18 h-18 bg-yellow-400 rounded-3xl flex items-center justify-center shadow-[0_20px_50px_rgba(250,204,21,0.3)] hover:scale-110 hover:-rotate-3 transition-all group relative border-4 border-black overflow-hidden"
          style={{ width: '70px', height: '70px' }}
        >
          <Logo size={36} variant="black" />
          <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
