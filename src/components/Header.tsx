
import Logo from './Logo';

const navItems = [
  { name: "Services", href: "#services" },
  { name: "Products and Tools", href: "#" },
  { name: "Contact Us", href: "#" }
];

const Header = () => {
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
