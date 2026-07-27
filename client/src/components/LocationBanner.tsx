import { MapPin, Bus, Info } from 'lucide-react';

interface LocationBannerProps {
  language: 'mn' | 'en';
}

const translations = {
  mn: {
    title: 'Байршил ба Тээвэр',
    roadInfo: 'Улаанбаатараас 390 км хатуу хучилттай засмал зам',
    shuttleTitle: 'Тусгай автобусны үйлчилгээ',
    shuttleInfo: 'Улаанбаатар хотоос 7 хоногт 3 удаа (Даваа, Лхагва, Баасан гарагуудад өглөөний 07:00 цагт)',
    altitude: 'Өндөр: 1,660 м',
    valley: 'Орхон хөндий, Сүнхлай уул',
  },
  en: {
    title: 'Location & Transportation',
    roadInfo: '390 km from Ulaanbaatar via fully paved road',
    shuttleTitle: 'Shuttle Bus Service',
    shuttleInfo: 'Runs Mon/Wed/Fri at 7:00 AM from Ulaanbaatar',
    altitude: 'Altitude: 1,660 m',
    valley: 'Orkhon Valley, Shunkhlai Mountains',
  },
};

export default function LocationBanner({ language }: LocationBannerProps) {
  const t = translations[language];

  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5 border-t border-b border-border">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Road Information */}
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {t.title}
              </h3>
              <p className="text-sm text-muted-foreground">{t.roadInfo}</p>
              <p className="text-xs text-muted-foreground mt-2">{t.valley}</p>
            </div>
          </div>

          {/* Shuttle Bus Information */}
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                <Bus className="h-6 w-6 text-accent" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {t.shuttleTitle}
              </h3>
              <p className="text-sm text-muted-foreground">{t.shuttleInfo}</p>
            </div>
          </div>

          {/* Altitude Information */}
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                <Info className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {t.altitude}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === 'mn'
                  ? 'Цэвэр уур амьсгал, ялгарсан агаар'
                  : 'Clean air, fresh mountain atmosphere'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
