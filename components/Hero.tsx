
import React from 'react';

interface HeroProps {
  onViewProducts: () => void;
}

const Hero: React.FC<HeroProps> = ({ onViewProducts }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 pb-16">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[0%] right-[-10%] w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[150px] animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30">
          <svg className="w-full h-full text-white/5" viewBox="0 0 100 100" fill="currentColor">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-blue-400 font-medium tracking-wide backdrop-blur-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            Trusted Partner for Indian Industries since 1994
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-orbitron leading-none tracking-tight">
              POWERING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">BHARAT.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Illuminating Indian homes, wiring the future. From high-speed fans to BIS-certified industrial solutions, ElectroVolt is your local authority in premium electronics.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
            <button 
              onClick={onViewProducts}
              className="group relative px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl transition-all shadow-2xl shadow-blue-500/40 hover:scale-105 active:scale-95 overflow-hidden w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View Products
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <a 
              href="#contact" 
              className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl border border-white/10 transition-all backdrop-blur-md w-full sm:w-auto text-center"
            >
              Find a Store
            </a>
          </div>

          {/* Trust Badges */}
          <div className="pt-10 flex flex-wrap justify-center lg:justify-start items-center gap-8 opacity-60 hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 border-2 border-slate-500 rounded flex items-center justify-center font-black text-[10px] text-slate-500">ISI</div>
              <span className="text-[10px] uppercase font-bold text-slate-500">Certified Safety</span>
            </div>
            <div className="h-6 w-px bg-white/10"></div>
            <div className="flex items-center gap-2">
              <svg className="w-8 h-8 text-slate-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
              <span className="text-[10px] uppercase font-bold text-slate-500">BIS Approved</span>
            </div>
            <div className="h-6 w-px bg-white/10"></div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold font-orbitron text-slate-400">Made in India</span>
            </div>
          </div>
        </div>

        <div className="relative group perspective-1000 hidden lg:block">
          <div className="absolute -inset-10 bg-blue-600/20 rounded-[4rem] blur-[80px] opacity-30 animate-pulse"></div>
          <div className="relative transform transition-transform duration-700 hover:rotate-y-12">
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl electric-glow">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop" 
                alt="Electric Tech India" 
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-10 left-10 right-10 p-6 glass-effect rounded-3xl border border-white/10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold">30+</div>
                  <div>
                    <h4 className="font-bold text-white">Years in Bharat</h4>
                    <p className="text-xs text-slate-400">Serving 10,000+ Pin Codes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Credibility Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/5 border-t border-white/5 backdrop-blur-sm py-4 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center overflow-hidden whitespace-nowrap gap-12">
          {["Authorized Havells Partner", "Polycab Certified Dealer", "Anchor by Panasonic Elite", "Legrand India Partner", "Crompton Lighting Hub"].map((text, i) => (
            <span key={i} className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-600 hover:text-blue-500/50 cursor-default transition-colors">{text}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
