
import React from 'react';

const Team: React.FC = () => {
  const advocates = [
    {
      name: "Advocate Ritik Khurana",
      title: "Managing Partner & Senior Counsel",
      qualifications: "B.A. LL.B (Hons.), LL.M (PU), ISO 42001:2023 Lead Auditor",
      focus: "Constitutional Writs, Service Law & AI Regulatory Compliance",
      bio: "A prominent practitioner at the Punjab & Haryana High Court with over a decade of experience in high-stakes litigation. He specializes in bridging complex constitutional law with the emerging legalities of AI governance and data protection.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      linkedin: "https://in.linkedin.com/in/rkkhurana"
    },
    {
      name: "Advocate Parul Kumar",
      title: "Partner & Lead Legal Consultant",
      qualifications: "B.A. LL.B, LL.M (NLU), ISO 42001:2023 Lead Auditor",
      focus: "Matrimonial Litigation, Cyber Law & Ethical AI Auditing",
      bio: "An expert at the Punjab & Haryana High Court specializing in family law and digital forensics. She integrates her extensive trial experience with her role as an ISO 42001 Lead Auditor to navigate the complexities of AI ethics and privacy in personal law.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      linkedin: "https://in.linkedin.com/in/parul-kumar-41092231a"
    }
  ];

  return (
    <section id="team" className="py-24 bg-obsidian">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-yellow-400 font-mono mb-2 tracking-widest uppercase text-xs">The Leadership</h2>
          <h3 className="text-4xl font-bold text-white uppercase tracking-tighter">Our <span className="text-yellow-400">Team</span></h3>
          <div className="w-20 h-1 bg-yellow-400 mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {advocates.map((advocate, index) => (
            <div key={index} className="group relative bg-carbon rounded-2xl overflow-hidden border border-white/5 hover:border-yellow-400/40 transition-all duration-500 glow">
              <div className="grid lg:grid-cols-5 h-full">
                <div className="lg:col-span-2 overflow-hidden bg-black aspect-[4/5] lg:aspect-auto">
                  <img 
                    src={advocate.image} 
                    alt={advocate.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-80"
                  />
                </div>
                <div className="lg:col-span-3 p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <h4 className="text-2xl font-bold text-white mb-1 tracking-tight">{advocate.name}</h4>
                    <p className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">{advocate.title}</p>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <i className="fas fa-university text-yellow-400 mt-1 shrink-0"></i>
                      <p className="text-xs text-slate-400 font-mono">{advocate.qualifications}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <i className="fas fa-balance-scale text-yellow-400 mt-1 shrink-0"></i>
                      <p className="text-sm font-bold text-slate-300">{advocate.focus}</p>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 italic border-l-2 border-yellow-400/20 pl-4">
                    "{advocate.bio}"
                  </p>
                  <div className="flex gap-4 mt-auto">
                    <a 
                      href={advocate.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-500 hover:text-yellow-400 hover:bg-yellow-400/10 transition-all"
                    >
                      <i className="fab fa-linkedin-in text-lg"></i>
                    </a>
                    <a 
                      href="mailto:deepakkhohalcod@gmail.com" 
                      className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-500 hover:text-yellow-400 hover:bg-yellow-400/10 transition-all"
                    >
                      <i className="fas fa-envelope text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
