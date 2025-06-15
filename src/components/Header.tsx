
import Logo from './Logo';
import { useLocation } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import ContactForm from './ContactForm';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { name: "Services", href: location.pathname === '/' ? "#services" : "/#services" },
    { name: "Products and Tools", href: "/products" },
  ];

  return (
    <header className="bg-white py-4 px-4 md:px-8 lg:px-16 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-brand-text hover:text-brand-primary transition-colors">
              {item.name}
            </a>
          ))}
          <Dialog>
            <DialogTrigger asChild>
              <button className="text-brand-text hover:text-brand-primary transition-colors">
                Contact Us
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Contact Us</DialogTitle>
                <DialogDescription>
                  We would love to hear from you. Please fill out the form below.
                </DialogDescription>
              </DialogHeader>
              <ContactForm />
            </DialogContent>
          </Dialog>
        </nav>
      </div>
    </header>
  );
};

export default Header;
