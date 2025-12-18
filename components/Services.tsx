
import React from 'react';

const Services: React.FC = () => {
  const serviceList = [
    { title: 'Smart Home Automation', desc: 'Centralized control for lighting, climate, and security via mobile or voice.', img: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800' },
    { title: 'Industrial Load Balancing', desc: 'High-voltage engineering to optimize factory power consumption and safety.', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800' },
    { title: 'Advanced CCTV Networks', desc: 'End-to-end IP surveillance solutions with cloud storage and AI analytics.', img: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=800' },
    { title: 'Commercial Lighting Design', desc: 'Aesthetic and functional lighting layouts for offices, retail, and hotels.', img: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800' }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-black font-orbitron">OUR <span className="text-blue-500">EXPERTISE</span></h1>
          <p className="text-slate-400 max-w-2xl mx-auto">Beyond products, we provide turnkey solutions tailored to your technical requirements.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {serviceList.map((s, i) => (
            <div key={i} className="group relative flex flex-col md:flex-row bg-slate-900 rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-blue-500/50 transition-all">
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="md:w-1/2 p-10 flex flex-col justify-center">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-2">Service 0{i+1}</span>
                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">{s.desc}</p>
                <button className="text-blue-400 font-bold flex items-center gap-2 hover:gap-4 transition-all group/btn">
                  Learn more <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-black font-orbitron text-white">READY FOR A TECHNICAL CONSULT?</h2>
          <p className="text-blue-100 max-w-xl mx-auto">Our senior engineers are available for specialized site surveys and system architecture planning.</p>
          <button className="bg-white text-blue-700 font-black px-12 py-5 rounded-2xl hover:bg-blue-50 transition-all shadow-2xl">
            Schedule Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
