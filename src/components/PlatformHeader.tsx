import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface PlatformHeaderProps {
  onBackToLanding: () => void;
}

export default function PlatformHeader({ onBackToLanding }: PlatformHeaderProps) {
  return (
    <header className="border-b border-tech-gray/20 bg-tech-dark/95 backdrop-blur">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-tech-blue rounded-lg flex items-center justify-center">
                <Icon name="Ticket" size={18} className="text-white" />
              </div>
              <span className="text-xl font-semibold text-white">SupportHub</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={onBackToLanding}
              className="text-tech-gray hover:text-white"
            >
              <Icon name="ArrowLeft" size={16} className="mr-2" />
              Назад к лендингу
            </Button>
            <div className="w-8 h-8 bg-tech-blue rounded-full flex items-center justify-center">
              <Icon name="User" size={16} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}