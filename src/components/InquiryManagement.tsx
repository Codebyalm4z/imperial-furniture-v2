import React from 'react';
import { Clock, Layers } from 'lucide-react';

export const InquiryManagement: React.FC = () => {
  return (
    <div className="bg-[#050505] min-h-[40vh] py-16 px-4 sm:px-6 lg:px-8 text-white font-sans">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <div className="flex items-center justify-center space-x-2 text-[#C8A165]">
          <Layers size={20} />
          <span className="text-xs uppercase font-mono tracking-widest font-semibold">Inquiry Management</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-4xl uppercase tracking-wider text-white">
          Customer Inquiry Management
        </h2>
        <div className="inline-flex items-center space-x-2 bg-[#C8A165]/10 border border-[#C8A165]/30 px-4 py-2">
          <Clock size={16} className="text-[#C8A165]" />
          <span className="text-sm font-mono text-[#C8A165] uppercase tracking-wider">Coming Soon</span>
        </div>
        <p className="text-xs text-gray-400 leading-relaxed max-w-md mx-auto">
          Our online inquiry management system is currently under development. Please contact us directly by phone, email, or WhatsApp for all furniture inquiries.
        </p>
      </div>
    </div>
  );
};
