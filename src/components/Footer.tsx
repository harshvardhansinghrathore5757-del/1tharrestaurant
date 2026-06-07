import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="visit" className="bg-dark-brown text-sand pt-20 pb-16">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 xl:gap-8">
          
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col">
            <div className="mb-8">
               <h2 className="text-5xl font-serif italic mb-2">1 Thar</h2>
               <p className="text-[12px] font-medium tracking-[0.2em] uppercase text-terracotta mb-2">Restaurant</p>
               <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-sand/60">Founded in 2025</p>
            </div>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/1tharrestaurant?igsh=MWZnamF5OHJ1NGM5NQ==" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-sand text-dark-brown flex items-center justify-center hover:bg-terracotta transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/p/1-Thar-Restaurant-61574315664242/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-sand text-dark-brown flex items-center justify-center hover:bg-terracotta transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-sans font-bold text-[16px] tracking-[0.1em] uppercase mb-8">Quick Links</h3>
            <ul className="space-y-4 text-[15px] font-light text-sand/80">
              <li><a href="#about" className="hover:text-terracotta transition-colors">About us</a></li>
              <li><a href="#menu" className="hover:text-terracotta transition-colors">Menu</a></li>
              <li><a href="#visit" className="hover:text-terracotta transition-colors">Contact</a></li>
              <li><a href="https://www.swiggy.com/city/jaipur/1-thar-restaurant-mansarovar-extension-rest1056151" target="_blank" rel="noreferrer" className="hover:text-terracotta transition-colors">Swiggy</a></li>
              <li><a href="https://www.zomato.com/jaipur/1-thar-restaurant-mansarovar/menu" target="_blank" rel="noreferrer" className="hover:text-terracotta transition-colors">Zomato</a></li>
              <li><a href="#" className="hover:text-terracotta transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-terracotta transition-colors">Terms & Condition</a></li>
            </ul>
          </div>

          {/* Column 3: Reach Us On */}
          <div>
            <h3 className="font-sans font-bold text-[16px] tracking-[0.1em] uppercase mb-8">Reach Us On</h3>
            <ul className="space-y-6 text-[15px] font-light text-sand/80">
              <li className="flex items-start gap-4">
                <Mail className="shrink-0 mt-0.5" size={20} />
                <a href="mailto:reservations@1thar.com" className="hover:text-terracotta transition-colors">reservations@1thar.com</a>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="shrink-0 mt-0.5" size={20} />
                <a href="tel:+916367103964" className="hover:text-terracotta transition-colors">+91 63671 03964</a>
              </li>
              <li className="flex items-start gap-4">
                <MessageCircle className="shrink-0 mt-0.5" size={20} />
                <a href="https://wa.me/916367103964" target="_blank" rel="noreferrer" className="hover:text-terracotta transition-colors">WhatsApp</a>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="shrink-0 mt-0.5" size={20} />
                <span className="leading-[1.5]">4-5/C, 2nd Floor & Rooftop, Veer Teja Circle, Patrakar Colony Road, Mansarovar, Jaipur, Rajasthan 302020.</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Google Maps Embed */}
          <div className="h-64 xl:h-full min-h-[220px] w-full bg-border-dark/50 rounded-xl overflow-hidden relative border border-border-dark">
             <iframe 
               src="https://maps.google.com/maps?q=1%20Thar%20Restaurant,%20Mansarovar,%20Jaipur&t=&z=15&ie=UTF8&iwloc=&output=embed" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen={true} 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="absolute inset-0 grayscale contrast-125 opacity-90 transition-all hover:grayscale-0 hover:opacity-100 duration-500"
             ></iframe>
          </div>

        </div>
        
        <div className="mt-20 pt-8 border-t border-border-dark flex text-[10px] opacity-40 tracking-[0.2em] uppercase justify-center text-center">
          <p>&copy; {new Date().getFullYear()} 1 THAR RESTAURANT. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}

