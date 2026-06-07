import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS } from '../data';
import { Leaf, Flame } from 'lucide-react';

const CATEGORIES = Array.from(new Set(MENU_ITEMS.map(item => item.category)));

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string>(CATEGORIES[0]);

  const filteredMenu = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-dark-brown text-sand">
      <div className="max-w-[1024px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20 flex flex-col items-center">
          <h2 className="text-terracotta uppercase tracking-[0.2em] text-[10px] font-medium mb-3 opacity-50">Our Offerings</h2>
          <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-6 mb-12">
            <h3 className="text-5xl md:text-7xl font-black uppercase tracking-[0.05em] leading-[0.8]">Evening</h3>
            <div className="hidden md:block h-[1px] w-[60px] bg-border-dark mb-4"></div>
            <h3 className="text-4xl md:text-[48px] font-light italic font-serif m-0 text-sand/80 lowercase">menu</h3>
          </div>
          
          <div className="flex overflow-x-auto justify-start flex-nowrap md:flex-wrap md:justify-center gap-6 text-[11px] tracking-[0.1em] uppercase pb-4 w-full [scrollbar-width:none]">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`pb-2 transition-all duration-300 border-b ${
                  activeCategory === category 
                    ? 'border-terracotta text-terracotta' 
                    : 'border-transparent text-sand/60 hover:text-sand'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredMenu.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                key={item.id}
                className="flex flex-col group border-t border-border-dark pt-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-serif text-[24px] italic font-light flex items-center gap-2">
                    {item.name}
                    <span className="flex items-center gap-1">
                      {item.vegetarian && <Leaf size={14} className="text-green-500/50" title="Vegetarian" />}
                      {item.spicy && <Flame size={14} className="text-terracotta/50" title="Spicy" />}
                    </span>
                  </h4>
                  <span className="font-sans font-medium text-terracotta text-[14px]">{item.price}</span>
                </div>
                {(item.image || item.description) && (
                  <div className="flex gap-6">
                    {item.image && (
                      <div className="w-24 h-24 shrink-0 overflow-hidden border border-border-dark rounded-full">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover grayscale"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}
                    {item.description && (
                      <p className="text-sand/60 font-light text-[14px] leading-relaxed flex-1">
                        {item.description}
                      </p>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

