import { useState, useEffect } from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const sections = [
  { id: 'hero', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'menu', name: 'Menu' },
  { id: 'gallery', name: 'Gallery' },
  { id: 'testimonials', name: 'Testimonials' },
  { id: 'book-table', name: 'Book a Table' },
  { id: 'visit', name: 'Contact Us' },
];

export default function Breadcrumbs() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observers = new Map();

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        observers.set(id, element);
      }
    });

    return () => {
      observers.forEach((element) => observer.unobserve(element));
    };
  }, []);

  const currentSectionName = sections.find((s) => s.id === activeSection)?.name || 'Home';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="fixed top-[70px] md:top-[85px] left-0 w-full z-40 pointer-events-none"
        >
          <div className="max-w-[1024px] mx-auto px-6 md:px-12">
            <div className="inline-flex flex-wrap items-center gap-2 text-xs md:text-sm font-medium tracking-widest uppercase pointer-events-auto bg-dark-brown/90 backdrop-blur-md px-4 py-2 rounded-full border border-border-dark/50 shadow-sm text-sand/60">
              <a href="#hero" className="hover:text-terracotta transition-colors flex items-center">
                <Home size={14} className="md:w-4 md:h-4" />
              </a>
              {currentSectionName !== 'Home' && (
                <>
                  <ChevronRight size={14} className="text-sand/40" />
                  <span className="text-terracotta">
                    {currentSectionName}
                  </span>
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

