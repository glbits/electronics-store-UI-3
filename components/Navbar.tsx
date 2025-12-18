
import React, { useState, useEffect } from 'react';
import { PagePath } from '../types';

interface NavbarProps {
  isScrolled: boolean;
  onSearch: (query: string) => void;
  currentPath: PagePath;
  setPage: (path: PagePath) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, onSearch, currentPath, setPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>('');

  // Track scroll position to update active hash for Home page sections
  useEffect(() => {
    if (currentPath !== 'home') {
      setActiveHash('');
      return;
    }

    const handleScroll = () => {
      const catalogEl = document.getElementById('catalog');
      if (catalogEl) {
        const rect = catalogEl.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
          setActiveHash('catalog');
        } else if (window.scrollY < 300) {
          setActiveHash('');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPath]);

  const handleNavClick = (path: PagePath, hash?: string) => {
    setPage(path);
    setIsMobileMenuOpen(false);
    if (hash) {
      setActiveHash(hash);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          const navHeight = 80;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      setActiveHash('');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const NavLink = ({ path, label, hash }: { path: PagePath; label: string; hash?: string }) => {
    const isActive = currentPath === path && (hash ? activeHash === hash : activeHash === '');

    return (
      <button 
        onClick={() => handleNavClick(path, hash)}
        className={`relative py-2 px-1 text-sm font-medium transition-all group ${isActive ? 'text-blue-500' : 'text-slate-300 hover:text-white'}`}
      >
        {label}
        <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
      </button>
    );
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => handleNavClick('home')}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center font-bold text-xl text-white italic electric-glow group-hover:rotate-12 transition-transform">EV</div>
          <span className="font-orbitron font-bold text-2xl tracking-tighter hidden sm:block uppercase">ELECTRO<span className="text-blue-500">VOLT</span></span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <NavLink path="home" label="Portfolio" />
          <NavLink path="products" label="Products" />
          <NavLink path="gallery" label="Gallery" />
          <NavLink path="services" label="Services" />
          <NavLink path="about" label="About" />
          <NavLink path="faq" label="FAQ" />
          
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search..." 
              onChange={(e) => onSearch(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-full px-5 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 w-32 lg:w-48 transition-all text-sm backdrop-blur-md placeholder:text-slate-600"
            />
            <svg className="w-4 h-4 absolute left-4 top-3 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          </div>
        </div>

        <button 
          className="md:hidden p-2 text-slate-400 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-white/5 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen py-6 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
        <div className="px-4 flex flex-col gap-6">
          <button onClick={() => handleNavClick('home')} className={`text-xl font-bold text-left ${currentPath === 'home' && activeHash === '' ? 'text-blue-500' : 'text-white'}`}>Portfolio</button>
          <button onClick={() => handleNavClick('products')} className={`text-xl font-bold text-left ${currentPath === 'products' ? 'text-blue-500' : 'text-slate-400'}`}>Products</button>
          <button onClick={() => handleNavClick('gallery')} className={`text-xl font-bold text-left ${currentPath === 'gallery' ? 'text-blue-500' : 'text-slate-400'}`}>Gallery</button>
          <button onClick={() => handleNavClick('services')} className={`text-xl font-bold text-left ${currentPath === 'services' ? 'text-blue-500' : 'text-slate-400'}`}>Services</button>
          <button onClick={() => handleNavClick('about')} className={`text-xl font-bold text-left ${currentPath === 'about' ? 'text-blue-500' : 'text-slate-400'}`}>About</button>
          <button onClick={() => handleNavClick('faq')} className={`text-xl font-bold text-left ${currentPath === 'faq' ? 'text-blue-500' : 'text-slate-400'}`}>FAQ</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
