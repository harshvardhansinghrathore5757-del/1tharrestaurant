import { Star } from 'lucide-react';
import { motion } from 'motion/react';

const MOCK_REVIEWS = [
  {
    name: "Rahul Raj",
    text: "The most authentic Laal Maas I've had in Jaipur. The spices were perfectly balanced, and the meat was incredibly tender. Top notch hospitality!",
    rating: 5,
    initial: "R"
  },
  {
    name: "Anjali Sharma",
    text: "Amazing rooftop ambiance. The Rajasthani Thali gives you a true taste of the desert. Highly recommend visiting in the evening!",
    rating: 5,
    initial: "A"
  },
  {
    name: "Vikram Singh",
    text: "A hidden gem in Mansarovar! The Dal Bati Churma is divine, and the staff is extremely warm and hospitable. Felt like royal treatment.",
    rating: 5,
    initial: "V"
  },
  {
    name: "Priya M.",
    text: "We hosted a family dinner here and everyone was blown away by the rich flavors and quick service. Hands down the best authentic food nearby.",
    rating: 5,
    initial: "P"
  },
  {
    name: "Rohan K.",
    text: "Loved the traditional decor and the vibe. The garlic naan and traditional curries were absolutely fantastic. Will be returning soon!",
    rating: 5,
    initial: "R"
  },
  {
    name: "Neha Gupta",
    text: "The best dining experience we've had in Jaipur. Everything from the welcome drink to the dessert was perfection.",
    rating: 5,
    initial: "N"
  }
];

export default function GoogleReviews({ placeId }: { placeId?: string }) {
  // Duplicate to ensure seamless looping
  const doubledReviews = [...MOCK_REVIEWS, ...MOCK_REVIEWS];

  return (
    <section id="testimonials" className="py-24 bg-black relative overflow-hidden">
      <div className="text-center mb-16 relative z-10 px-6">
        <h2 className="text-[12px] font-medium tracking-[0.2em] uppercase text-terracotta mb-4">What Our Guests Say</h2>
        <h3 className="text-4xl md:text-5xl font-serif italic text-sand">Guest Reviews</h3>
      </div>

      <div className="relative max-w-full overflow-hidden flex">
        {/* Gradient Mask for fading edges */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-black via-transparent to-black w-full" />
        
        <motion.div
          className="flex gap-6 w-max px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        >
          {doubledReviews.map((review, i) => (
            <div 
              key={i} 
              className="w-[320px] md:w-[380px] shrink-0 bg-dark-brown p-10 rounded-xl border border-border-dark flex flex-col items-center text-center"
            >
              <div className="flex gap-1 text-terracotta mb-6">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} fill="currentColor" size={16} />
                ))}
              </div>
              <p className="text-sand/80 font-light text-[15px] leading-relaxed mb-8 italic">
                "{review.text}"
              </p>
              <div className="mt-auto flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-black border border-border-dark flex items-center justify-center text-sand font-serif uppercase text-lg">
                  {review.initial}
                </div>
                <span className="text-[15px] font-medium tracking-wide text-sand">
                  {review.name}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
              }

