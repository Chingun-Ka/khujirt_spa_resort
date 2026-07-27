import { Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  language: 'mn' | 'en';
}

const translations = {
  mn: {
    about: 'Бидний тухай',
    aboutText: 'Хужирт Рашаан Сувилал нь 1939 оноос хойш Монголын эмчилгээний сувилалын тэргүүлэгч байгууллага юм. Байгалийн рашаан ба шаврын эмчилгээ нь олон өвчний эмчилгээнд үр дүнтэй байдаг.',
    contact: 'Холбоо барих',
    phone: '+976 1234 5678',
    email: 'info@khujirt.mn',
    address: 'Орхон хөндий, Сүнхлай уул, Архангай аймаг',
    followUs: 'Бидэнтэй холбоо барина уу',
    rights: 'Бүх эрх хуулиар хамгаалагдсан',
    year: new Date().getFullYear(),
  },
  en: {
    about: 'About Us',
    aboutText: 'Khujirt Spa Resort has been Mongolia\'s leading healing sanatorium since 1939. Natural mineral springs and mud therapy have proven effective for treating various conditions.',
    contact: 'Contact',
    phone: '+976 1234 5678',
    email: 'info@khujirt.mn',
    address: 'Orkhon Valley, Shunkhlai Mountains, Arkhangai Province',
    followUs: 'Follow Us',
    rights: 'All rights reserved',
    year: new Date().getFullYear(),
  },
};

export default function Footer({ language }: FooterProps) {
  const t = translations[language];

  return (
    <footer className="bg-primary text-white py-16">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t.about}</h3>
            <p className="text-white/80 text-sm leading-relaxed">{t.aboutText}</p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t.contact}</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href={`tel:${t.phone}`} className="text-white/80 hover:text-white transition-colors">
                  {t.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href={`mailto:${t.email}`} className="text-white/80 hover:text-white transition-colors">
                  {t.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <p className="text-white/80 text-sm">{t.address}</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t.followUs}</h3>
            <div className="space-y-2">
              <a href="#" className="block text-white/80 hover:text-white transition-colors text-sm">
                Facebook
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors text-sm">
                Instagram
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors text-sm">
                WeChat
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-white/60 text-sm">
            © {t.year} Khujirt Spa Resort. {t.rights}.
          </p>
        </div>
      </div>
    </footer>
  );
}
