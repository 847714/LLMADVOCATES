
import React from 'react';

interface PracticeArea {
  title: string;
  icon: string;
  desc: string;
  longDesc: string;
}

const PracticeAreas: React.FC = () => {
  const techAreas: PracticeArea[] = [
    { 
      title: "Data Privacy (DPDP Act)", 
      icon: "fa-shield-halved", 
      desc: "Expert guidance on India's new Digital Personal Data Protection Act compliance.", 
      longDesc: "Our practice navigates the complexities of the DPDP Act 2023, focusing on notice-and-consent frameworks, data fiduciary obligations, and cross-border data transfer protocols. We provide strategic defense against potential penalties and ensure robust data principal rights management." 
    },
    { 
      title: "AI Governance", 
      icon: "fa-microchip", 
      desc: "Policy development and risk mitigation strategies for AI deployment.", 
      longDesc: "We assist organizations in establishing ethical AI frameworks that align with global standards. This includes algorithmic bias mitigation, transparency documentation, and liability mapping for automated decision-making systems to prevent legal exposure in a rapidly evolving regulatory landscape." 
    },
    { 
      title: "ISO 42001 Audits", 
      icon: "fa-check-double", 
      desc: "First-in-market legal auditing for the Artificial Intelligence Management System.", 
      longDesc: "As ISO 42001:2023 Lead Auditors, we provide specialized legal audits of your Artificial Intelligence Management System (AIMS). We verify that your AI lifecycles are governed by rigorous safety, security, and accountability controls mandated by international benchmarks." 
    },
    { 
      title: "Cyber Crime", 
      icon: "fa-user-secret", 
      desc: "Defense and prosecution in complex digital forensics and cyber warfare cases.", 
      longDesc: "Specializing in the Information Technology Act, we handle high-stakes litigation involving data breaches, financial frauds, and electronic evidence tampering. Our team bridges the gap between digital forensics and court-room strategy to protect your digital assets." 
    }
  ];

  const litigationAreas: PracticeArea[] = [
    { 
      title: "Criminal Defense", 
      icon: "fa-scale-balanced", 
      desc: "Strategic defense across all levels of criminal proceedings.", 
      longDesc: "We provide comprehensive defense strategies under the Bharatiya Nyaya Sanhita (BNS) and specialized statutes like PMLA and NDPS. From pre-arrest bail to complex trial procedures, we ensure the highest standard of procedural justice and evidence scrutiny." 
    },
    { 
      title: "Family Law", 
      icon: "fa-users", 
      desc: "Sensitive representation in matrimonial, custody, and succession matters.", 
      longDesc: "Our matrimonial practice handles sensitive divorce, maintenance, and child custody disputes with professional empathy and legal rigor. We also specialize in succession planning and partition suits under various personal and secular laws." 
    },
    { 
      title: "Writ Jurisdiction", 
      icon: "fa-landmark", 
      desc: "High Court practice specializing in constitutional remedies and public law.", 
      longDesc: "Practicing extensively before the Punjab & Haryana High Court, we challenge administrative overreach through Writ Petitions under Article 226. We seek immediate judicial intervention in matters of fundamental rights violations and public interest litigation." 
    },
    { 
      title: "Civil Disputes", 
      icon: "fa-file-contract", 
      desc: "Commercial litigation, property disputes, and contractual arbitration.", 
      longDesc: "We represent clients in high-value commercial suits, RERA matters, and insolvency proceedings (IBC). Our focus is on achieving swift resolution through both aggressive litigation and strategic alternative dispute resolution mechanisms like arbitration and mediation." 
    }
  ];

  const renderCard = (area: PracticeArea) => (
    <div 
      key={area.title} 
      className="group relative p-8 bg-obsidian rounded-2xl border border-white/5 hover:border-yellow-400/60 transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_20px_60px_rgba(250,204,21,0.2)] z-0 hover:z-10"
    >
      <div className="flex flex-col h-full">
        <div className="flex gap-6 mb-6">
          <div className="w-16 h-16 bg-yellow-400/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-500 shadow-lg">
            <i className={`fas ${area.icon} text-yellow-400 group-hover:text-black text-2xl`}></i>
          </div>
          <div className="flex-grow">
            <h5 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors tracking-tight">{area.title}</h5>
            <div className="w-12 h-1 bg-yellow-400/20 group-hover:w-full group-hover:bg-yellow-400/40 transition-all duration-500 mb-4"></div>
            <p className="text-sm text-slate-300 font-semibold mb-3 leading-relaxed">{area.desc}</p>
          </div>
        </div>

        <div className="pt-4 border-t border-white/5 mt-auto">
          <p className="text-sm text-slate-400 leading-relaxed font-normal italic group-hover:text-slate-200 transition-colors">
            {area.longDesc}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="practice-areas" className="py-32 bg-carbon relative overflow-hidden">
      {/* Dynamic light effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-400/5 blur-[180px] rounded-full -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 blur-[180px] rounded-full -ml-64 -mb-64"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <div className="inline-block px-4 py-1 rounded-full border border-yellow-400/20 bg-yellow-400/5 mb-6">
              <span className="text-yellow-400 font-mono text-[11px] tracking-widest uppercase">EXPERTISE & SPECIALIZATIONS</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tighter leading-tight">
              Expertise <br />
              <span className="text-yellow-400">& Specialization</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              We provide deep-domain legal mastery across the spectrum of traditional litigation and the emerging frontier of digital governance.
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Column 1: Digital & AI */}
          <div className="space-y-12">
            <div className="flex items-center gap-6 border-b border-yellow-400/20 pb-8">
              <div className="w-20 h-20 bg-yellow-400/5 rounded-3xl flex items-center justify-center border border-yellow-400/20 shadow-[0_0_30px_rgba(250,204,21,0.15)]">
                <i className="fas fa-code-merge text-yellow-400 text-4xl"></i>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white tracking-tight">Digital & <span className="text-yellow-400">AI Governance</span></h4>
                <p className="text-[10px] text-slate-500 font-mono tracking-[0.2em] uppercase mt-2 font-bold">ISO 42001:2023 LEAD AUDITOR CERTIFIED</p>
              </div>
            </div>
            <div className="grid gap-8">
              {techAreas.map(renderCard)}
            </div>
          </div>

          {/* Column 2: Litigation */}
          <div className="space-y-12">
            <div className="flex items-center gap-6 border-b border-yellow-400/20 pb-8">
              <div className="w-20 h-20 bg-yellow-400/5 rounded-3xl flex items-center justify-center border border-yellow-400/20 shadow-[0_0_30px_rgba(250,204,21,0.15)]">
                <i className="fas fa-gavel text-yellow-400 text-4xl"></i>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white tracking-tight">High Court <span className="text-yellow-400">Litigation</span></h4>
                <p className="text-[10px] text-slate-500 font-mono tracking-[0.2em] uppercase mt-2 font-bold">PUNJAB & HARYANA HIGH COURT REGISTRY</p>
              </div>
            </div>
            <div className="grid gap-8">
              {litigationAreas.map(renderCard)}
            </div>
          </div>
        </div>

        {/* Global CTA */}
        <div className="mt-32 text-center animate-in fade-in zoom-in duration-700">
          <div className="inline-flex p-1 bg-obsidian border border-white/5 rounded-2xl shadow-2xl">
            <div className="px-10 py-6 text-slate-400 text-sm flex flex-col md:flex-row items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-400/10 flex items-center justify-center">
                  <i className="fas fa-user-tie text-yellow-400"></i>
                </div>
                <span className="font-medium">Seeking a bespoke legal strategy for your corporate or personal case?</span>
              </div>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=deepakkhohalcod@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-400 font-bold hover:text-white transition-colors bg-yellow-400/5 px-6 py-2 rounded-xl border border-yellow-400/20 hover:bg-yellow-400 hover:text-black"
              >
                Schedule Partner Briefing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
