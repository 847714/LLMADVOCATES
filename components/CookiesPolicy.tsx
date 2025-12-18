
import React from 'react';

const CookiesPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-obsidian text-slate-300">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-yellow-400 mb-8 border-b border-yellow-400/20 pb-4 uppercase tracking-tighter">Cookies Policy</h1>
        
        <div className="space-y-8 leading-relaxed text-sm md:text-base">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. What are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. How We Use Cookies</h2>
            <p className="mb-2">LLM Advocates uses cookies for the following essential and functional purposes:</p>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong className="text-yellow-400">Necessary Cookies:</strong> These are required for the operation of our website, such as remembering your acceptance of the Bar Council of India disclaimer.
              </li>
              <li>
                <strong className="text-yellow-400">Analytical Cookies:</strong> We use minimal, non-intrusive analytics to understand how visitors interact with our site, helping us improve the user experience and load times.
              </li>
              <li>
                <strong className="text-yellow-400">Security Cookies:</strong> These help us identify and prevent security risks to our digital infrastructure.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Managing Your Preferences</h2>
            <p>
              Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.aboutcookies.org" className="text-yellow-400 hover:underline">www.aboutcookies.org</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Third-Party Cookies</h2>
            <p>
              We do not use intrusive third-party tracking or advertising cookies. Any third-party service used (e.g., Google Maps for our location) may set their own cookies according to their respective policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Policy Updates</h2>
            <p>
              We may update this Cookies Policy from time to time to reflect changes in technology or legal requirements. We encourage you to review this page periodically.
            </p>
          </section>

          <div className="p-6 bg-carbon border-l-4 border-yellow-400 rounded-r-lg">
             <p className="italic text-slate-400">
               Last Updated: {new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;
