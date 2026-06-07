import { Flame, Star, Coffee, Sparkles } from 'lucide-react';

export default function MarqueeBanner() {
  const items = [
    { text: "AUTHENTIC DESERT FLAVORS", icon: Flame },
    { text: "ROYAL RECIPES", icon: Star },
    { text: "RICH SPICES", icon: Sparkles },
    { text: "TRADITIONAL THALI", icon: Coffee },
    { text: "FINE DINING", icon: Star },
  ];

  const content = (
    <div className="flex animate-marquee min-w-full shrink-0 justify-around items-center">
      {items.map((item, i) => (
        <div key={i} className="flex items-center mx-8 gap-8">
          <span className="font-medium tracking-[0.15em] text-[13px]">{item.text}</span>
          <item.icon size={16} strokeWidth={2} className="text-dark-brown/70" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-terracotta text-dark-brown py-4 flex overflow-hidden w-full border-y border-border-dark select-none">
      {content}
      {content}
      {content}
    </div>
  );
}

