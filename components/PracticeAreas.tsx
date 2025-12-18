
import React from 'react';

interface PracticeArea {
  title: string;
  icon: string;
  desc: string;
  longDesc: string;
}

const PracticeAreas: React.FC = () => {
  const techAreas: PracticeArea[] = [
    { title: "DPDP Act 2023", icon: "fa-shield-halved", desc: "Digital Personal Data Protection compliance.", longDesc: "We provide strategic advisory on notice-and-consent frameworks, data fiduciary obligations, and cross-border transfer protocols under India's landmark privacy legislation." },
    { title: "AI Governance", icon: "fa-microchip", desc: "Risk mitigation for AI deployment.", longDesc: "Algorithmic bias mitigation, transparency documentation, and liability mapping for automated decision-making systems to prevent complex legal exposure." },
    { title: "ISO 42001 Audits", icon: "fa-check-double", desc: "Specialized Legal AIMS Auditing.", longDesc: "As Lead Auditors, we verify that your AI systems are governed by the rigorous safety and accountability controls mandated by international ISO/IEC 42001 benchmarks." },
    { title: "Cyber Litigation", icon: "fa-user-secret", desc: "Digital forensics & Cyber warfare.", longDesc: "Expert representation in data breaches, financial frauds, and electronic evidence tampering cases, bridging the gap between forensics and law." }
  ];

  const litigationAreas: PracticeArea[] = [
    { title: "Criminal Defense", icon: "fa-scale-balanced", desc: "BNS & Special Statute trials.", longDesc: "Aggressive defense under Bharatiya Nyaya Sanhita (BNS), PMLA, and NDPS, focusing on procedural justice and rigorous evidence scrutiny." },
    { title: "Constitutional Writs", icon: "fa-landmark", desc: "High Court Writ Jurisdiction.", longDesc: "Challenging administrative overreach through Petitions under Article 226/227. Specialized in fundamental rights and service law matters." },
    { title: "Matrimonial Law", icon: "fa-users", desc: "Complex family & succession suits.", longDesc: "Navigating sensitive divorce, maintenance, and child custody disputes with professional empathy and legal rigor at the High Court level." },
    { title: "Civil & Commercial", icon: "fa-file-contract", desc: "High-value commercial litigation.", longDesc: "Representation in RERA, IBC, and contractual arbitration. We focus on swift resolution through litigation and strategic ADR." }
  ];

  const renderCard = (area: PracticeArea) => (
    <div 
      key={area.title} 
      className="group p-8 bg-obsidian border border-white/5 rounded-3xl transition-all duration-500 hover:border-yellow-400/40 hover:bg-carbon/60 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
    >
      <div className="w-14 h-14 bg-yellow-400/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-500">
        <i className={`fas ${area.icon} text-yellow-400 group-hover:text-black text-xl`}></i>
      </div>
      <h5 className="text-xl font-black text-white mb-3 group-hover:text-yellow-400 transition-colors uppercase tracking-tight">{area.title}</h5>
      <p className="text-sm text-slate-400 leading-relaxed mb-4">{area.desc}</p>
      <div className="h-0.5 w-8 bg-yellow-400/20 group-hover:w-full group-hover:bg-yellow-400/50 transition-all duration-700 mb-6"></div>
      <p className="text-[12px] text-slate-500 italic leading-relaxed group-hover:text-slate-300 transition-colors">
        {area.longDesc}
      </p>
    </div>
  );

  return (
    <section id="practice-areas" className="py-32 bg-carbon relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-yellow-400 font-black text-[10px] tracking-[0.4em] uppercase mb-4 block">Our Specializations</span>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
              MASTERING <span className="text-yellow-400">BOTH</span> <br />FRONTIERS
            </h2>
          </div>
          <p className="text-slate-400 max-w-sm text-sm font-medium leading-relaxed">
            From the historic courtrooms of the High Court to the synthetic logic of AI algorithms, we provide precision counsel.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="flex items-center gap-4 border-b border-yellow-400/20 pb-6">
              <i className="fas fa-brain text-yellow-400 text-3xl"></i>
              <h4 className="text-2xl font-black text-white uppercase tracking-tighter">Digital & AI Governance</h4>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {techAreas.map(renderCard)}
            </div>
          </div>

          <div className="space-y-12">
            <div className="flex items-center gap-4 border-b border-yellow-400/20 pb-6">
              <i className="fas fa-gavel text-yellow-400 text-3xl"></i>
              <h4 className="text-2xl font-black text-white uppercase tracking-tighter">High Court Litigation</h4>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {litigationAreas.map(renderCard)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
