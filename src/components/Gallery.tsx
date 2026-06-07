import { motion } from 'motion/react';

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800&h=600",
    alt: "Restaurant Ambiance"
  },
  {
    src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=800&h=600",
    alt: "Traditional Indian Thali"
  },
  {
    src: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800&h=1200",
    alt: "Spices and Ingredients"
  },
  {
    src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800&h=600",
    alt: "Chef preparing food"
  },
  {
    src: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=800&h=1200",
    alt: "Authentic Curry"
  },
  {
    src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800&h=600",
    alt: "Dining Experience"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-dark-brown">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-[12px] font-medium tracking-[0.2em] uppercase text-terracotta mb-4">A Visual Journey</h2>
          <h3 className="text-4xl md:text-5xl font-serif italic text-sand">Our Gallery</h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px]">
          {IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-xl border border-border-dark group ${
                i === 2 || i === 4 ? 'row-span-2' : ''
              }`}
            >
              <img 
                src={img.src} 
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

