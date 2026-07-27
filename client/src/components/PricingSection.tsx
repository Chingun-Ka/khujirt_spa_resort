import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Check } from 'lucide-react';

interface PricingSectionProps {
  language: 'mn' | 'en';
  adminMode: boolean;
}

const translations = {
  mn: {
    title: 'Өрөөний төрөл ба 7 хоног сувилал',
    insuranceToggle: 'ЭМД-ын хөнгөлөлт тооцох',
    regularPrice: 'Ердийн үнэ',
    discountedPrice: 'ЭМД хөнгөлөлттэй',
    perWeek: '/ 7 хоног',
    includes: 'Багцад орсон:',
    luxury: {
      name: 'Люкс өрөө',
      features: ['1-2 зочин', 'Smart TV', 'Сүүлжүүлэгч', 'Диван', 'Ванн/Шүршүүр', 'Халаасны даашинз', 'VIP хоолны өрөө'],
    },
    standard2: {
      name: 'Энгийн 2 ортой өрөө',
      features: ['2 ганц ор', 'Хувийн угаалгын өрөө', 'TV', 'Жижиг сүүлжүүлэгч', 'Уулын харагдац'],
    },
    standard34: {
      name: 'Энгийн 3-4 ортой өрөө',
      features: ['Гэр бүл/найзуудын хувьд', 'Нийтлэг амралтын орон зай', 'Wi-Fi', 'TV'],
    },
    standard56: {
      name: 'Энгийн 5-6 ортой өрөө',
      features: ['Үнэ хэмжээнд ээлтэй нийтлэг сувилал', 'Хувийн шүүгэл', 'TV', 'Сүүлжүүлэгч'],
    },
    allIncludes: ['7 хоног байршил', '3 удаа өдөр хоол', 'Эмчийн үзлэг', 'Бүрэн эмчилгээ'],
  },
  en: {
    title: 'Rooms & 7-Day Healing Packages',
    insuranceToggle: 'Apply Health Insurance Discount',
    regularPrice: 'Regular Price',
    discountedPrice: 'With ЭМД Discount',
    perWeek: '/ 7 days',
    includes: 'Package includes:',
    luxury: {
      name: 'Luxury Suite',
      features: ['1-2 guests', 'Smart TV', 'Refrigerator', 'Sofa', 'Private bathtub/shower', 'Bathrobes', 'VIP dining seating'],
    },
    standard2: {
      name: 'Standard 2-Bed Room',
      features: ['2 single beds', 'Private bathroom', 'TV', 'Mini-fridge', 'Mountain view'],
    },
    standard34: {
      name: 'Standard 3-4 Bed Room',
      features: ['Ideal for families/friends', 'Shared living space', 'Wi-Fi', 'TV'],
    },
    standard56: {
      name: 'Standard 5-6 Bed Room',
      features: ['Budget-friendly community room', 'Individual lockers', 'TV', 'Refrigerator'],
    },
    allIncludes: ['7 days accommodation', '3 daily meals', 'Doctor checkups', 'Full medical treatments'],
  },
};

const roomData = [
  {
    id: 'luxury',
    regularPrice: 1015000,
    discountPrice: 915000,
  },
  {
    id: 'standard2',
    regularPrice: 850000,
    discountPrice: 750000,
  },
  {
    id: 'standard34',
    regularPrice: 820000,
    discountPrice: 720000,
  },
  {
    id: 'standard56',
    regularPrice: 790000,
    discountPrice: 690000,
  },
];

export default function PricingSection({
  language,
  adminMode,
}: PricingSectionProps) {
  const [insuranceDiscount, setInsuranceDiscount] = useState(false);
  const t = translations[language];

  const getRoomInfo = (roomId: string) => {
    return t[roomId as keyof typeof t] || {};
  };

  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="container max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
            <span className="text-xs font-bold text-accent">COMPREHENSIVE HEALING PACKAGES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.includes}
          </p>
        </div>

        {/* Insurance Discount Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12 p-6 bg-secondary rounded-xl">
          <Switch
            checked={insuranceDiscount}
            onCheckedChange={setInsuranceDiscount}
            className="data-[state=checked]:bg-accent"
          />
          <label className="text-lg font-semibold text-foreground cursor-pointer">
            {t.insuranceToggle}
          </label>
          {insuranceDiscount && (
            <span className="ml-4 text-accent font-bold text-lg">
              ✓ {language === 'mn' ? 'Идэвхтэй' : 'Active'}
            </span>
          )}
        </div>

        {/* Included Services - Medical Authority Emphasis */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 bg-gradient-to-r from-secondary to-secondary/50 p-8 rounded-xl border-l-4 border-accent">
          {t.allIncludes.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-3 h-3 text-accent" />
              </div>
              <span className="text-sm font-medium text-foreground">{item}</span>
            </div>
          ))}
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roomData.map((room, idx) => {
            const roomInfo = getRoomInfo(room.id);
            const displayPrice = insuranceDiscount ? room.discountPrice : room.regularPrice;
            const originalPrice = room.regularPrice;

            return (
              <Card
                key={room.id}
                className={`overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                  adminMode ? 'border-2 border-yellow-400 relative' : ''
                }`}
                style={{
                  animationDelay: `${idx * 50}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards',
                }}
              >
                {/* Admin Mode Badge */}
                {adminMode && (
                  <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 px-2 py-1 rounded text-xs font-bold flex items-center gap-1 z-10">
                    ✏️ Editable
                  </div>
                )}

                <div className="p-6">
                  {/* Room Name */}
                  <h3 className="text-xl font-bold text-primary mb-4">
                    {(roomInfo as any).name}
                  </h3>

                  {/* Pricing */}
                  <div className="mb-6 space-y-2">
                    {insuranceDiscount && (
                      <div className="text-sm text-muted-foreground line-through">
                        {originalPrice.toLocaleString()} ₮
                      </div>
                    )}
                    <div className="text-3xl font-bold text-accent">
                      {displayPrice.toLocaleString()} ₮
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {t.perWeek}
                    </div>
                  </div>

                  {/* Features with Medical Authority Styling */}
                  <div className="space-y-3 mb-6 pb-6 border-b border-border">
                    {((roomInfo as any).features || []).map((feature: string, fidx: number) => (
                      <div key={fidx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button with Medical Authority */}
                  <div className="text-xs text-muted-foreground mb-3 text-center">
                    {language === 'mn' ? 'Эмчийн хяналтад' : 'Doctor-supervised'}
                  </div>
                  <button className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 transform active:scale-95">
                    {language === 'mn' ? 'Захиалах' : 'Book Now'}
                  </button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Fade-in animation */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
