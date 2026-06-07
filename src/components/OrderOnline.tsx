import { UtensilsCrossed } from 'lucide-react';

export default function OrderOnline() {
  return (
    <section id="order-online" className="py-24 bg-dark-brown text-sand flex flex-col items-center">
      <div className="text-terracotta mb-6 border border-terracotta/30 p-4 rounded-full bg-terracotta/5">
        <UtensilsCrossed size={36} strokeWidth={1.5} />
      </div>
      <h2 className="text-4xl font-serif mb-3 font-light text-center">Order Online</h2>
      <p className="text-sand/70 mb-10 text-[18px] font-light text-center max-w-md">
        Get your favourites delivered fast straight from our kitchen to your door.
      </p>
      
      <div className="flex flex-wrap justify-center gap-6">
        {/* Swiggy Button */}
        <a 
          href="https://www.swiggy.com/city/jaipur/1-thar-restaurant-mansarovar-extension-rest1056151" 
          target="_blank" 
          rel="noreferrer" 
          className="flex items-center gap-3 bg-white rounded-xl border border-gray-200 px-8 py-3 hover:scale-105 transition-transform shadow-lg"
        >
          <div className="w-8 h-8 bg-[#FC8019] rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0 overflow-hidden" style={{ borderRadius: '50% 50% 0 50%' }}>
            S
          </div>
          <span className="text-[#FC8019] font-bold text-[28px] tracking-tight leading-none pt-1">Swiggy</span>
        </a>
        
        {/* Zomato Button */}
        <a 
          href="https://www.zomato.com/jaipur/1-thar-restaurant-mansarovar/menu" 
          target="_blank" 
          rel="noreferrer" 
          className="flex items-center bg-white rounded-xl border border-gray-200 px-6 py-2 hover:scale-105 transition-transform shadow-lg"
        >
          <div className="bg-[#E23744] text-white px-4 py-2 font-black text-[26px] tracking-tighter rounded-md leading-none pt-2.5">
            zomato
          </div>
        </a>
      </div>
    </section>
  );
}

