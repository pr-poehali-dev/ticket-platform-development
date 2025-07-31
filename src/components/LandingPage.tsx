import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import HeroSection from '@/components/landing/HeroSection';
import FeatureCards from '@/components/landing/FeatureCards';
import PlatformPreview from '@/components/landing/PlatformPreview';
import RegistrationForms from '@/components/landing/RegistrationForms';

interface LandingPageProps {
  onEnterPlatform: () => void;
  tickets: any[];
}

export default function LandingPage({ onEnterPlatform, tickets }: LandingPageProps) {
  const [formData, setFormData] = useState({
    orgName: '',
    email: '',
    phone: '',
    agentName: '',
    specialization: '',
    experience: '',
    orgCode: '',
    vkGroupId: '',
    vkAccessToken: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onEnterPlatform();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-tech-dark to-tech-dark/90 font-inter">
      {/* Header */}
      <header className="border-b border-tech-gray/20 bg-tech-dark/95 backdrop-blur">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-tech-blue rounded-lg flex items-center justify-center">
                <Icon name="Ticket" size={18} className="text-white" />
              </div>
              <span className="text-xl font-semibold text-white">SupportHub</span>
            </div>
            <Button 
              className="bg-tech-blue hover:bg-tech-blue/80"
              onClick={onEnterPlatform}
            >
              Войти в платформу
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection onScrollToRegistration={scrollToRegistration} />

      <div className="container mx-auto max-w-6xl px-6">
        {/* Feature Cards */}
        <FeatureCards />

        {/* Platform Preview */}
        <PlatformPreview tickets={tickets} />

        {/* Registration Forms */}
        <RegistrationForms
          onSubmit={handleSubmit}
          formData={formData}
          onInputChange={handleInputChange}
        />
      </div>

      {/* Footer */}
      <footer className="border-t border-tech-gray/20 bg-tech-dark/95 py-8 mt-20">
        <div className="container mx-auto px-6">
          <div className="text-center text-tech-gray">
            <p>&copy; 2025 SupportHub. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}