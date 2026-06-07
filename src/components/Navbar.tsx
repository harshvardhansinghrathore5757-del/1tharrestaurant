import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-brown/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-[1024px] mx-auto px-6 md:px-12 pt-4 md:pt-6">
        <div className="flex justify-between items-center font-medium text-sm md:text-[14px] tracking-[0.1em] uppercase border-b border-border-dark pb-4">
          <div className="flex-shrink-0 flex items-center">
            <span>1 THAR — <span className="text-terracotta">RESTAURANT</span></span>
          </div>
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <a href="#about" className="hover:text-terracotta transition-colors">About</a>
            <a href="#menu" className="hover:text-terracotta transition-colors">Menu</a>
            <a href="#gallery" className="hover:text-terracotta transition-colors">Gallery</a>
            <a href="#testimonials" className="hover:text-terracotta transition-colors">Testimonials</a>
            <a href="#book-table" className="hover:text-terracotta transition-colors">Book a Table</a>
            <a href="#visit" className="hover:text-terracotta transition-colors">Contact Us</a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-sand p-2 -mr-2 -mt-2">
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-brown border-b border-border-dark">
          <div className="px-6 py-4 space-y-2 text-sm tracking-[0.1em] uppercase font-medium">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-terracotta">About</a>
            <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-terracotta">Menu</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-terracotta">Gallery</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-terracotta">Testimonials</a>
            <a href="#book-table" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-terracotta">Book a Table</a>
            <a href="#visit" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-terracotta">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
      }

