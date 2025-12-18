
import React from 'react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>

        <div className="flex flex-col lg:flex-row h-full">
          <div className="lg:w-1/2 h-80 lg:h-auto">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col">
            <span className="text-blue-400 text-sm font-bold tracking-widest uppercase mb-2">{product.category}</span>
            <h2 className="text-3xl font-orbitron font-bold mb-4">{product.name}</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <h4 className="font-bold text-white mb-3">Key Features</h4>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((f, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-lg text-sm border border-slate-700 flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-white mb-3">Technical Specifications</h4>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                  {Object.entries(product.specs).map(([key, val]) => (
                    <div key={key} className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-500 text-sm">{key}</span>
                      <span className="text-slate-200 text-sm font-medium">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-auto flex items-center justify-between pt-8 border-t border-slate-800">
              <div className="flex flex-col">
                <span className="text-slate-500 text-sm">Inclusive of all taxes</span>
                <span className="text-3xl font-orbitron font-bold text-white">₹{product.price.toLocaleString('en-IN')}</span>
              </div>
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/50">
                Inquire via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
