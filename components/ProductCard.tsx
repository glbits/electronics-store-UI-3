
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative bg-slate-900/40 border border-white/5 rounded-[2.5rem] overflow-hidden cursor-pointer hover:border-blue-500/40 transition-all duration-500 transform hover:-translate-y-2 backdrop-blur-md"
    >
      <div className="relative h-72 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
        />
        <div className="absolute top-6 right-6 bg-slate-950/60 backdrop-blur-xl border border-white/10 text-blue-400 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
          {product.category}
        </div>
        {product.featured && (
          <div className="absolute bottom-6 left-6 bg-blue-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl shadow-blue-500/40">
            Top Rated
          </div>
        )}
      </div>
      
      <div className="p-8">
        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors line-clamp-1">{product.name}</h3>
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-6 font-light">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between pt-6 border-t border-white/5">
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Best Price</span>
            <span className="text-2xl font-bold font-orbitron text-white">₹{product.price.toLocaleString('en-IN')}</span>
          </div>
          <button className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>
        </div>
      </div>
      {/* Decorative Glow */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
};

export default ProductCard;
