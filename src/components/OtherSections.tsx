import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface OtherSectionsProps {
  activeSection: string;
  agents: any[];
}

export default function OtherSections({ activeSection, agents }: OtherSectionsProps) {
  if (activeSection === 'agents') {
    return (
      <Card className="bg-tech-dark/50 border-tech-gray/20">
        <CardHeader>
          <CardTitle className="text-white">Управление агентами</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {agents.map((agent) => (
              <div key={agent.id} className="p-4 rounded-lg bg-tech-dark/30 border border-tech-gray/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">{agent.avatar}</div>
                    <div>
                      <h3 className="text-white font-medium">{agent.name}</h3>
                      <p className="text-tech-gray text-sm">{agent.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Badge 
                      className={
                        agent.status === 'online' ? 'bg-tech-green/20 text-tech-green border-tech-green/30' :
                        agent.status === 'busy' ? 'bg-tech-blue/20 text-tech-blue border-tech-blue/30' :
                        'bg-tech-gray/20 text-tech-gray border-tech-gray/30'
                      }
                    >
                      {agent.status === 'online' ? 'Онлайн' :
                       agent.status === 'busy' ? 'Занят' : 'Офлайн'}
                    </Badge>
                    <span className="text-tech-gray text-sm">{agent.tickets} тикетов</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (activeSection === 'vk') {
    return (
      <Card className="bg-tech-dark/50 border-tech-gray/20">
        <CardHeader>
          <CardTitle className="text-white">Интеграция ВКонтакте</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="p-4 rounded-lg bg-tech-blue/10 border border-tech-blue/30">
              <div className="flex items-center space-x-3 mb-3">
                <Icon name="CheckCircle" size={20} className="text-tech-green" />
                <span className="text-white font-medium">Подключение активно</span>
              </div>
              <p className="text-tech-gray text-sm">
                Группа "Техподдержка" подключена и работает в автоматическом режиме.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-tech-dark/30 border border-tech-gray/10">
                <h4 className="text-white font-medium mb-2">Статистика за сегодня</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-tech-gray">Новых сообщений:</span>
                    <span className="text-white">28</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-tech-gray">Обработано:</span>
                    <span className="text-white">24</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-tech-gray">В очереди:</span>
                    <span className="text-white">4</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 rounded-lg bg-tech-dark/30 border border-tech-gray/10">
                <h4 className="text-white font-medium mb-2">Настройки webhook</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-tech-gray">URL:</span>
                    <span className="text-tech-blue text-sm">webhook.example.com</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-tech-gray">Версия API:</span>
                    <span className="text-white">5.131</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-tech-gray">Статус:</span>
                    <Badge className="bg-tech-green/20 text-tech-green border-tech-green/30">Активен</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (activeSection === 'api') {
    return (
      <Card className="bg-tech-dark/50 border-tech-gray/20">
        <CardHeader>
          <CardTitle className="text-white">REST API</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="p-4 rounded-lg bg-tech-dark/80 border border-tech-gray/10">
              <h4 className="text-white font-medium mb-3">Основные эндпоинты</h4>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex items-center space-x-3">
                  <Badge className="bg-tech-green/20 text-tech-green border-tech-green/30">GET</Badge>
                  <code className="text-tech-green">/api/v1/tickets</code>
                  <span className="text-tech-gray">Получить список тикетов</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className="bg-tech-blue/20 text-tech-blue border-tech-blue/30">POST</Badge>
                  <code className="text-tech-blue">/api/v1/tickets</code>
                  <span className="text-tech-gray">Создать новый тикет</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className="bg-tech-blue/20 text-tech-blue border-tech-blue/30">PUT</Badge>
                  <code className="text-tech-blue">/api/v1/tickets/:id</code>
                  <span className="text-tech-gray">Обновить тикет</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className="bg-tech-red/20 text-tech-red border-tech-red/30">DELETE</Badge>
                  <code className="text-tech-red">/api/v1/tickets/:id</code>
                  <span className="text-tech-gray">Удалить тикет</span>
                </div>
              </div>
            </div>
            
            <div className="p-4 rounded-lg bg-tech-dark/30 border border-tech-gray/10">
              <h4 className="text-white font-medium mb-3">API ключ</h4>
              <div className="flex items-center space-x-3">
                <Input 
                  value="sk_test_4eC39HqLyjWDarjtT1zdp7dc" 
                  readOnly 
                  className="bg-tech-dark/50 border-tech-gray/30 text-white font-mono"
                />
                <button className="px-3 py-2 bg-tech-blue hover:bg-tech-blue/80 rounded-md">
                  <Icon name="Copy" size={16} className="text-white" />
                </button>
              </div>
              <p className="text-tech-gray text-sm mt-2">
                Используйте этот ключ в заголовке Authorization: Bearer YOUR_API_KEY
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (activeSection === 'analytics') {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-tech-dark/50 border-tech-gray/20">
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-tech-gray text-sm">Среднее время ответа</p>
                <p className="text-3xl font-bold text-tech-blue">2.4ч</p>
                <p className="text-tech-green text-sm">↓ 15% от вчера</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-tech-dark/50 border-tech-gray/20">
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-tech-gray text-sm">Удовлетворенность</p>
                <p className="text-3xl font-bold text-tech-green">94%</p>
                <p className="text-tech-green text-sm">↑ 3% от вчера</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-tech-dark/50 border-tech-gray/20">
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-tech-gray text-sm">Решено за день</p>
                <p className="text-3xl font-bold text-white">47</p>
                <p className="text-tech-green text-sm">↑ 12% от вчера</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="bg-tech-dark/50 border-tech-gray/20">
          <CardHeader>
            <CardTitle className="text-white">Статистика по агентам</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {agents.map((agent) => (
                <div key={agent.id} className="p-4 rounded-lg bg-tech-dark/30 border border-tech-gray/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">{agent.avatar}</span>
                      <span className="text-white">{agent.name}</span>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <p className="text-tech-gray text-xs">Тикетов</p>
                        <p className="text-white font-semibold">{agent.tickets}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-tech-gray text-xs">Ср. время</p>
                        <p className="text-white font-semibold">
                          {agent.id === 1 ? '1.8ч' : agent.id === 2 ? '3.2ч' : '2.1ч'}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-tech-gray text-xs">Рейтинг</p>
                        <p className="text-tech-green font-semibold">
                          {agent.id === 1 ? '4.9' : agent.id === 2 ? '4.7' : '4.8'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (activeSection === 'settings') {
    return (
      <Card className="bg-tech-dark/50 border-tech-gray/20">
        <CardHeader>
          <CardTitle className="text-white">Настройки системы</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="p-4 rounded-lg bg-tech-dark/30 border border-tech-gray/10">
              <h4 className="text-white font-medium mb-3">Уведомления</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-tech-gray">Email уведомления</span>
                  <div className="w-12 h-6 bg-tech-blue rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-tech-gray">Push уведомления</span>
                  <div className="w-12 h-6 bg-tech-gray/30 rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 rounded-lg bg-tech-dark/30 border border-tech-gray/10">
              <h4 className="text-white font-medium mb-3">Автоматизация</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-tech-gray">Автоназначение агентов</span>
                  <div className="w-12 h-6 bg-tech-blue rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-tech-gray">Автоответы</span>
                  <div className="w-12 h-6 bg-tech-blue rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return null;
}