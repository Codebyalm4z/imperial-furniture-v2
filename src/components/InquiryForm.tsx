import React, { useState } from 'react';
import { CheckCircle2, Crown, ArrowRight } from 'lucide-react';

interface InquiryFormProps {
  onSubmit?: (data: { name: string; email: string; phone: string; message: string }) => void;
  title?: string;
  subtitle?: string;
}

export const InquiryForm: React.FC<InquiryFormProps> = ({
  onSubmit,
  title = 'Send Us an Inquiry',
  subtitle = 'Fill in your details and we will get back to you shortly.',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      if (onSubmit) {
        onSubmit(formData);
      }
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', phone: '', message: '' });
    setSubmitted(false);
  };

  return (
    <div className="bg-[#0D0D0D] border border-[#C8A165]/30 p-6 sm:p-10 relative">
      <div className="absolute top-0 right-0 p-4 opacity-15">
        <Crown size={80} className="text-[#C8A165]" />
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-b border-[#C8A165]/20 pb-4 mb-6">
            <h3 className="font-serif text-lg sm:text-2xl text-white tracking-wide uppercase">
              {title}
            </h3>
            <p className="text-xs text-gray-400 mt-1">{subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] tracking-widest font-mono uppercase text-[#C8A165] mb-2">
                Name *
              </label>
              <input
                type="text"
                required
                className="w-full bg-[#050505] border border-gray-800 focus:border-[#C8A165] text-white py-3 px-4 text-sm focus:outline-none transition-colors rounded-none font-sans"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-[10px] tracking-widest font-mono uppercase text-[#C8A165] mb-2">
                Phone *
              </label>
              <input
                type="tel"
                required
                className="w-full bg-[#050505] border border-gray-800 focus:border-[#C8A165] text-white py-3 px-4 text-sm focus:outline-none transition-colors rounded-none font-mono"
                placeholder="+91"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] tracking-widest font-mono uppercase text-[#C8A165] mb-2">
              Email *
            </label>
            <input
              type="email"
              required
              className="w-full bg-[#050505] border border-gray-800 focus:border-[#C8A165] text-white py-3 px-4 text-sm focus:outline-none transition-colors rounded-none font-mono"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-[10px] tracking-widest font-mono uppercase text-[#C8A165] mb-2">
              Message *
            </label>
            <textarea
              rows={4}
              required
              className="w-full bg-[#050505] border border-gray-800 focus:border-[#C8A165] text-white py-3 px-4 text-sm focus:outline-none transition-colors rounded-none font-sans"
              placeholder="Tell us about your furniture requirements..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#C8A165] text-black font-semibold font-mono tracking-widest uppercase hover:bg-white text-xs py-4 px-6 flex items-center justify-center space-x-2 transition-all duration-300 disabled:opacity-50"
            >
              <span>{isSubmitting ? 'Sending...' : 'Submit Inquiry'}</span>
              {!isSubmitting && <ArrowRight size={14} />}
            </button>
          </div>
        </form>
      ) : (
        <div className="text-center py-8 space-y-6">
          <div className="inline-flex items-center justify-center bg-transparent border border-[#C8A165] p-4 text-[#C8A165]">
            <CheckCircle2 size={44} className="stroke-[1.5]" />
          </div>

          <div className="space-y-2">
            <h4 className="font-serif text-2xl text-white tracking-wide uppercase">
              Inquiry Received
            </h4>
            <p className="text-xs text-gray-400 max-w-md mx-auto leading-relaxed pt-2">
              Thank you for contacting Imperial Furniture. We will respond to your inquiry at <span className="text-white font-mono">{formData.phone}</span> or <span className="text-white font-mono">{formData.email}</span> shortly.
            </p>
          </div>

          <button
            onClick={handleReset}
            className="text-xs font-mono tracking-widest text-gray-400 hover:text-white uppercase border-b border-gray-600 pb-0.5 hover:border-white transition-all"
          >
            Send another inquiry
          </button>
        </div>
      )}
    </div>
  );
};
