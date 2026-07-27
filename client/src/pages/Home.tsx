import { useState } from 'react';
import { toast } from 'sonner';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TreatmentsSection from '@/components/TreatmentsSection';
import PricingSection from '@/components/PricingSection';
import LocationBanner from '@/components/LocationBanner';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import BookingModal from '@/components/BookingModal';
import Footer from '@/components/Footer';

/**
 * Khujirt Spa Resort - Premium Bilingual Booking Portal
 * 
 * Design Philosophy: Healing Sanctuary Minimalism
 * - Medical trust through clarity and precision
 * - Nature-integrated luxury with deep greens and earth tones
 * - Functional elegance with generous whitespace
 * - Bilingual accessibility (Mongolian/English parity)
 */
export default function Home() {
  const [language, setLanguage] = useState<'mn' | 'en'>('mn');
  const [adminMode, setAdminMode] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const handleAdminModeChange = (enabled: boolean) => {
    setAdminMode(enabled);
    if (enabled) {
      toast.success(
        language === 'mn'
          ? 'Agency Demo Mode: Идэвхтэй. Үнэ ба эмчилгээний мэдээллийг CMS-ээр кодолгүйгээр шинэчлэх боломжтой.'
          : 'Agency Demo Mode: Active. Notice how easily your staff can update rates and treatment details without touching code.'
      );
    }
  };

  const handleLanguageChange = (lang: 'mn' | 'en') => {
    setLanguage(lang);
  };

  const handleBookingClick = () => {
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header
        language={language}
        onLanguageChange={handleLanguageChange}
        adminMode={adminMode}
        onAdminModeChange={handleAdminModeChange}
      />

      {/* Hero Section */}
      <HeroSection language={language} onBooking={handleBookingClick} />

      {/* Treatments Section */}
      <TreatmentsSection language={language} adminMode={adminMode} />

      {/* Pricing Section */}
      <PricingSection language={language} adminMode={adminMode} />

      {/* Location Banner */}
      <LocationBanner language={language} />

      {/* About Section */}
      <AboutSection language={language} />

      {/* Contact Section */}
      <ContactSection language={language} />

      {/* Booking Modal */}
      <BookingModal
        open={bookingModalOpen}
        onOpenChange={setBookingModalOpen}
        language={language}
      />

      {/* Footer */}
      <Footer language={language} />
    </div>
  );
}
