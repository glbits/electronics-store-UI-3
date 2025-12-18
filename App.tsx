
import React, { useState, useMemo, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CategoryFilter from './components/CategoryFilter';
import CategoryShowcase from './components/CategoryShowcase';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import About from './components/About';
import FAQ from './components/FAQ';
import Gallery from './components/Gallery';
import ChatAssistant from './components/ChatAssistant';
import { PRODUCTS, CATEGORIES } from './constants';
import { Category, Product, PagePath } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PagePath>('home');
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCategorySelect = (cat: Category) => {
    setSelectedCategory(cat);
    setCurrentPage('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredProducts = useMemo(() => PRODUCTS.filter(p => p.featured), []);

  const renderHome = () => (
    <>
      <Hero onViewProducts={() => {
        setCurrentPage('products');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />
      
      {/* Dynamic Category Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h2 className="text-3xl font-black font-orbitron mb-2 uppercase tracking-tight">Browse <span className="text-blue-500">Collections</span></h2>
          <p className="text-slate-500">Quick access to our specialized electronic departments.</p>
        </div>
        <CategoryShowcase onSelect={handleCategorySelect} />
      </section>

      {/* Featured Section */}
      <section className="bg-slate-900/30 py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-4">
              <span className="text-blue-500 font-black text-[10px] uppercase tracking-[0.4em]">Curated Picks</span>
              <h2 className="text-4xl md:text-5xl font-black font-orbitron">THE <span className="text-white">FLAGSHIPS</span></h2>
            </div>
            <button 
              onClick={() => {
                setCurrentPage('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-slate-400 font-bold hover:text-white transition-colors flex items-center gap-2"
            >
              View Full Collection <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(p => (
              <ProductCard key={p.id} product={p} onClick={() => setSelectedProduct(p)} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />
    </>
  );

  const renderProductsPage = () => (
    <section id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 mb-16">
        <div className="space-y-2">
          <h2 className="text-4xl font-black font-orbitron uppercase tracking-tight">Full <span className="text-blue-500">Inventory</span></h2>
          <p className="text-slate-400">Filtering through {PRODUCTS.length} specialized components.</p>
        </div>
        
        <CategoryFilter 
          categories={CATEGORIES as Category[]} 
          activeCategory={selectedCategory} 
          onSelect={setSelectedCategory} 
        />
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-32 border-2 border-dashed border-white/5 rounded-[3rem] bg-white/[0.02]">
          <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">🔌</div>
          <p className="text-slate-500 text-xl font-light">Circuit incomplete. No items match your criteria.</p>
          <button 
            onClick={() => {setSelectedCategory('All'); setSearchQuery('');}}
            className="mt-6 px-8 py-3 bg-blue-600/10 text-blue-400 hover:bg-blue-600 hover:text-white border border-blue-500/20 rounded-xl transition-all font-bold"
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar 
        isScrolled={isScrolled} 
        onSearch={setSearchQuery} 
        currentPath={currentPage}
        setPage={setCurrentPage}
      />
      
      <main className="flex-grow">
        {currentPage === 'home' && renderHome()}
        {currentPage === 'products' && renderProductsPage()}
        {currentPage === 'services' && <Services />}
        {currentPage === 'about' && <About />}
        {currentPage === 'faq' && <FAQ />}
        {currentPage === 'gallery' && <Gallery />}
      </main>

      <Footer />

      {/* Added ChatAssistant component to the root of the app */}
      <ChatAssistant />

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
};

export default App;
