import { CalendarCheck } from 'lucide-react';
import EazyDinerLogo from './EazyDinerLogo';

export default function BookTable() {
  return (
    <section id="book-table" className="py-24 bg-dark-brown text-sand flex flex-col items-center border-t border-border-dark">
      <div className="text-terracotta mb-6 border border-terracotta/30 p-4 rounded-full bg-terracotta/5">
        <CalendarCheck size={36} strokeWidth={1.5} />
      </div>
      <h2 className="text-4xl font-serif mb-3 font-light text-center">Book a Table</h2>
      <p className="text-sand/70 mb-10 text-[18px] font-light text-center max-w-md">
        Reserve your table with us for a memorable dining experience.
      </p>
      
      <div className="flex flex-wrap justify-center gap-6">
        {/* EazyDiner Button */}
        <a 
          href="https://www.eazydiner.com/jaipur/1-thar-restaurant-mansarovar-jaipur-703211" 
          target="_blank" 
          rel="noreferrer" 
          className="flex items-center bg-white rounded-xl border border-gray-200 px-6 py-3 hover:scale-105 transition-transform shadow-lg"
        >
          <div className="flex flex-col justify-center items-center">
            <span className="text-[12px] text-gray-500 mb-1 leading-tight font-medium uppercase tracking-wider">Book via</span>
            <EazyDinerLogo className="w-auto h-8 text-[#FF4612]" />
          </div>
        </a>
      </div>
    </section>
  );
}

