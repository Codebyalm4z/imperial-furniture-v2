import React from 'react';
import { Product } from '../types';
import { ArrowUpRight, Award, Ruler } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  onSelect: (productId: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="bg-[#0D0D0D] border border-gray-900 group relative flex flex-col justify-between overflow-hidden cursor-pointer"
      onClick={() => onSelect(product.id)}
    >
      {/* Visual luxury accent strip */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-[#C8A165] group-hover:to-transparent transition-colors duration-500 z-10" />

      {/* Product Image Section */}
      <div className="relative overflow-hidden aspect-[4/3] bg-[#050505]">
        <img
          src={product.images[0]}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.85] group-hover:brightness-100"
        />
        
        {/* Elegant Category Tag with blur backdrop */}
        <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-2.5 py-1 border border-[#C8A165]/35">
          <span className="text-[9px] tracking-[0.2em] font-mono text-[#C8A165] uppercase">
            {product.category}
          </span>
        </div>

        {/* Action slide overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <span className="text-xs tracking-[0.2em] font-mono uppercase text-white flex items-center space-x-1.5 border-b border-[#C8A165] pb-1">
            <span>View Details</span>
            <ArrowUpRight size={14} className="text-[#C8A165]" />
          </span>
        </div>
      </div>

      {/* Product text content */}
      <div className="p-6 flex flex-col flex-grow justify-between border-t border-gray-900/60">
        <div>
          <div className="flex justify-between items-start space-x-2">
            <h3 className="font-serif text-base sm:text-lg text-white font-medium tracking-tight group-hover:text-[#C8A165] transition-colors duration-300">
              {product.name}
            </h3>
            <span className="text-[10px] font-mono ml-2 mt-1 text-[#C8A165] tracking-widest uppercase shrink-0">
              {product.priceRange}
            </span>
          </div>
          
          <p className="text-xs text-gray-400 mt-2 line-clamp-3 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Specifications snippet */}
        <div className="mt-4 pt-4 border-t border-gray-900/40 flex items-center justify-between text-[10px] text-gray-500 font-mono">
          <span className="flex items-center space-x-1">
            <Ruler size={12} className="text-[#C8A165]/70" />
            <span className="truncate max-w-[140px]">{product.dimensions.split('(')[0]}</span>
          </span>
          <span className="flex items-center space-x-1 shrink-0 text-gray-400">
            <Award size={12} className="text-[#C8A165]/70" />
            <span>Quality Build</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
};
