import { Card } from '@/components/ui/card';
import { Award, Users, Zap, Globe } from 'lucide-react';

interface AboutSectionProps {
  language: 'mn' | 'en';
}

const translations = {
  mn: {
    title: 'Бидний тухай',
    subtitle: '85 жилийн уламжлалт эмчилгээ, орчин үеийн шинжлэх ухаан',
    description: 'Хужирт Рашаан Сувилал нь 1939 оноос хойш Монголын эмчилгээний сувилалын тэргүүлэгч байгууллага юм. Байгалийн рашаан ба шаврын эмчилгээ нь олон өвчний эмчилгээнд үр дүнтэй байдаг.',
    highlights: [
      {
        icon: 'award',
        title: '85 жилийн түүх',
        description: '1939 оноос хойш үргэлжилсэн сувилал',
      },
      {
        icon: 'users',
        title: '10,000+ эмнэлгээ',
        description: 'Жил бүрийн эмчилгээ авагч',
      },
      {
        icon: 'zap',
        title: '100% байгалийн',
        description: 'Химийн нэмэлтгүйгээр байгалийн эмчилгээ',
      },
      {
        icon: 'globe',
        title: 'Олон улсын стандарт',
        description: 'Эмнэлгийн шинжлэх ухааны аргууд',
      },
    ],
  },
  en: {
    title: 'About Us',
    subtitle: '85 years of healing tradition, modern science',
    description: 'Khujirt Spa Resort has been Mongolia\'s leading healing sanatorium since 1939. Natural mineral springs and mud therapy have proven effective for treating various conditions including arthritis, cardiovascular issues, and nervous system disorders.',
    highlights: [
      {
        icon: 'award',
        title: '85 Years of Heritage',
        description: 'Continuous healing since 1939',
      },
      {
        icon: 'users',
        title: '10,000+ Patients Yearly',
        description: 'Trusted by thousands annually',
      },
      {
        icon: 'zap',
        title: '100% Natural',
        description: 'Pure mineral therapy without chemicals',
      },
      {
        icon: 'globe',
        title: 'International Standards',
        description: 'Medical science-backed treatments',
      },
    ],
  },
};

const iconMap = {
  award: Award,
  users: Users,
  zap: Zap,
  globe: Globe,
};

export default function AboutSection({ language }: AboutSectionProps) {
  const t = translations[language];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mt-6" />
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-foreground leading-relaxed text-center">
            {t.description}
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.highlights.map((highlight, idx) => {
            const Icon = iconMap[highlight.icon as keyof typeof iconMap];
            return (
              <Card
                key={idx}
                className="p-6 hover:shadow-lg transition-all duration-300 text-center"
                style={{
                  animationDelay: `${idx * 50}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards',
                }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
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
