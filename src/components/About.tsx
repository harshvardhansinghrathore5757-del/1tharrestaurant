import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-dark-brown text-sand border-b border-border-dark">
      <div className="max-w-[1024px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-terracotta uppercase tracking-[0.2em] text-[10px] font-medium mb-3 opacity-50">Our Heritage</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-6 leading-tight font-light italic">The Royal Kitchens<br/>of The Desert</h3>
            <div className="space-y-4 font-sans text-sand/70 leading-relaxed text-[16px] font-light">
              <p>
                Founded in 2025 and named after the Great Indian Desert, 1 Thar Restaurant was born from a passion to bring the authentic, 
                untouched flavors of Rajasthani cuisine to the world.
              </p>
              <p>
                Our recipes have been passed down through generations of royal chefs (Khansamas). 
                From the fiery Laal Maas to the comforting Dal Baati Churma, every dish tells a story of 
                rich heritage, bravery, and the vibrant culture of the sand dunes.
              </p>
              <p>
                We source our key spices, including the famous Mathania red chilies, directly from Rajasthan 
                to ensure an uncompromising, traditional dining experience.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex gap-4 h-[500px]"
          >
            <div className="w-1/2 h-full rounded-tl-full rounded-br-full overflow-hidden self-end h-[85%] mt-auto border border-border-dark">
              <img 
                src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=1528&auto=format&fit=crop" 
                alt="Spices" 
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="w-1/2 h-full border border-terracotta/50 rounded-tr-full rounded-bl-full overflow-hidden p-2">
               <img 
                src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1528" 
                alt="Chef preparing food" 
                className="w-full h-full object-cover rounded-tr-full rounded-bl-full grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

