import React from 'react';
import { MessageSquarePlus } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    const encodedText = encodeURIComponent('Hello Imperial Furniture, I would like to know more about your furniture collections.');
    window.open(`https://wa.me/919820470649?text=${encodedText}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-[#0A0A0A] border border-[#C8A165]/40 text-[#C8A165] font-mono text-[10px] tracking-wider uppercase px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Chat on WhatsApp
      </span>
      
      <button
        onClick={handleWhatsAppClick}
        className="bg-black text-[#C8A165] hover:bg-[#C8A165] hover:text-black hover:scale-105 transition-all duration-300 p-4 border border-[#C8A165] shadow-[0_0_15px_rgba(200,161,101,0.35)] flex items-center justify-center animate-pulse"
        style={{ borderRadius: '0' }}
        title="Contact on WhatsApp"
        aria-label="Contact Imperial Furniture on WhatsApp"
      >
        <MessageSquarePlus size={24} className="stroke-[1.75]" />
      </button>
    </div>
  );
};
