import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CreditCard, Smartphone, Building2, ChevronRight, ChevronLeft } from 'lucide-react';

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  language: 'mn' | 'en';
}

const translations = {
  mn: {
    title: 'Сувилал захиалах',
    step1: 'Өдөр сонгох',
    step2: 'Өрөө сонгох',
    step3: 'Мэдээлэл оруулах',
    step4: 'Төлбөрийн арга',
    checkInDate: 'Ирэх өдөр',
    checkOutDate: 'Гарах өдөр',
    roomType: 'Өрөөний төрөл',
    guests: 'Зочдын тоо',
    fullName: 'Нэр',
    email: 'Имэйл',
    phone: 'Утасны дугаар',
    medicalNotes: 'Эмнэлгийн анкета',
    paymentMethod: 'Төлбөрийн арга',
    qpay: 'QPay',
    socialpay: 'SocialPay',
    bankTransfer: 'Банкны шилжүүлэг',
    next: 'Дараах',
    previous: 'Өмнөх',
    confirm: 'Захиалал баталгаажуулах',
    cancel: 'Цуцлах',
  },
  en: {
    title: 'Book Your Healing Package',
    step1: 'Select Dates',
    step2: 'Choose Room',
    step3: 'Patient Details',
    step4: 'Payment Method',
    checkInDate: 'Check-in Date',
    checkOutDate: 'Check-out Date',
    roomType: 'Room Type',
    guests: 'Number of Guests',
    fullName: 'Full Name',
    email: 'Email',
    phone: 'Phone Number',
    medicalNotes: 'Medical Notes',
    paymentMethod: 'Payment Method',
    qpay: 'QPay',
    socialpay: 'SocialPay',
    bankTransfer: 'Bank Transfer',
    next: 'Next',
    previous: 'Previous',
    confirm: 'Confirm Booking',
    cancel: 'Cancel',
  },
};

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

const paymentMethods = [
  { id: 'qpay', label: 'QPay', icon: Smartphone },
  { id: 'socialpay', label: 'SocialPay', icon: Smartphone },
  { id: 'bank', label: 'Bank Transfer', icon: Building2 },
];

export default function BookingModal({
  open,
  onOpenChange,
  language,
}: BookingModalProps) {
  const t = translations[language];
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    checkInDate: '',
    checkOutDate: '',
    roomType: '',
    guests: '',
    fullName: '',
    email: '',
    phone: '',
    medicalNotes: '',
    paymentMethod: '',
  });

  const steps = [
    { number: 1, label: t.step1 },
    { number: 2, label: t.step2 },
    { number: 3, label: t.step3 },
    { number: 4, label: t.step4 },
  ];

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePaymentSelect = (method: string) => {
    handleInputChange('paymentMethod', method);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">
                {t.checkInDate}
              </label>
              <input
                type="date"
                value={formData.checkInDate}
                onChange={(e) => handleInputChange('checkInDate', e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">
                {t.checkOutDate}
              </label>
              <input
                type="date"
                value={formData.checkOutDate}
                onChange={(e) => handleInputChange('checkOutDate', e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">
                {t.roomType}
              </label>
              <Select value={formData.roomType} onValueChange={(value) => handleInputChange('roomType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select room..." />
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
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">
                {t.guests}
              </label>
              <input
                type="number"
                min="1"
                max="10"
                value={formData.guests}
                onChange={(e) => handleInputChange('guests', e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">
                {t.fullName}
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">
                {t.email}
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">
                {t.phone}
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">
                {t.medicalNotes}
              </label>
              <textarea
                value={formData.medicalNotes}
                onChange={(e) => handleInputChange('medicalNotes', e.target.value)}
                rows={3}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <label className="text-sm font-semibold text-foreground mb-4 block">
              {t.paymentMethod}
            </label>
            <div className="grid grid-cols-3 gap-3">
              {paymentMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <button
                    key={method.id}
                    onClick={() => handlePaymentSelect(method.id)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      formData.paymentMethod === method.id
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <Icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="text-sm font-medium text-foreground">
                      {language === 'mn'
                        ? method.id === 'qpay'
                          ? 'QPay'
                          : method.id === 'socialpay'
                          ? 'SocialPay'
                          : 'Банкны шилжүүлэг'
                        : method.label}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            {t.title}
          </DialogTitle>
        </DialogHeader>

        {/* Step Indicator */}
        <div className="flex justify-between mb-8">
          {steps.map((s) => (
            <div key={s.number} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                  s.number <= step
                    ? 'bg-primary text-white'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {s.number}
              </div>
              <span className="text-xs text-muted-foreground mt-2 text-center">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Form Content */}
        <div className="mb-8">{renderStepContent()}</div>

        {/* Navigation Buttons */}
        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={step === 1}
            className="flex-1"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            {t.previous}
          </Button>
          {step < 4 ? (
            <Button onClick={handleNext} className="flex-1 bg-primary hover:bg-primary/90">
              {t.next}
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button className="flex-1 bg-accent hover:bg-accent/90">
              <CreditCard className="w-4 h-4 mr-2" />
              {t.confirm}
            </Button>
          )}
        </div>

        <Button
          variant="ghost"
          onClick={() => onOpenChange(false)}
          className="w-full mt-2"
        >
          {t.cancel}
        </Button>
      </DialogContent>
    </Dialog>
  );
}
