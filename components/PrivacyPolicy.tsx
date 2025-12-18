
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-obsidian text-slate-300">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-yellow-400 mb-8 border-b border-yellow-400/20 pb-4 uppercase tracking-tighter">Privacy Policy</h1>
        
        <div className="space-y-8 leading-relaxed text-sm md:text-base">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Introduction</h2>
            <p>
              Welcome to LLM Advocates. We are committed to protecting your personal data and your privacy. As experts in the Digital Personal Data Protection (DPDP) Act, 2023, we ensure that our data processing practices are transparent, lawful, and secure. This policy outlines how we handle information collected through our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Information We Collect</h2>
            <p className="mb-2">We may collect limited personal data when you interact with our website, specifically:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact details (Name, Email Address, Phone Number) provided via consultation forms.</li>
              <li>Professional information related to legal queries.</li>
              <li>Technical data (IP addresses, browser types) for website security and optimization.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Purpose of Collection</h2>
            <p>
              Your data is processed solely for the following purposes:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>To respond to your inquiries and legal consultations.</li>
              <li>To provide legal updates or news related to our practice areas (only upon explicit consent).</li>
              <li>To comply with statutory requirements under Indian law.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. DPDP Act Compliance</h2>
            <p>
              In accordance with the DPDP Act, 2023, LLM Advocates acts as the 'Data Fiduciary'. You, as the 'Data Principal', have the right to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Request access to your personal data held by us.</li>
              <li>Request correction or erasure of your personal data.</li>
              <li>Withdraw consent at any time for future processing.</li>
              <li>Seek grievance redressal regarding any data-related concerns.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Data Security</h2>
            <p>
              As ISO 42001:2023 Lead Auditors, we implement rigorous organizational and technical measures to protect your information from unauthorized access, loss, or misuse. We do not sell or trade your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Contact for Grievances</h2>
            <p>
              For any queries regarding this policy or your data rights, please contact our Data Protection Officer at:
              <br /><strong className="text-yellow-400">Email: office@llmadvocates.com</strong>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
