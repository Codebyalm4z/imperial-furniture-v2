import React, { useState } from 'react';
import { Menu, X, Landmark, Compass, FolderOpen, Phone, MapPin, Grid, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentView: string;
  onViewChange: (view: string, productId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onViewChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Compass },
    { id: 'collections', label: 'Collections', icon: FolderOpen },
    { id: 'gallery', label: 'Gallery', icon: Grid },
    { id: 'heritage', label: 'Heritage', icon: Landmark },
    { id: 'services', label: 'Design Services', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Phone },
  ];

  const handleNavClick = (id: string) => {
    onViewChange(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0A]/95 border-b border-[#C8A165]/25 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex flex-col items-start cursor-pointer group"
          >
            <div className="flex items-center space-x-2">
              <span className="text-xl sm:text-2xl font-serif tracking-[0.25em] text-[#C8A165] font-extrabold uppercase group-hover:text-white transition-colors duration-300">
                Imperial
              </span>
            </div>
            <div className="flex items-center space-x-1.5 mt-0.5">
              <span className="text-[9px] sm:text-[10px] tracking-[0.35em] text-gray-400 uppercase font-mono">
                Furniture • Est. 1983
              </span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8 lg:space-x-10">
            {navItems.map((item) => {
              const isActive = currentView === item.id || (item.id === 'collections' && currentView === 'product-details');
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-2 text-xs lg:text-sm font-medium tracking-[0.15em] uppercase transition-colors duration-300 flex items-center space-x-1 ${
                    isActive ? 'text-[#C8A165]' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C8A165]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center">
            <button
              onClick={() => handleNavClick('contact')}
              className="border border-[#C8A165] text-[#C8A165] hover:bg-[#C8A165] hover:text-black transition-all duration-300 px-5 py-2.5 text-xs font-mono tracking-widest uppercase rounded-none"
            >
              Visit Showroom
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-[#C8A165] transition-colors p-2"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0A0A0A] border-t border-[#C8A165]/15 absolute left-0 right-0 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-3 shadow-2xl">
              {navItems.map((item) => {
                const isActive = currentView === item.id || (item.id === 'collections' && currentView === 'product-details');
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`nav-link-mobile w-full text-left py-3 px-4 flex items-center justify-between border-b border-[#C8A165]/10 text-sm font-medium tracking-widest uppercase transition-colors ${
                      isActive ? 'bg-[#C8A165]/10 text-[#C8A165]' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-[10px] text-gray-500 font-mono">0{navItems.indexOf(item) + 1}</span>
                  </button>
                );
              })}
              
              <div className="pt-4 flex flex-col space-y-4 px-4">
                <div className="text-[11px] text-gray-500 font-mono flex items-center space-x-2">
                  <MapPin className="text-[#C8A165]" size={14} />
                  <span>Bandra West, Mumbai</span>
                </div>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="bg-[#C8A165] text-[#0A0A0A] font-mono tracking-widest py-3 text-center text-xs uppercase font-semibold"
                >
                  Visit Showroom
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
