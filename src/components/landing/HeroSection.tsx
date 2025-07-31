import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onScrollToRegistration: () => void;
}

export default function HeroSection({ onScrollToRegistration }: HeroSectionProps) {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Тикет-система нового
            <span className="text-tech-blue"> поколения</span>
          </h1>
          <p className="text-xl text-tech-gray mb-8 max-w-3xl mx-auto leading-relaxed">
            Управляйте поддержкой пользователей с интеграцией ВКонтакте, 
            мощным REST API и современным интерфейсом для команды агентов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-tech-blue hover:bg-tech-blue/80 text-lg px-8 py-3"
              onClick={onScrollToRegistration}
            >
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать работу
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-tech-gray/30 text-white hover:bg-tech-gray/10 text-lg px-8 py-3"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Посмотреть демо
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}