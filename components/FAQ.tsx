
import React, { useState } from 'react';

const FAQ_ITEMS = [
  {
    q: "What is the warranty period on ElectroVolt products?",
    a: "Standard products carry a 2-year replacement warranty. Industrial components and TitanCore wiring offer an extended 5 to 10-year manufacturer warranty depending on the specific model."
  },
  {
    q: "Are your smart lighting products compatible with Google Home and Alexa?",
    a: "Yes, our Lumix Pro and Smart Home series are fully compatible with major smart home ecosystems including Amazon Alexa, Google Assistant, and Apple HomeKit via our Smart Hub X."
  },
  {
    q: "Do you provide installation services for industrial fans?",
    a: "Absolutely. Our Elite Installation team consists of certified engineers specialized in heavy-duty mounting and electrical load balancing for factories and large commercial spaces."
  },
  {
    q: "How can I tell if I need high-voltage load balancing?",
    a: "If you experience frequent circuit breaks, flickering lights, or rising power costs in a commercial setting, you likely need a load audit. Contact us for a professional site survey."
  },
  {
    q: "What makes TitanCore wiring safer than standard copper?",
    a: "TitanCore utilizes 99.9% pure oxygen-free copper and a proprietary flame-retardant LSZH (Low Smoke Zero Halogen) jacket that prevents toxic fumes in the event of an electrical fire."
  }
];

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center space-y-4">
          <span className="text-blue-500 font-black text-[10px] uppercase tracking-[0.4em]">Support Hub</span>
          <h1 className="text-5xl md:text-7xl font-black font-orbitron tracking-tighter">COMMON <span className="text-blue-500">QUERIES</span></h1>
          <p className="text-slate-400">Everything you need to know about our products and services.</p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, i) => (
            <div 
              key={i} 
              className={`group bg-slate-900 border transition-all duration-300 rounded-3xl overflow-hidden ${openIdx === i ? 'border-blue-500/50 bg-slate-900' : 'border-white/5 hover:border-white/10'}`}
            >
              <button 
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between p-8 text-left"
              >
                <span className="text-lg font-bold pr-8">{item.q}</span>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${openIdx === i ? 'bg-blue-600 text-white rotate-180' : 'bg-white/5 text-slate-500 group-hover:text-white'}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                </span>
              </button>
              <div className={`transition-all duration-300 ease-in-out ${openIdx === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                <div className="px-8 pb-8 text-slate-400 leading-relaxed font-light">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-white/5 border border-white/10 rounded-[2.5rem] text-center">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-slate-500 mb-8">Our expert consultants are available 24/7 through our direct support line.</p>
          <button className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all">
            Contact Support Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
