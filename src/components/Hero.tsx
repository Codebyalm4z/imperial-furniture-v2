import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Award, ShieldCheck, HeartHandshake } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onBookClick }) => {
  return (
    <div className="relative bg-[#0A0A0A] overflow-hidden min-h-[90vh] flex items-center pt-20 pb-16">
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10" />
        <img
          src="/src/assets/images/imperial_hero_1781946999698.jpg"
          alt="Imperial Furniture showroom"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter opacity-40 scale-105"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl space-y-8">
          
          <div className="inline-flex items-center space-x-2 bg-[#C8A165]/10 border border-[#C8A165]/30 px-3.5 py-1.5">
            <span className="w-1.5 h-1.5 bg-[#C8A165] rounded-full animate-ping" />
            <span className="text-[10px] tracking-[0.3em] font-mono text-[#C8A165] uppercase font-bold">
              Premium Furniture & Interior Solutions Since 1983
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-white tracking-tight leading-tight">
              Crafted for Luxury. <br />
              <span className="text-[#C8A165] italic font-normal">Built for Generations.</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl font-sans">
              Imperial Furniture has been serving homes and businesses in Mumbai since 1983. Quality craftsmanship, premium materials, and custom furniture solutions from our showroom at Turner Road, Bandra West.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <button
              onClick={onExploreClick}
              className="bg-[#C8A165] text-black hover:bg-white hover:text-black font-semibold font-mono tracking-widest text-xs uppercase py-4 px-8 flex items-center justify-center space-x-2.5 transition-all duration-300 cursor-pointer"
            >
              <span>Explore Collections</span>
              <ArrowRight size={14} />
            </button>
            <button
              onClick={onBookClick}
              className="border border-[#C8A165] text-[#C8A165] hover:bg-[#C8A165]/15 font-semibold font-mono tracking-widest text-xs uppercase py-4 px-8 text-center transition-all duration-300 cursor-pointer"
            >
              Contact Us
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-12 border-t border-gray-900 max-w-2xl text-xs">
            <div className="space-y-1">
              <div className="flex items-center space-x-2 text-[#C8A165]">
                <Award size={16} />
                <span className="font-mono text-[10px] tracking-widest uppercase font-semibold text-white">Since 1983</span>
              </div>
              <p className="text-gray-400 text-[11px]">Over four decades of furniture manufacturing experience.</p>
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center space-x-2 text-[#C8A165]">
                <ShieldCheck size={16} />
                <span className="font-mono text-[10px] tracking-widest uppercase font-semibold text-white">Quality Craft</span>
              </div>
              <p className="text-gray-400 text-[11px]">Premium materials and skilled workmanship in every piece.</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center space-x-2 text-[#C8A165]">
                <HeartHandshake size={16} />
                <span className="font-mono text-[10px] tracking-widest uppercase font-semibold text-white">Custom Solutions</span>
              </div>
              <p className="text-gray-400 text-[11px]">Furniture made to your specifications and requirements.</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
