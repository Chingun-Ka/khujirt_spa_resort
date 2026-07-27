import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Droplet, Download, Menu, X } from 'lucide-react';

interface HeaderProps {
  language: 'mn' | 'en';
  onLanguageChange: (lang: 'mn' | 'en') => void;
  adminMode: boolean;
  onAdminModeChange: (enabled: boolean) => void;
}

const translations = {
  mn: {
    home: 'Нүүр',
    treatments: 'Эмчилгээ',
    rooms: 'Өрөөний үнэ',
    about: 'Бидний тухай',
    contact: 'Холбоо барих',
    downloadPaper: 'Баримт татах',
    adminPreview: 'Admin CMS Preview',
  },
  en: {
    home: 'Home',
    treatments: 'Treatments',
    rooms: 'Rooms & Rates',
    about: 'About',
    contact: 'Contact',
    downloadPaper: 'Download Paper',
    adminPreview: 'Admin CMS Preview',
  },
};

export default function Header({
  language,
  onLanguageChange,
  adminMode,
  onAdminModeChange,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  const navLinks = [
    { label: t.home, href: '#home' },
    { label: t.treatments, href: '#treatments' },
    { label: t.rooms, href: '#rooms' },
    { label: t.about, href: '#about' },
    { label: t.contact, href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Droplet className="w-6 h-6 text-white" fill="white" />
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-bold text-primary leading-tight">
              ХУЖИРТ
            </div>
            <div className="text-xs text-muted-foreground">
              Рашаан Сувилал
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 flex-1 ml-12">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <div className="flex gap-1 bg-muted rounded-lg p-1">
            <button
              onClick={() => onLanguageChange('mn')}
              className={`px-3 py-1 text-sm font-medium rounded transition-all duration-200 ${
                language === 'mn'
                  ? 'bg-primary text-white'
                  : 'text-foreground hover:text-primary'
              }`}
            >
              МН
            </button>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-3 py-1 text-sm font-medium rounded transition-all duration-200 ${
                language === 'en'
                  ? 'bg-primary text-white'
                  : 'text-foreground hover:text-primary'
              }`}
            >
              EN
            </button>
          </div>

          {/* Download Button */}
          <Button
            variant="ghost"
            size="sm"
            className="hidden sm:flex gap-2 text-foreground hover:text-primary"
            title={t.downloadPaper}
          >
            <Download className="w-4 h-4" />
            <span className="hidden md:inline text-sm">{t.downloadPaper}</span>
          </Button>

          {/* Admin Mode Toggle */}
          <Button
            variant={adminMode ? 'default' : 'outline'}
            size="sm"
            onClick={() => onAdminModeChange(!adminMode)}
            className="hidden sm:flex text-xs"
          >
            {t.adminPreview}
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="container py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
