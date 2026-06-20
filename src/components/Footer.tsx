import React from 'react';
import { Mail, Phone, MapPin, ArrowUp, Instagram, Facebook } from 'lucide-react';
import { showrooms } from '../data';

interface FooterProps {
  onViewChange: (view: string, productId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onViewChange }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-gray-400 border-t border-[#C8A165]/20 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-4">
            <h3 className="text-xl font-serif tracking-[0.25em] text-[#C8A165] font-extrabold uppercase">
              Imperial Furniture
            </h3>
            <p className="text-xs tracking-[0.35em] text-gray-500 uppercase font-mono mt-1">
              Established Since 1983
            </p>
            <p className="text-xs text-gray-400 leading-relaxed pt-3">
              Premium furniture manufacturing and custom interior solutions from our showroom at M K Chamber, Turner Road, Bandra West, Mumbai.
            </p>
            <div className="flex space-x-4 pt-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#C8A165] transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#C8A165] transition-colors"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs tracking-[0.2em] font-mono uppercase text-white font-semibold">
              Showroom
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start space-x-3.5 leading-relaxed">
                <MapPin className="text-[#C8A165] shrink-0 mt-0.5" size={16} />
                <span>
                  M K Chamber (Daulat House),<br />
                  Turner Road, Opp. Nutan Nagar,<br />
                  Bandra West, Mumbai 400050
                </span>
              </li>
              <li className="flex items-center space-x-3.5">
                <Phone className="text-[#C8A165] shrink-0" size={16} />
                <a href="tel:+919820470649" className="hover:text-[#C8A165] transition-colors font-mono">
                  +91 9820470649
                </a>
              </li>
              <li className="flex items-center space-x-3.5">
                <Mail className="text-[#C8A165] shrink-0" size={16} />
                <a href="mailto:contact@imperialfurniture.in" className="hover:text-[#C8A165] transition-colors font-mono">
                  contact@imperialfurniture.in
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs tracking-[0.2em] font-mono uppercase text-white font-semibold">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onViewChange('collections')} className="hover:text-[#C8A165] transition-colors text-left uppercase tracking-wider font-mono text-[10px]">
                  → Collections
                </button>
              </li>
              <li>
                <button onClick={() => onViewChange('gallery')} className="hover:text-[#C8A165] transition-colors text-left uppercase tracking-wider font-mono text-[10px]">
                  → Gallery
                </button>
              </li>
              <li>
                <button onClick={() => onViewChange('services')} className="hover:text-[#C8A165] transition-colors text-left uppercase tracking-wider font-mono text-[10px]">
                  → Design Services
                </button>
              </li>
              <li>
                <button onClick={() => onViewChange('heritage')} className="hover:text-[#C8A165] transition-colors text-left uppercase tracking-wider font-mono text-[10px]">
                  → Heritage
                </button>
              </li>
              <li>
                <button onClick={() => onViewChange('contact')} className="hover:text-[#C8A165] transition-colors text-left uppercase tracking-wider font-mono text-[10px]">
                  → Contact
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs tracking-[0.2em] font-mono uppercase text-white font-semibold">
              Showroom Hours
            </h4>
            <div className="space-y-2 text-xs font-mono">
              {showrooms.hours.map((h, i) => (
                <div key={i} className="border-b border-gray-900 pb-2">
                  <div className="text-[#C8A165]">{h.days}</div>
                  <div className="text-gray-400 mt-0.5">{h.hours}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="border-t border-[#C8A165]/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-mono">
          <p>© Imperial Furniture. All Rights Reserved.</p>
          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-[#C8A165] hover:text-white transition-colors mt-4 md:mt-0"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
        
      </div>
    </footer>
  );
};
