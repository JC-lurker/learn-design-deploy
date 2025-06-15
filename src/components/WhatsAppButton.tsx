
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a href="#" className="fixed bottom-6 right-6 bg-brand-green h-16 w-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50">
      <MessageCircle className="text-white h-8 w-8" />
    </a>
  );
};

export default WhatsAppButton;
