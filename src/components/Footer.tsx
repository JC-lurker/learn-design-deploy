
import { Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-hero-gradient text-white py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="bg-white/10 rounded-xl p-8 mb-10 text-center">
          <h3 className="text-2xl font-bold mb-2">Privacy Notice</h3>
          <p className="text-white/80 max-w-3xl mx-auto">
            Your information is protected in accordance with Singapore's Personal Data Protection Act (PDPA). We will only use your contact information to respond to your inquiry and provide relevant service information.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="bg-white rounded-full py-4 px-10 inline-flex items-center gap-x-8 shadow-lg">
            <a href="http://www.example.com" className="text-brand-text hover:text-brand-primary font-medium transition-colors">Homepage</a>
            <a href="#" className="text-brand-text hover:text-brand-primary font-medium transition-colors">Site Link 2</a>
            <a href="#" className="text-brand-text hover:text-brand-primary font-medium transition-colors">Site Link 3</a>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4">
          <p className="text-white/80 text-sm">&copy; {new Date().getFullYear()} Learning-legacy Pte Ltd. All rights reserved.</p>
          <div className="flex gap-4 md:mr-8">
            <a href="#" aria-label="YouTube"><Youtube className="hover:scale-125 transition-transform" /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin className="hover:scale-125 transition-transform" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
