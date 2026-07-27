import { Card } from '@/components/ui/card';
import { Droplets, Flame, Zap, Leaf } from 'lucide-react';

interface TreatmentsSectionProps {
  language: 'mn' | 'en';
  adminMode: boolean;
}

const translations = {
  mn: {
    title: 'Эмчилгээний аргууд',
    subtitle: 'Байгалийн рашаан ба шаврын эмчилгээний хүчээр сэргээх',
    treatments: [
      {
        name: 'Шавар эмчилгээ',
        icon: 'mud',
        description: 'Байгалийн ашигтай ашигтай шавар нь ясны өвдөлт, үе мөчний үрэвслийг сайжруулахад ашигтай.',
      },
      {
        name: 'Рашаан эмчилгээ',
        icon: 'thermal',
        description: 'Байгалийн халуун рашаан нь зүрхний эргэлт, мэдрэлийн системийг сэргээхэд туслалцаа үзүүлнэ.',
      },
      {
        name: 'Физик эмчилгээ & Массаж',
        icon: 'massage',
        description: 'Монголын уламжлалт массаж ба орчин үеийн электро эмчилгээ, сэргээлтийн үйлчилгээ.',
      },
      {
        name: 'Эрүүл хооллолт & Сувилал',
        icon: 'nutrition',
        description: 'Хувийн хоолны төлөвлөгөө ба уулын цэвэр агаарт амрах. Улаанбаатараас 390км холдуу.',
      },
    ],
  },
  en: {
    title: 'Healing Treatments',
    subtitle: 'Harness the power of natural mineral springs and mud therapy',
    treatments: [
      {
        name: 'Mineral Mud Therapy',
        icon: 'mud',
        description: 'Clinically proven organic mud enriched with minerals to relieve joint pain, arthritis, and inflammation.',
      },
      {
        name: 'Thermal Mineral Baths',
        icon: 'thermal',
        description: 'Natural hot spring water therapy designed for cardiovascular health and nervous system recovery.',
      },
      {
        name: 'Physical Therapy & Massage',
        icon: 'massage',
        description: 'Traditional Mongolian massage combined with modern electro-therapy and rehabilitation.',
      },
      {
        name: 'Nutritional & Rest Care',
        icon: 'nutrition',
        description: 'Customized dietary plans and serene mountain air 390km away from Ulaanbaatar\'s smog.',
      },
    ],
  },
};

const iconMap = {
  mud: Droplets,
  thermal: Flame,
  massage: Zap,
  nutrition: Leaf,
};

export default function TreatmentsSection({
  language,
  adminMode,
}: TreatmentsSectionProps) {
  const t = translations[language];

  return (
    <section id="treatments" className="py-20 bg-secondary relative">
      {/* Mineral Wave Divider Top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
      
      <div className="container max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
            <span className="text-xs font-bold text-accent">CLINICAL BENEFITS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mt-6" />
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.treatments.map((treatment, idx) => {
            const Icon = iconMap[treatment.icon as keyof typeof iconMap];
            return (
              <Card
                key={idx}
                className={`overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                  adminMode ? 'border-2 border-blue-400 relative' : ''
                }`}
                style={{
                  animationDelay: `${idx * 50}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards',
                }}
              >
                {/* Admin Mode Badge */}
                {adminMode && (
                  <div className="absolute top-3 right-3 bg-blue-400 text-blue-900 px-2 py-1 rounded text-xs font-bold flex items-center gap-1 z-10">
                    ✏️ Editable
                  </div>
                )}

                <div className="p-8">
                  {/* Icon with Mineral Drop Accent */}
                  <div className="mb-6 relative">
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-accent rounded-full" />
                    <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {treatment.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-foreground leading-relaxed">
                    {treatment.description}
                  </p>

                  {/* Decorative Line */}
                  <div className="w-8 h-0.5 bg-accent/30 mt-6" />
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
