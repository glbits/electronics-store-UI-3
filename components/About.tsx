
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center space-y-4">
          <span className="text-blue-500 font-black text-[10px] uppercase tracking-[0.4em]">The ElectroVolt Legacy</span>
          <h1 className="text-5xl md:text-7xl font-black font-orbitron">BEYOND THE <span className="text-blue-500">WIRE</span></h1>
          <p className="text-slate-400 max-w-2xl mx-auto">Founded on the principles of safety, innovation, and unwavering quality, ElectroVolt has been a cornerstone of the electrical industry since 1994.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-600/20 rounded-[3rem] blur-3xl opacity-30 group-hover:opacity-50 transition-all"></div>
            <img 
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop" 
              alt="Our Workshop" 
              className="relative rounded-[3rem] border border-white/5 grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-black font-orbitron leading-tight">Our Mission: <br /><span className="text-blue-500">Empowering Every Connection.</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              We believe that electricity is more than just power; it's the heartbeat of modern life. From the flickering warmth of a smart LED in a living room to the relentless rotation of an industrial fan in a high-tech factory, our products provide the reliability that people depend on.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="text-3xl font-bold text-white font-orbitron">29+</h4>
                <p className="text-slate-500 text-xs uppercase tracking-widest mt-1">Years Experience</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="text-3xl font-bold text-white font-orbitron">500+</h4>
                <p className="text-slate-500 text-xs uppercase tracking-widest mt-1">Expert Staff</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/50 rounded-[3rem] p-12 lg:p-20 border border-white/5">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="text-3xl">🛡️</div>
              <h3 className="text-xl font-bold">Uncompromising Safety</h3>
              <p className="text-slate-500 text-sm">Every component we sell is tested under extreme conditions to ensure your peace of mind.</p>
            </div>
            <div className="space-y-4">
              <div className="text-3xl">✨</div>
              <h3 className="text-xl font-bold">Design-Forward</h3>
              <p className="text-slate-500 text-sm">We believe electrical fixtures should be as beautiful as they are functional.</p>
            </div>
            <div className="space-y-4">
              <div className="text-3xl">🌿</div>
              <h3 className="text-xl font-bold">Eco-Innovation</h3>
              <p className="text-slate-500 text-sm">Pushing the boundaries of energy efficiency to reduce both costs and carbon footprints.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
