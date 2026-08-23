import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MessageSquare } from 'lucide-react';

export const WhatsAppButton = ({ className = "", children }: { className?: string, children?: React.ReactNode }) => {
  return (
    <Button 
      className={`bg-primary hover:bg-primary/90 text-white rounded-full font-bold shadow-md transition-all hover:scale-105 active:scale-95 ${className}`}
      onClick={() => window.open('https://wa.me/5541999999999', '_blank')}
    >
      {children || 'Agendar Consulta'}
      <Calendar className="ml-2 w-4 h-4" />
    </Button>
  );
};

export const FloatingWhatsApp = () => {
  return (
    <button
      onClick={() => window.open('https://wa.me/5541999999999', '_blank')}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all"
      aria-label="WhatsApp"
    >
      <MessageSquare className="w-6 h-6" />
    </button>
  );
};
