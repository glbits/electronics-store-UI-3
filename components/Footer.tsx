
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-white italic">EV</div>
              <span className="font-orbitron font-bold text-xl tracking-tighter uppercase">ELECTRO<span className="text-blue-500">VOLT</span></span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Your trusted partner in electrical innovation across Bharat. Providing high-quality ISI-marked components for Indian homes and industries.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Catalog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Bulk Industrial Orders</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Dealer Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                42, Electronic City, Bangalore - 560100
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                sales@electrovolt.in
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                +91 1800-419-EVPRO
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">WhatsApp Updates</h4>
            <p className="text-slate-500 text-sm mb-4">Get the latest pricing and inventory updates.</p>
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Mobile Number" 
                className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-white font-bold transition-all">
                Sub
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>© 2024 ElectroVolt Bharat Solutions. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
            <a href="#" className="hover:text-slate-400">GST Registration</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
