
import React from 'react';
import { Category } from '../types';

interface CategoryShowcaseProps {
  onSelect: (cat: Category) => void;
}

const CAT_DATA: { label: Category; icon: string; desc: string }[] = [
  { label: 'Lighting', icon: '💡', desc: 'Smart & Industrial LEDs' },
  { label: 'Fans', icon: '🌀', desc: 'High RPM Cooling' },
  { label: 'Wiring', icon: '🔌', desc: 'Fireproof Pure Copper' },
  { label: 'CCTV', icon: '📹', desc: 'AI Security & Surveillance' },
  { label: 'Switches', icon: '🔘', desc: 'Premium Glass Modular' },
  { label: 'Industrial', icon: '🏗️', desc: 'Heavy Duty Components' },
];

const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({ onSelect }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
      {CAT_DATA.map((item) => (
        <button
          key={item.label}
          onClick={() => onSelect(item.label)}
          className="group relative bg-slate-900 border border-white/5 p-6 rounded-3xl hover:border-blue-500/50 transition-all hover:-translate-y-1 overflow-hidden"
        >
          <div className="absolute -right-4 -top-4 text-6xl opacity-10 group-hover:scale-125 group-hover:rotate-12 transition-transform">{item.icon}</div>
          <div className="text-3xl mb-4">{item.icon}</div>
          <h4 className="font-bold text-lg mb-1">{item.label}</h4>
          <p className="text-[10px] text-slate-500 uppercase tracking-wider">{item.desc}</p>
        </button>
      ))}
    </div>
  );
};

export default CategoryShowcase;
