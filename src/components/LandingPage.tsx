import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface LandingPageProps {
  onEnterPlatform: () => void;
  tickets: any[];
}

export default function LandingPage({ onEnterPlatform, tickets }: LandingPageProps) {
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
                onClick={onEnterPlatform}
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

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <Card className="bg-tech-dark/50 border-tech-gray/20 hover:border-tech-blue/30 transition-all duration-300 animate-slide-up">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-tech-blue/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="MessageSquare" size={24} className="text-tech-blue" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Интеграция ВКонтакте</h3>
                <p className="text-tech-gray leading-relaxed">
                  Автоматический прием и обработка обращений из сообществ ВКонтакте. 
                  Полная синхронизация диалогов и уведомлений.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-tech-dark/50 border-tech-gray/20 hover:border-tech-green/30 transition-all duration-300 animate-slide-up">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-tech-green/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Code" size={24} className="text-tech-green" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">REST API</h3>
                <p className="text-tech-gray leading-relaxed">
                  Мощный API для интеграции с внешними системами и ботами. 
                  Полный контроль над тикетами через программный интерфейс.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-tech-dark/50 border-tech-gray/20 hover:border-tech-red/30 transition-all duration-300 animate-slide-up">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-tech-red/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-tech-red" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Команда агентов</h3>
                <p className="text-tech-gray leading-relaxed">
                  Удобная система распределения тикетов между агентами. 
                  Отслеживание производительности и времени ответа.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Platform Preview */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Современный интерфейс управления
              </h2>
              <p className="text-tech-gray text-lg max-w-2xl mx-auto">
                Интуитивно понятная панель управления с real-time уведомлениями 
                и подробной аналитикой
              </p>
            </div>

            <Card className="bg-tech-dark/30 border-tech-gray/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-tech-dark/80 p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-tech-red"></div>
                    <div className="w-3 h-3 rounded-full bg-tech-blue"></div>
                    <div className="w-3 h-3 rounded-full bg-tech-green"></div>
                  </div>
                  
                  <Tabs defaultValue="tickets" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 bg-tech-dark/50 border border-tech-gray/20">
                      <TabsTrigger value="tickets" className="text-tech-gray data-[state=active]:text-white data-[state=active]:bg-tech-blue/20">
                        Тикеты
                      </TabsTrigger>
                      <TabsTrigger value="analytics" className="text-tech-gray data-[state=active]:text-white data-[state=active]:bg-tech-blue/20">
                        Аналитика
                      </TabsTrigger>
                      <TabsTrigger value="api" className="text-tech-gray data-[state=active]:text-white data-[state=active]:bg-tech-blue/20">
                        API
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="tickets" className="mt-6">
                      <div className="space-y-3">
                        {tickets.slice(0, 2).map((ticket) => (
                          <div key={ticket.id} className="p-4 rounded-lg bg-tech-dark/50 border border-tech-gray/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <span className="text-tech-blue font-medium">{ticket.id}</span>
                                <span className="text-white">{ticket.title}</span>
                              </div>
                              <Badge 
                                variant="outline"
                                className={
                                  ticket.status === 'open' ? 'border-tech-red/30 text-tech-red' :
                                  'border-tech-blue/30 text-tech-blue'
                                }
                              >
                                {ticket.status === 'open' ? 'Открыт' : 'В работе'}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="analytics" className="mt-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-lg bg-tech-dark/50 border border-tech-gray/10">
                          <div className="flex items-center justify-between">
                            <span className="text-tech-gray">Решено сегодня</span>
                            <span className="text-tech-green font-semibold">+23%</span>
                          </div>
                        </div>
                        <div className="p-4 rounded-lg bg-tech-dark/50 border border-tech-gray/10">
                          <div className="flex items-center justify-between">
                            <span className="text-tech-gray">Среднее время</span>
                            <span className="text-tech-blue font-semibold">2.4ч</span>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="api" className="mt-6">
                      <div className="p-4 rounded-lg bg-tech-dark/80 border border-tech-gray/10">
                        <code className="text-tech-green text-sm">
                          GET /api/v1/tickets<br/>
                          POST /api/v1/tickets<br/>
                          PUT /api/v1/tickets/:id
                        </code>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Registration Form */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Начните работу уже сегодня
            </h2>
            
            <Card className="max-w-md mx-auto bg-tech-dark/50 border-tech-gray/20">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <Input 
                    placeholder="Ваш email"
                    className="bg-tech-dark/50 border-tech-gray/30 text-white placeholder:text-tech-gray"
                  />
                  <Input 
                    placeholder="Название компании"
                    className="bg-tech-dark/50 border-tech-gray/30 text-white placeholder:text-tech-gray"
                  />
                  <Button 
                    className="w-full bg-tech-blue hover:bg-tech-blue/80"
                    onClick={onEnterPlatform}
                  >
                    Создать аккаунт
                  </Button>
                </div>
                <p className="text-tech-gray text-sm mt-4">
                  Бесплатно на 14 дней. Без привязки карты.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-tech-gray/20 bg-tech-dark/95 py-8">
        <div className="container mx-auto px-6">
          <div className="text-center text-tech-gray">
            <p>&copy; 2025 SupportHub. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}