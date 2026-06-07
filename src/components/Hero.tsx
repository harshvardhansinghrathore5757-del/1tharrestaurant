import { motion } from 'motion/react';
import tharHeroBg from '../assets/images/thar_hero_1780764235941.png';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div id="hero" className="relative h-screen flex flex-col justify-center overflow-hidden border-b border-border-dark">
      {/* Background with reduced opacity to match dark theme mode */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src={tharHeroBg} 
          alt="1 Thar Restaurant Interior" 
          className="w-full h-full object-cover grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-dark-brown/80 mix-blend-multiply"></div>
      </div>
      
      {/* Vertical Side Text */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 text-[10px] opacity-30 tracking-[0.5em] uppercase z-10 hidden md:block">
        ESTABLISHED IN 2025 IN THE HEART OF RAJASTHAN
      </div>

      <div className="relative z-10 px-6 md:px-12 max-w-[1024px] mx-auto w-full pt-16">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-terracotta uppercase font-medium text-[14px] mb-4 tracking-[0.1em]"
        >
          // A Journey Through The Desert
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[14vw] md:text-[140px] font-black leading-[0.8] tracking-[-0.05em] uppercase text-sand m-0"
        >
          Authentic<br />
          Flavors
        </motion.h1>
        
        <div className="flex flex-col md:flex-row md:items-end gap-6 mt-6 md:mt-2 mb-8 md:mb-12">
          <motion.h2 
             initial={{ opacity: 0 }} 
             animate={{ opacity: 1 }} 
             transition={{ duration: 0.8, delay: 0.4 }}
             className="text-4xl md:text-[48px] font-light italic font-serif m-0 text-sand/80 lowercase"
          >
            of Rajasthan
          </motion.h2>
          <div className="hidden md:block h-[1px] w-[60px] md:w-[200px] bg-border-dark mb-4"></div>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base text-sand/60 max-w-md font-light leading-[1.4]"
        >
          Experience the majestic culinary heritage of the Thar desert. 
          Rich spices, royal recipes, and traditional hospitality await you at 1 Thar Restaurant.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 hidden md:flex"
        >
          <a 
            href="#menu" 
            className="w-[120px] h-[120px] rounded-full border border-terracotta flex items-center justify-center text-center text-[11px] tracking-[0.1em] text-sand hover:bg-terracotta hover:text-dark-brown transition-colors duration-300 uppercase leading-[1.3]"
          >
            Explore<br/>Our<br/>Menu
          </a>
        </motion.div>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           className="md:hidden mt-8"
        >
           <a 
            href="#menu" 
            className="inline-block border border-terracotta text-sand px-8 py-3 text-[11px] tracking-[0.1em] uppercase hover:bg-terracotta hover:text-dark-brown transition-colors duration-300"
          >
            Explore Our Menu
          </a>
        </motion.div>
      </div>
    </div>
  );
}

