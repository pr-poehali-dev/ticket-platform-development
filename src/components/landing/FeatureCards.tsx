import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function FeatureCards() {
  const features = [
    {
      icon: 'Building',
      title: 'Личный кабинет',
      description: 'Создайте кабинет организации с полным управлением командой',
      color: 'tech-blue'
    },
    {
      icon: 'UserPlus',
      title: 'Агенты',
      description: 'Присоединяйте специалистов и распределяйте тикеты',
      color: 'tech-green'
    },
    {
      icon: 'MessageSquare',
      title: 'VK интеграция',
      description: 'Подключайте сообщества ВКонтакте автоматически',
      color: 'tech-red'
    },
    {
      icon: 'Code',
      title: 'REST API',
      description: 'Интегрируйтесь с внешними системами и ботами',
      color: 'purple-400'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
      {features.map((feature, index) => (
        <Card 
          key={index}
          className={`bg-tech-dark/50 border-tech-gray/20 hover:border-${feature.color}/30 transition-all duration-300`}
        >
          <CardContent className="p-6">
            <div className={`w-10 h-10 bg-${feature.color}/20 rounded-lg flex items-center justify-center mb-3`}>
              <Icon name={feature.icon as any} size={20} className={`text-${feature.color}`} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-tech-gray text-sm">
              {feature.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}