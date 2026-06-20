import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, ArrowRight, Phone, MapPin, Mail, 
  Clock, Check, ShieldCheck, Award, Compass, 
  ExternalLink, ChevronRight
} from 'lucide-react';

import { Product, Inquiry, CategoryKey } from './types';
import { products, categories, showrooms, designServices, homeCategories, galleryItems } from './data';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ProductCard } from './components/ProductCard';
import { InquiryForm } from './components/InquiryForm';
import { InquiryManagement } from './components/InquiryManagement';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [inquirySuccess, setInquirySuccess] = useState(false);
  const [isSendingInquiry, setIsSendingInquiry] = useState(false);

  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  useEffect(() => {
    const titles: Record<string, string> = {
      home: 'Imperial Furniture | Premium Furniture Mumbai Since 1983',
      collections: 'Collections | Imperial Furniture Mumbai',
      'product-details': 'Product Details | Imperial Furniture',
      heritage: 'Heritage Since 1983 | Imperial Furniture Bandra',
      gallery: 'Gallery | Imperial Furniture Mumbai',
      services: 'Design Services | Imperial Furniture',
      contact: 'Contact | Imperial Furniture Bandra West',
    };
    
    document.title = titles[currentView] || 'Imperial Furniture Mumbai';
  }, [currentView]);

  const handleNavigate = (view: string, productId?: string) => {
    setCurrentView(view);
    if (productId) {
      setSelectedProductId(productId);
      setSelectedImageIndex(0);
      setInquirySuccess(false);
      setInquiryMessage('');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const saveInquiry = (inquiry: Inquiry) => {
    const saved = localStorage.getItem('imperial_inquiries');
    const list: Inquiry[] = saved ? JSON.parse(saved) : [];
    list.push(inquiry);
    localStorage.setItem('imperial_inquiries', JSON.stringify(list));
  };

  const handleProductInquirySubmit = (e: React.FormEvent, targetProduct: Product) => {
    e.preventDefault();
    setIsSendingInquiry(true);

    setTimeout(() => {
      saveInquiry({
        id: 'INQ-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
        productId: targetProduct.id,
        productName: targetProduct.name,
        customerName: inquiryName,
        email: inquiryEmail,
        phone: inquiryPhone,
        message: inquiryMessage || `Inquiry about ${targetProduct.name}`,
        status: 'pending',
        timestamp: new Date().toISOString()
      });

      setIsSendingInquiry(false);
      setInquirySuccess(true);
      setInquiryName('');
      setInquiryEmail('');
      setInquiryPhone('');
      setInquiryMessage('');
    }, 700);
  };

  const handleGeneralInquirySubmit = (data: { name: string; email: string; phone: string; message: string }) => {
    saveInquiry({
      id: 'INQ-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
      customerName: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      status: 'pending',
      timestamp: new Date().toISOString(),
      interiorDesignInquiry: currentView === 'services'
    });
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.materials.some(m => m.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPieces = products.filter(p => p.featured);
  const selectedProduct = products.find(p => p.id === selectedProductId) || products[0];

  const whyChooseUs = [
    { label: 'Since 1983', description: 'Over four decades of furniture manufacturing experience in Mumbai.' },
    { label: 'Quality Craftsmanship', description: 'Skilled workmanship and attention to detail in every piece.' },
    { label: 'Premium Materials', description: 'Quality wood, upholstery, and finishes used across all products.' },
    { label: 'Custom Furniture Solutions', description: 'Furniture made to your exact specifications and dimensions.' },
    { label: 'Trusted by Generations', description: 'Customer trust built through reliable service since 1983.' },
    { label: 'Mumbai Based Business', description: 'Visit our showroom at M K Chamber, Turner Road, Bandra West.' },
  ];

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen flex flex-col justify-between font-sans selection:bg-[#C8A165] selection:text-black">
      
      <div className="bg-[#050505] text-[10px] sm:text-xs text-gray-400 py-2.5 px-4 text-center border-b border-gray-900 flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto w-full font-mono">
        <div className="flex items-center space-x-1">
          <MapPin size={12} className="text-[#C8A165]" />
          <span>M K Chamber, Turner Road, Bandra West, Mumbai 400050</span>
        </div>
        <div className="flex items-center space-x-5 mt-2 sm:mt-0 font-bold">
          <a href="tel:+919820470649" className="hover:text-white transition-colors">
            +91 9820470649
          </a>
          <span className="text-[#C8A165] animate-pulse">● Open Today</span>
        </div>
      </div>

      <Navbar 
        currentView={currentView} 
        onViewChange={handleNavigate} 
      />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          
          {/* HOME */}
          {currentView === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-20 pb-20"
            >
              <Hero 
                onExploreClick={() => handleNavigate('collections')}
                onBookClick={() => handleNavigate('contact')}
              />

              {/* Featured Categories */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-3 mb-12">
                  <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#C8A165]">
                    Our Collections
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-tight">
                    Featured Categories
                  </h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {homeCategories.map((cat) => (
                    <button
                      key={cat.key}
                      onClick={() => { setActiveCategory(cat.key); handleNavigate('collections'); }}
                      className="bg-[#0D0D0D] border border-gray-900 hover:border-[#C8A165]/50 p-6 text-center transition-all group"
                    >
                      <span className="font-serif text-sm sm:text-base text-white group-hover:text-[#C8A165] transition-colors uppercase tracking-wider">
                        {cat.label}
                      </span>
                    </button>
                  ))}
                </div>
              </section>

              {/* Featured Products */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-gray-900 pb-8 mb-12">
                  <div className="space-y-2">
                    <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#C8A165]">
                      Featured Products
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-tight">
                      Popular Collections
                    </h2>
                  </div>
                  <button
                    onClick={() => handleNavigate('collections')}
                    className="text-xs font-mono tracking-widest text-[#C8A165] hover:text-white uppercase transition-colors flex items-center space-x-1 mt-4 md:mt-0 pb-1 border-b border-[#C8A165]/30 hover:border-white"
                  >
                    <span>View All Collections</span>
                    <ChevronRight size={14} />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {featuredPieces.map((product) => (
                    <ProductCard 
                      key={product.id}
                      product={product}
                      onSelect={(id) => handleNavigate('product-details', id)}
                    />
                  ))}
                </div>
              </section>

              {/* Why Choose Us */}
              <section className="bg-[#050505] border-t border-b border-[#C8A165]/15 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                  <div className="text-center space-y-3">
                    <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#C8A165] font-semibold">
                      Why Choose Us
                    </span>
                    <h3 className="text-3xl font-serif text-white tracking-tight">
                      Imperial Furniture
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {whyChooseUs.map((item, i) => (
                      <div key={i} className="bg-[#0D0D0D] border border-gray-900 p-6 space-y-2">
                        <div className="flex items-center space-x-2 text-[#C8A165]">
                          <ShieldCheck size={16} />
                          <span className="font-mono text-xs uppercase tracking-wider font-semibold text-white">{item.label}</span>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Heritage preview */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5 relative group">
                  <div className="absolute -inset-1.5 border border-[#C8A165]/40 group-hover:scale-[1.01] transition-transform duration-500 z-0" />
                  <img
                    src="/src/assets/images/imperial_dining_1781947019011.jpg"
                    alt="Imperial Furniture showroom"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover relative z-10 filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                  />
                </div>
                <div className="lg:col-span-7 space-y-6 lg:pl-6">
                  <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#C8A165] font-semibold">
                    Since 1983
                  </span>
                  <h3 className="text-3xl font-serif text-white tracking-tight leading-tight">
                    Trusted Furniture Partner <br />
                    <span className="text-[#C8A165] italic font-normal">in Bandra West, Mumbai.</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
                    Imperial Furniture has been serving homes and businesses since 1983. Located at M K Chamber, Turner Road, we specialise in quality furniture manufacturing, custom furniture solutions, and interior furnishing.
                  </p>
                  <div className="pt-4 flex items-center space-x-6">
                    <button
                      onClick={() => handleNavigate('heritage')}
                      className="bg-transparent text-[#C8A165] hover:text-white border border-[#C8A165] hover:border-white px-5 py-3 text-xs font-mono tracking-widest uppercase transition-all"
                    >
                      Our Heritage
                    </button>
                    <a href="tel:+919820470649" className="text-xs font-mono text-gray-400 hover:text-white flex items-center space-x-1.5">
                      <Phone size={14} className="text-[#C8A165]" />
                      <span>+91 9820470649</span>
                    </a>
                  </div>
                </div>
              </section>

              {/* Design Services preview */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-[#0D0D0D] border border-gray-900 p-8 sm:p-12 relative overflow-hidden">
                  <div className="absolute right-0 bottom-0 opacity-10">
                    <Compass size={280} className="text-[#C8A165] stroke-[0.5]" />
                  </div>
                  <div className="max-w-xl space-y-6 relative z-10">
                    <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#C8A165] font-bold">
                      Design Services
                    </span>
                    <h4 className="text-2xl sm:text-3xl font-serif text-white tracking-tight">
                      Interior Design & Custom Furniture Solutions
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                      Custom furniture design, space planning, residential and commercial interiors, and furniture consultation from our experienced team.
                    </p>
                    <button
                      onClick={() => handleNavigate('services')}
                      className="bg-[#C8A165] text-black hover:bg-white font-semibold font-mono tracking-widest text-xs uppercase py-3.5 px-6 flex items-center space-x-2 transition-colors cursor-pointer"
                    >
                      <span>View Design Services</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </section>

              {/* Inquiry Form */}
              <section className="max-w-4xl mx-auto px-4 sm:px-6">
                <InquiryForm onSubmit={handleGeneralInquirySubmit} />
              </section>

              <section className="max-w-4xl mx-auto px-4 sm:px-6">
                <InquiryManagement />
              </section>

            </motion.div>
          )}

          {/* COLLECTIONS */}
          {currentView === 'collections' && (
            <motion.div
              key="collections"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10"
            >
              <div className="text-center space-y-3 max-w-4xl mx-auto">
                <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#C8A165] font-semibold">
                  Collections
                </span>
                <h1 className="font-serif text-3xl sm:text-5xl uppercase tracking-wider text-white">
                  Furniture Collections
                </h1>
                <p className="text-xs sm:text-sm text-gray-400">
                  {categories.find(c => c.key === activeCategory)?.tagline || 'Premium Furniture & Interior Solutions Since 1983'}
                </p>
              </div>

              <div className="bg-[#0E0E0E] p-6 border border-gray-900 space-y-6">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <Search size={18} />
                  </span>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by name, materials, or category..."
                    className="w-full bg-[#050505] border border-gray-800 focus:border-[#C8A165] text-white pl-11 pr-4 py-3.5 text-xs sm:text-sm focus:outline-none transition-colors rounded-none font-mono"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white font-mono text-[11px]"
                    >
                      [Clear]
                    </button>
                  )}
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2 pt-2 border-t border-gray-900/60">
                  {categories.map((cat) => (
                    <button
                      key={cat.key}
                      onClick={() => { setActiveCategory(cat.key); }}
                      className={`px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-medium tracking-wider font-mono uppercase transition-all duration-200 border rounded-none ${
                        activeCategory === cat.key
                          ? 'bg-[#C8A165] text-black border-[#C8A165]'
                          : 'bg-transparent text-gray-400 border-gray-900 hover:text-white hover:border-gray-700'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="bg-[#0E0E0E] p-16 text-center border border-gray-900 max-w-xl mx-auto space-y-4">
                  <p className="font-serif text-lg text-[#C8A165]">No products found.</p>
                  <button
                    onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                    className="bg-transparent border border-[#C8A165] text-[#C8A165] hover:bg-[#C8A165] hover:text-black font-semibold font-mono text-xs px-4 py-2 uppercase transition-all"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product) => (
                    <ProductCard 
                      key={product.id}
                      product={product}
                      onSelect={(id) => handleNavigate('product-details', id)}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {/* PRODUCT DETAILS */}
          {currentView === 'product-details' && (
            <motion.div
              key="product-details"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12"
            >
              <div>
                <button
                  onClick={() => handleNavigate('collections')}
                  className="group flex items-center space-x-2 text-xs font-mono uppercase text-gray-400 hover:text-[#C8A165] transition-colors"
                >
                  <span>← Back to Collections</span>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-6 space-y-4">
                  <div className="aspect-[4/3] bg-[#0D0D0D] border border-gray-900 overflow-hidden relative">
                    <img
                      src={selectedProduct.images[selectedImageIndex] || selectedProduct.images[0]}
                      alt={selectedProduct.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 filter brightness-95"
                    />
                  </div>

                  {selectedProduct.images.length > 1 && (
                    <div className="grid grid-cols-2 gap-4">
                      {selectedProduct.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedImageIndex(idx)}
                          className={`aspect-[4/3] border overflow-hidden relative transition-all ${
                            selectedImageIndex === idx 
                              ? 'border-[#C8A165] opacity-100 ring-1 ring-[#C8A165]' 
                              : 'border-transparent opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img 
                            src={img} 
                            alt={`Detail view ${idx + 1}`} 
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover" 
                          />
                        </button>
                      ))}
                    </div>
                  )}
                  
                  <div className="bg-[#080808] border border-gray-900/60 p-5 space-y-3">
                    <h5 className="text-[10px] font-mono uppercase tracking-widest text-[#C8A165] font-bold">Materials</h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.materials.map((mat, i) => (
                        <span key={i} className="bg-gray-950 px-2.5 py-1 border border-gray-900 text-xs text-gray-300">
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-6">
                  <div className="border-b border-gray-900 pb-5 space-y-2">
                    <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#C8A165]">
                      Category: {selectedProduct.category}
                    </span>
                    <h1 className="font-serif text-2xl sm:text-4xl text-white font-medium tracking-tight">
                      {selectedProduct.name}
                    </h1>
                    <span className="bg-[#C8A165]/10 border border-[#C8A165]/40 text-[#C8A165] text-xs font-mono uppercase tracking-widest px-3 py-1 font-semibold inline-block mt-2">
                      {selectedProduct.priceRange}
                    </span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm leading-relaxed text-gray-300">
                    <p className="font-semibold text-white">Description:</p>
                    <p>{selectedProduct.longDescription}</p>
                  </div>

                  <div className="bg-[#0D0D0D] border border-gray-900 p-5 space-y-3 font-mono text-xs">
                    <h5 className="text-[10px] uppercase tracking-widest text-[#C8A165] font-bold">Specifications</h5>
                    <div className="flex justify-between border-b border-gray-900 pb-1.5 text-gray-400">
                      <span>Dimensions:</span>
                      <span className="text-white font-sans">{selectedProduct.dimensions}</span>
                    </div>
                    <div className="pt-2">
                      <span className="text-gray-500 text-[10px] block uppercase mb-1.5">Available Finishes:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProduct.finishes.map((f, i) => (
                          <span key={i} className="text-[10px] bg-black border border-gray-800 text-gray-300 px-2 py-0.5">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <h5 className="text-[10px] uppercase font-mono tracking-widest text-[#C8A165] font-bold">Features</h5>
                    <ul className="space-y-2 text-xs">
                      {selectedProduct.features.map((feat, i) => (
                        <li key={i} className="flex items-start space-x-2.5">
                          <span className="text-[#C8A165] shrink-0 mt-0.5">✦</span>
                          <span className="text-gray-400">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border border-[#C8A165]/30 bg-[#0E0E0E] p-6 space-y-5">
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-wider text-[#C8A165] font-bold">Inquire About This Product</h4>
                      <p className="text-[11px] text-gray-400 mt-1">Contact us for pricing, custom sizes, and material options.</p>
                    </div>

                    {!inquirySuccess ? (
                      <form onSubmit={(e) => handleProductInquirySubmit(e, selectedProduct)} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <input
                            type="text"
                            required
                            placeholder="Name *"
                            className="bg-[#050505] border border-gray-800 focus:border-[#C8A165] text-xs py-2 px-3 focus:outline-none text-white rounded-none w-full"
                            value={inquiryName}
                            onChange={(e) => setInquiryName(e.target.value)}
                          />
                          <input
                            type="tel"
                            required
                            placeholder="Phone *"
                            className="bg-[#050505] border border-gray-800 focus:border-[#C8A165] text-xs py-2 px-3 focus:outline-none text-white rounded-none font-mono w-full"
                            value={inquiryPhone}
                            onChange={(e) => setInquiryPhone(e.target.value)}
                          />
                        </div>
                        <input
                          type="email"
                          required
                          placeholder="Email *"
                          className="bg-[#050505] border border-gray-800 focus:border-[#C8A165] text-xs py-2 px-3 focus:outline-none text-white rounded-none font-mono w-full"
                          value={inquiryEmail}
                          onChange={(e) => setInquiryEmail(e.target.value)}
                        />
                        <textarea
                          placeholder={`Your message about ${selectedProduct.name}...`}
                          rows={2}
                          className="bg-[#050505] border border-gray-800 focus:border-[#C8A165] text-xs py-2 px-3 focus:outline-none text-white rounded-none w-full"
                          value={inquiryMessage}
                          onChange={(e) => setInquiryMessage(e.target.value)}
                        />
                        <div className="flex flex-col sm:flex-row items-center gap-2 pt-1">
                          <button
                            type="submit"
                            disabled={isSendingInquiry}
                            className="bg-white text-black hover:bg-[#C8A165] w-full text-center font-bold font-mono tracking-widest text-[9px] uppercase py-3 px-4 transition-colors disabled:opacity-50"
                          >
                            {isSendingInquiry ? 'Sending...' : 'Submit Inquiry'}
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              const encodedText = encodeURIComponent(`Hello Imperial Furniture, I am interested in the ${selectedProduct.name}. Please share more details.`);
                              window.open(`https://wa.me/919820470649?text=${encodedText}`, '_blank');
                            }}
                            className="bg-emerald-900 hover:bg-emerald-700 text-white w-full text-center font-bold font-mono tracking-widest text-[9px] uppercase py-3 px-4 transition-colors"
                          >
                            Inquire on WhatsApp
                          </button>
                        </div>
                      </form>
                    ) : (
                      <div className="text-center py-4 bg-[#050505] border border-emerald-900 text-emerald-400 p-4 space-y-2">
                        <Check className="mx-auto" size={24} />
                        <h4 className="font-mono text-xs uppercase font-bold text-white">Inquiry Received</h4>
                        <p className="text-[11px] text-gray-400">
                          Thank you for your interest in <span className="text-[#C8A165] font-sans font-bold">{selectedProduct.name}</span>. We will contact you shortly.
                        </p>
                        <button
                          onClick={() => setInquirySuccess(false)}
                          className="text-[9px] uppercase font-mono underline text-white hover:text-[#C8A165] pt-1 block mx-auto"
                        >
                          Submit another inquiry
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-900 pt-12 space-y-6">
                <h3 className="font-serif text-xl sm:text-2xl text-white tracking-wide uppercase">
                  Related Products
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {products
                    .filter(p => p.id !== selectedProduct.id && p.category === selectedProduct.category)
                    .slice(0, 3)
                    .map((p) => (
                      <ProductCard 
                        key={p.id}
                        product={p}
                        onSelect={(id) => handleNavigate('product-details', id)}
                      />
                    ))
                  }
                  {products
                    .filter(p => p.id !== selectedProduct.id && p.category !== selectedProduct.category)
                    .slice(0, 3 - products.filter(p => p.id !== selectedProduct.id && p.category === selectedProduct.category).length)
                    .map((p) => (
                      <ProductCard 
                        key={p.id}
                        product={p}
                        onSelect={(id) => handleNavigate('product-details', id)}
                      />
                    ))
                  }
                </div>
              </div>
            </motion.div>
          )}

          {/* HERITAGE */}
          {currentView === 'heritage' && (
            <motion.div
              key="heritage"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#C8A165] font-bold">
                    Since 1983
                  </span>
                  <h1 className="font-serif text-3xl sm:text-5xl uppercase tracking-wider text-white">
                    Our Heritage
                  </h1>
                  <p className="text-sm text-gray-300 leading-relaxed font-sans">
                    Imperial Furniture has been serving homes and businesses since 1983. Located in Bandra West, Mumbai, the company specialises in quality furniture manufacturing, custom furniture solutions, interior furnishing, and long-lasting craftsmanship.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
                    For more than four decades, Imperial Furniture has built a reputation for reliability, quality, and customer satisfaction. Visit our showroom at M K Chamber, Turner Road to explore our collections and discuss your requirements.
                  </p>
                </div>
                
                <div className="lg:col-span-5 relative">
                  <div className="absolute inset-2 border border-[#C8A165]/50 z-0" />
                  <img
                    src="/src/assets/images/imperial_dining_1781947019011.jpg"
                    alt="Imperial Furniture craftsmanship"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover relative z-10 filter sepia-[0.1] contrast-[1.05]"
                  />
                </div>
              </div>

              <div className="bg-[#0D0D0D] border border-gray-900 p-8 sm:p-12 space-y-8">
                <div className="text-center space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8A165]">Our Heritage</span>
                  <h3 className="font-serif text-xl sm:text-3xl text-white uppercase">Built on Trust & Quality</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
                  <div className="p-6 bg-black border border-gray-900 space-y-3 text-center">
                    <span className="text-2xl font-bold text-[#C8A165] block">40+</span>
                    <p className="font-semibold text-white uppercase tracking-wider">Years Experience</p>
                    <p className="text-gray-500 font-sans text-[11px] leading-relaxed">Serving Mumbai with quality furniture since 1983.</p>
                  </div>
                  <div className="p-6 bg-black border border-gray-900 space-y-3 text-center">
                    <span className="text-2xl font-bold text-[#C8A165] block">1000+</span>
                    <p className="font-semibold text-white uppercase tracking-wider">Furniture Deliveries</p>
                    <p className="text-gray-500 font-sans text-[11px] leading-relaxed">Trusted by homes and businesses across Mumbai.</p>
                  </div>
                  <div className="p-6 bg-black border border-gray-900 space-y-3 text-center">
                    <span className="text-2xl font-bold text-[#C8A165] block">Custom</span>
                    <p className="font-semibold text-white uppercase tracking-wider">Furniture Solutions</p>
                    <p className="text-gray-500 font-sans text-[11px] leading-relaxed">Furniture made to your specifications and requirements.</p>
                  </div>
                  <div className="p-6 bg-black border border-gray-900 space-y-3 text-center">
                    <span className="text-2xl font-bold text-[#C8A165] block">1983</span>
                    <p className="font-semibold text-white uppercase tracking-wider">Trusted Since 1983</p>
                    <p className="text-gray-500 font-sans text-[11px] leading-relaxed">Customer trust built over generations of reliable service.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-10">
                <div className="text-center space-y-2">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#C8A165]">Our Business</span>
                  <h3 className="font-serif text-2xl sm:text-4xl text-white uppercase">Imperial Furniture</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div className="bg-[#090909] border border-gray-900/60 p-8 space-y-6">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-gray-500">Owner</span>
                      <p className="font-serif text-lg text-white">Yusuf Nanne Miya Ansari</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-gray-500">Company</span>
                      <p className="font-serif text-lg text-white">Imperial Furniture</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-gray-500">Established</span>
                      <p className="font-serif text-lg text-[#C8A165]">Since 1983</p>
                    </div>
                  </div>
                  <div className="bg-[#090909] border border-gray-900/60 p-8 space-y-4">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-gray-500">Location</span>
                    <address className="not-italic font-sans text-sm text-gray-300 leading-relaxed space-y-1">
                      <p>Imperial Furniture</p>
                      <p>M K Chamber (Daulat House),</p>
                      <p>Turner Road,</p>
                      <p>Opp. Nutan Nagar,</p>
                      <p>Bandra West,</p>
                      <p>Mumbai 400050</p>
                    </address>
                    <a
                      href="tel:+919820470649"
                      className="inline-flex items-center space-x-2 text-xs font-mono text-[#C8A165] hover:text-white transition-colors pt-2"
                    >
                      <Phone size={14} />
                      <span>+91 9820470649</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* GALLERY */}
          {currentView === 'gallery' && (
            <motion.div
              key="gallery"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12"
            >
              <div className="text-center space-y-3 max-w-4xl mx-auto">
                <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#C8A165] font-semibold">
                  Gallery
                </span>
                <h1 className="font-serif text-3xl sm:text-5xl uppercase tracking-wider text-white">
                  Our Work
                </h1>
                <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">
                  A selection of furniture categories and interior projects from Imperial Furniture.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {galleryItems.map((item, idx) => (
                  <div key={idx} className="bg-[#0D0D0D] border border-gray-900 overflow-hidden relative group">
                    <div className="aspect-[4/3] bg-[#050505] overflow-hidden">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100" 
                      />
                    </div>
                    <div className="p-6 space-y-2 border-t border-gray-900/45">
                      <span className="text-[10px] font-mono tracking-widest text-[#C8A165] uppercase block">
                        {item.category}
                      </span>
                      <h4 className="font-serif text-base text-white group-hover:text-[#C8A165] transition-colors">{item.title}</h4>
                      <p className="text-xs text-gray-400 font-sans leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#0D0D0D] border border-[#C8A165]/35 p-8 text-center max-w-xl mx-auto space-y-4">
                <h4 className="font-serif text-xl text-white">Interested in Our Furniture?</h4>
                <p className="text-xs text-gray-400 font-mono">Visit our showroom or contact us to discuss your requirements.</p>
                <button
                  onClick={() => handleNavigate('contact')}
                  className="bg-[#C8A165] hover:bg-white text-black font-semibold font-mono text-xs py-3 px-6 uppercase transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          )}

          {/* DESIGN SERVICES */}
          {currentView === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16"
            >
              <div className="text-center space-y-6 max-w-3xl mx-auto">
                <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#C8A165] font-bold">
                  Design Services
                </span>
                <h1 className="font-serif text-3xl sm:text-5xl uppercase tracking-wider text-white">
                  Interior Design & Custom Furniture Solutions
                </h1>
                <p className="text-sm text-gray-300 leading-relaxed font-sans">
                  Imperial Furniture offers a range of design and furnishing services for residential and commercial spaces. Contact us to discuss your project requirements.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {designServices.map((service) => (
                  <div key={service.id} className="bg-[#0D0D0D] border border-gray-900 p-6 space-y-4 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h4 className="font-serif text-base text-white font-semibold leading-snug">{service.title}</h4>
                      <p className="font-sans leading-relaxed text-xs text-gray-400">{service.description}</p>
                    </div>
                    <div className="pt-4 border-t border-gray-900 space-y-1.5 font-mono text-[10px]">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Timeline:</span>
                        <span className="text-white font-bold">{service.duration}</span>
                      </div>
                      <div className="flex flex-col text-[#C8A165] pt-1">
                        <span>Deliverable:</span>
                        <span className="text-white text-[9px] font-sans mt-0.5">{service.deliverable}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="max-w-4xl mx-auto space-y-8">
                <div className="text-center space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl text-white uppercase tracking-wider">Request a Consultation</h3>
                  <p className="text-xs text-gray-400 max-w-md mx-auto">
                    Fill in the form below and our team will contact you to discuss your furniture and interior requirements.
                  </p>
                </div>
                <InquiryForm 
                  onSubmit={handleGeneralInquirySubmit}
                  title="Design Services Inquiry"
                  subtitle="Tell us about your project and we will get back to you shortly."
                />
              </div>
            </motion.div>
          )}

          {/* CONTACT */}
          {currentView === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12"
            >
              <div className="text-center space-y-3 max-w-4xl mx-auto">
                <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#C8A165] font-semibold">
                  Contact
                </span>
                <h1 className="font-serif text-3xl sm:text-5xl uppercase tracking-wider text-white">
                  Get In Touch
                </h1>
                <p className="text-xs sm:text-sm text-gray-400">
                  Visit our showroom, call us, or send an inquiry. We look forward to hearing from you.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-5 space-y-8">
                  <div className="bg-[#0D0D0D] border border-gray-900 p-6 sm:p-8 space-y-6">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#C8A165] uppercase">Imperial Furniture</h3>
                    
                    <ul className="space-y-4 text-xs sm:text-sm text-gray-400 font-mono">
                      <li className="flex items-start space-x-3 leading-relaxed">
                        <MapPin className="text-[#C8A165] shrink-0 mt-0.5" size={18} />
                        <span className="font-sans text-white text-xs sm:text-sm">
                          M K Chamber (Daulat House),<br />
                          Turner Road, Opp. Nutan Nagar,<br />
                          Bandra West, Mumbai 400050
                        </span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Phone className="text-[#C8A165] shrink-0" size={18} />
                        <a href="tel:+919820470649" className="text-white hover:text-[#C8A165] transition-colors">
                          +91 9820470649
                        </a>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Mail className="text-[#C8A165] shrink-0" size={18} />
                        <a href="mailto:contact@imperialfurniture.in" className="text-white hover:text-[#C8A165] transition-colors text-xs sm:text-sm">
                          contact@imperialfurniture.in
                        </a>
                      </li>
                    </ul>

                    <div className="border-t border-gray-900 pt-6 space-y-2 text-xs font-mono">
                      <span className="text-gray-500 uppercase text-[10px]">Showroom Hours:</span>
                      {showrooms.hours.map((h, i) => (
                        <div key={i} className="flex justify-between">
                          <span>{h.days}</span>
                          <span className="text-white">{h.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#0D0D0D] border border-gray-900 p-4 space-y-3">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-[#C8A165]">Location:</span>
                      <a 
                        href="https://maps.google.com/?q=Turner+Road+Bandra+West+Mumbai" 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-gray-400 hover:text-white flex items-center space-x-1 uppercase text-[10px]"
                      >
                        <span>Open in Google Maps</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                    <div className="aspect-[16/9] w-full border border-gray-900 bg-[#050505] relative overflow-hidden">
                      <iframe 
                        title="Imperial Furniture Location at Turner Road, Bandra West"
                        src={showrooms.mapIframe}
                        width="100%" 
                        height="100%" 
                        style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.1)' }} 
                        allowFullScreen={false} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <InquiryForm onSubmit={handleGeneralInquirySubmit} />
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      <WhatsAppButton />
      <Footer onViewChange={handleNavigate} />
    </div>
  );
}
