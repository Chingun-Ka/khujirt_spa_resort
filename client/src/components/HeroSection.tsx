import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Users } from 'lucide-react';

interface HeroSectionProps {
  language: 'mn' | 'en';
  onBooking: () => void;
}

const translations = {
  mn: {
    mainHeading: 'Байгалийн рашаан, шаврын эмчилгээний клинкийн тэргүүлэгч сувилал',
    subtitle: '1939 оноос хойш уламжлагдсан эмчилгээ, орчин үеийн тухлаг орчин.',
    trustBadge: '✓ 1939 ОНД ҮҮСГЭГДСЭН',
    trustSubtext: 'Монголын эмчилгээний сувилалын тэргүүлэгч',
    benefit1: '85+ жилийн клиникээр батлагдсан рашаан ба шаврын эмчилгээ',
    benefit2: '1,660м өндөр, цэвэр уулын агаарт байрладаг',
    benefit3: '7 хоног сувилалын багцад эмчийн хяналт орсон',
    checkIn: 'Ирэх өдөр',
    guests: 'Зочдын тоо',
    roomType: 'Өрөөний төрөл',
    calculatePrice: 'Үнэ тооцох',
  },
  en: {
    mainHeading: "Mongolia's Leading Mineral & Mud Balneotherapy Healing Center",
    subtitle: 'Heritage healing since 1939, modern wellness environment.',
    trustBadge: '✓ ESTABLISHED 1939',
    trustSubtext: "Mongolia's Premier Healing Institution",
    benefit1: '85+ years of clinically proven mineral & mud therapy',
    benefit2: '1,660m altitude with pristine mountain air',
    benefit3: '7-day comprehensive healing packages with doctor supervision',
    checkIn: 'Check-in Date',
    guests: 'Number of Guests',
    roomType: 'Room Type',
    calculatePrice: 'Calculate Price',
  },
};

export default function HeroSection({ language, onBooking }: HeroSectionProps) {
  const t = translations[language];
  const [checkInDate, setCheckInDate] = useState('');
  const [guests, setGuests] = useState('');
  const [roomType, setRoomType] = useState('');

  const roomOptions = {
    mn: [
      { value: 'luxury', label: 'Люкс өрөө' },
      { value: 'standard-2', label: 'Энгийн 2 ортой өрөө' },
      { value: 'standard-3-4', label: 'Энгийн 3-4 ортой өрөө' },
      { value: 'standard-5-6', label: 'Энгийн 5-6 ортой өрөө' },
    ],
    en: [
      { value: 'luxury', label: 'Luxury Suite' },
      { value: 'standard-2', label: 'Standard 2-Bed Room' },
      { value: 'standard-3-4', label: 'Standard 3-4 Bed Room' },
      { value: 'standard-5-6', label: 'Standard 5-6 Bed Room' },
    ],
  };

  return (
    <section id="home" className="relative w-full bg-white pt-20 pb-32">
      <div className="container max-w-7xl">
        {/* Asymmetric Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Editorial Content with Medical Authority */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
              <span className="text-xs font-bold text-accent">{t.trustBadge}</span>
              <span className="text-xs text-muted-foreground">{t.trustSubtext}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
              {t.mainHeading}
            </h1>

            {/* Subtitle with Authority */}
            <p className="text-lg text-foreground leading-relaxed max-w-xl">
              {t.subtitle}
            </p>

            {/* Key Benefits - Medical Authority Signals */}
            <div className="space-y-3 pt-4 border-t border-border">
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold text-lg flex-shrink-0">✓</span>
                <span className="text-sm text-foreground">{t.benefit1}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold text-lg flex-shrink-0">✓</span>
                <span className="text-sm text-foreground">{t.benefit2}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold text-lg flex-shrink-0">✓</span>
                <span className="text-sm text-foreground">{t.benefit3}</span>
              </div>
            </div>

            {/* Decorative Line */}
            <div className="w-12 h-1 bg-accent rounded-full" />
          </div>

          {/* Right: Hero Image with Asymmetric Composition */}
          <div className="relative h-96 lg:h-full min-h-96 order-1 lg:order-2">
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
              style={{
                backgroundImage: 'url(/manus-storage/khujirt_hero_background_a6f63fad.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* Floating Search Bar - Positioned Below Hero */}
        <div className="relative z-20 -mt-20 mb-0">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Check-in Date */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-foreground">
                  {t.checkIn}
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
              </div>

              {/* Number of Guests */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-foreground">
                  {t.guests}
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    placeholder="1"
                    className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
              </div>

              {/* Room Type */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-foreground">
                  {t.roomType}
                </label>
                <Select value={roomType} onValueChange={setRoomType}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    {roomOptions[language].map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Calculate Button */}
              <div className="flex flex-col gap-2 justify-end">
                <Button
                  onClick={onBooking}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2 h-10 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
                >
                  {t.calculatePrice}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
