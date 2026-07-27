import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

interface ContactSectionProps {
  language: 'mn' | 'en';
}

const translations = {
  mn: {
    title: 'Холбоо барих',
    subtitle: 'Асуулт, санал, хүсэлтээ бидэнд илгээнүү',
    name: 'Нэр',
    email: 'Имэйл',
    message: 'Мессеж',
    send: 'Илгээх',
    phone: '+976 1234 5678',
    emailAddress: 'info@khujirt.mn',
    address: 'Орхон хөндий, Сүнхлай уул, Архангай аймаг',
    hours: 'Ажлын цаг: Даваа-Баасан 09:00-18:00',
  },
  en: {
    title: 'Contact Us',
    subtitle: 'Have questions? Get in touch with our team',
    name: 'Your Name',
    email: 'Email Address',
    message: 'Message',
    send: 'Send Message',
    phone: '+976 1234 5678',
    emailAddress: 'info@khujirt.mn',
    address: 'Orkhon Valley, Shunkhlai Mountains, Arkhangai Province',
    hours: 'Hours: Mon-Fri 09:00-18:00',
  },
};

export default function ContactSection({ language }: ContactSectionProps) {
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      language === 'mn'
        ? 'Мессеж амжилттай илгээгдлээ!'
        : 'Message sent successfully!'
    );
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {language === 'mn' ? 'Утас' : 'Phone'}
                </h3>
                <a
                  href={`tel:${t.phone}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {language === 'mn' ? 'Имэйл' : 'Email'}
                </h3>
                <a
                  href={`mailto:${t.emailAddress}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.emailAddress}
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {language === 'mn' ? 'Байршил' : 'Address'}
                </h3>
                <p className="text-muted-foreground">{t.address}</p>
              </div>
            </div>

            {/* Hours */}
            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">{t.hours}</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    {t.name}
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full"
                    placeholder={t.name}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    {t.email}
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full"
                    placeholder={t.email}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  {t.message}
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder={t.message}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 h-auto rounded-lg transition-all duration-200 transform active:scale-95 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                {t.send}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
