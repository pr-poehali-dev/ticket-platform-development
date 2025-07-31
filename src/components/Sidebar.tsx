import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const menuItems = [
    { id: 'tickets', label: 'Тикеты', icon: 'Ticket' },
    { id: 'agents', label: 'Агенты', icon: 'Users' },
    { id: 'vk', label: 'ВКонтакте', icon: 'MessageSquare' },
    { id: 'api', label: 'API', icon: 'Code' },
    { id: 'analytics', label: 'Аналитика', icon: 'BarChart3' },
    { id: 'settings', label: 'Настройки', icon: 'Settings' }
  ];

  return (
    <div className="lg:col-span-1">
      <Card className="bg-tech-dark/50 border-tech-gray/20">
        <CardContent className="p-6">
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <Button 
                key={item.id}
                variant="ghost" 
                className={`w-full justify-start ${
                  activeSection === item.id 
                    ? 'text-tech-blue bg-tech-blue/10' 
                    : 'text-tech-gray hover:text-white'
                }`}
                onClick={() => onSectionChange(item.id)}
              >
                <Icon name={item.icon as any} size={18} className="mr-3" />
                {item.label}
              </Button>
            ))}
          </nav>
        </CardContent>
      </Card>
    </div>
  );
}