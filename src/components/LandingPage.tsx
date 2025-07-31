import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface LandingPageProps {
  onEnterPlatform: () => void;
  tickets: any[];
}

export default function LandingPage({ onEnterPlatform, tickets }: LandingPageProps) {
  const [activeForm, setActiveForm] = useState('create-org');
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
                onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
            <Card className="bg-tech-dark/50 border-tech-gray/20 hover:border-tech-blue/30 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-tech-blue/20 rounded-lg flex items-center justify-center mb-3">
                  <Icon name="Building" size={20} className="text-tech-blue" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Личный кабинет</h3>
                <p className="text-tech-gray text-sm">
                  Создайте кабинет организации с полным управлением командой
                </p>
              </CardContent>
            </Card>

            <Card className="bg-tech-dark/50 border-tech-gray/20 hover:border-tech-green/30 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-tech-green/20 rounded-lg flex items-center justify-center mb-3">
                  <Icon name="UserPlus" size={20} className="text-tech-green" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Агенты</h3>
                <p className="text-tech-gray text-sm">
                  Присоединяйте специалистов и распределяйте тикеты
                </p>
              </CardContent>
            </Card>

            <Card className="bg-tech-dark/50 border-tech-gray/20 hover:border-tech-red/30 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-tech-red/20 rounded-lg flex items-center justify-center mb-3">
                  <Icon name="MessageSquare" size={20} className="text-tech-red" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">VK интеграция</h3>
                <p className="text-tech-gray text-sm">
                  Подключайте сообщества ВКонтакте автоматически
                </p>
              </CardContent>
            </Card>

            <Card className="bg-tech-dark/50 border-tech-gray/20 hover:border-purple-400/30 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-purple-400/20 rounded-lg flex items-center justify-center mb-3">
                  <Icon name="Code" size={20} className="text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">REST API</h3>
                <p className="text-tech-gray text-sm">
                  Интегрируйтесь с внешними системами и ботами
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

          {/* Registration Forms */}
          <div id="registration" className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Начните работу уже сегодня
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <Tabs value={activeForm} onValueChange={setActiveForm} className="w-full">
                <TabsList className="grid w-full grid-cols-4 bg-tech-dark/50 border border-tech-gray/20 mb-8">
                  <TabsTrigger value="create-org" className="text-tech-gray data-[state=active]:text-white data-[state=active]:bg-tech-blue/20">
                    <Icon name="Building" size={16} className="mr-2" />
                    Создать организацию
                  </TabsTrigger>
                  <TabsTrigger value="join-org" className="text-tech-gray data-[state=active]:text-white data-[state=active]:bg-tech-green/20">
                    <Icon name="UserPlus" size={16} className="mr-2" />
                    Присоединиться
                  </TabsTrigger>
                  <TabsTrigger value="add-vk" className="text-tech-gray data-[state=active]:text-white data-[state=active]:bg-tech-red/20">
                    <Icon name="MessageSquare" size={16} className="mr-2" />
                    Подключить VK
                  </TabsTrigger>
                  <TabsTrigger value="register-agent" className="text-tech-gray data-[state=active]:text-white data-[state=active]:bg-purple-400/20">
                    <Icon name="Shield" size={16} className="mr-2" />
                    Стать агентом
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="create-org">
                  <Card className="bg-tech-dark/50 border-tech-gray/20">
                    <CardHeader>
                      <CardTitle className="text-white text-center">Создание личного кабинета организации</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="orgName" className="text-white">Название организации</Label>
                            <Input 
                              id="orgName"
                              placeholder="ООО Ромашка"
                              value={formData.orgName}
                              onChange={(e) => handleInputChange('orgName', e.target.value)}
                              className="bg-tech-dark/50 border-tech-gray/30 text-white placeholder:text-tech-gray"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-white">Email администратора</Label>
                            <Input 
                              id="email"
                              type="email"
                              placeholder="admin@company.com"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              className="bg-tech-dark/50 border-tech-gray/30 text-white placeholder:text-tech-gray"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-white">Телефон (опционально)</Label>
                          <Input 
                            id="phone"
                            placeholder="+7 999 123-45-67"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="bg-tech-dark/50 border-tech-gray/30 text-white placeholder:text-tech-gray"
                          />
                        </div>
                        <Button 
                          type="submit"
                          className="w-full bg-tech-blue hover:bg-tech-blue/80"
                        >
                          <Icon name="Building" size={20} className="mr-2" />
                          Создать организацию
                        </Button>
                        <p className="text-tech-gray text-sm text-center">
                          Бесплатно на 14 дней. Без привязки карты.
                        </p>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="join-org">
                  <Card className="bg-tech-dark/50 border-tech-gray/20">
                    <CardHeader>
                      <CardTitle className="text-white text-center">Присоединение к организации</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="orgCode" className="text-white">Код приглашения организации</Label>
                          <Input 
                            id="orgCode"
                            placeholder="ABC123DEF"
                            value={formData.orgCode}
                            onChange={(e) => handleInputChange('orgCode', e.target.value)}
                            className="bg-tech-dark/50 border-tech-gray/30 text-white placeholder:text-tech-gray"
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="agentName" className="text-white">Ваше имя</Label>
                            <Input 
                              id="agentName"
                              placeholder="Анна Петрова"
                              value={formData.agentName}
                              onChange={(e) => handleInputChange('agentName', e.target.value)}
                              className="bg-tech-dark/50 border-tech-gray/30 text-white placeholder:text-tech-gray"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-white">Email</Label>
                            <Input 
                              id="email"
                              type="email"
                              placeholder="anna@company.com"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              className="bg-tech-dark/50 border-tech-gray/30 text-white placeholder:text-tech-gray"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="specialization" className="text-white">Специализация</Label>
                          <Select onValueChange={(value) => handleInputChange('specialization', value)}>
                            <SelectTrigger className="bg-tech-dark/50 border-tech-gray/30 text-white">
                              <SelectValue placeholder="Выберите специализацию" />
                            </SelectTrigger>
                            <SelectContent className="bg-tech-dark border-tech-gray/30">
                              <SelectItem value="technical">Техническая поддержка</SelectItem>
                              <SelectItem value="sales">Продажи и консультации</SelectItem>
                              <SelectItem value="customer-service">Клиентский сервис</SelectItem>
                              <SelectItem value="api-support">API поддержка</SelectItem>
                              <SelectItem value="billing">Биллинг и оплата</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <Button 
                          type="submit"
                          className="w-full bg-tech-green hover:bg-tech-green/80"
                        >
                          <Icon name="UserPlus" size={20} className="mr-2" />
                          Присоединиться к команде
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="add-vk">
                  <Card className="bg-tech-dark/50 border-tech-gray/20">
                    <CardHeader>
                      <CardTitle className="text-white text-center">Подключение VK сообщества</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="vkGroupId" className="text-white">ID сообщества ВКонтакте</Label>
                          <Input 
                            id="vkGroupId"
                            placeholder="123456789"
                            value={formData.vkGroupId}
                            onChange={(e) => handleInputChange('vkGroupId', e.target.value)}
                            className="bg-tech-dark/50 border-tech-gray/30 text-white placeholder:text-tech-gray"
                          />
                          <p className="text-tech-gray text-xs">
                            Найдите в настройках сообщества → Работа с API → Номер сообщества
                          </p>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="vkAccessToken" className="text-white">Токен доступа</Label>
                          <Textarea 
                            id="vkAccessToken"
                            placeholder="vk1.a.abcdef123456..."
                            value={formData.vkAccessToken}
                            onChange={(e) => handleInputChange('vkAccessToken', e.target.value)}
                            className="bg-tech-dark/50 border-tech-gray/30 text-white placeholder:text-tech-gray"
                            rows={3}
                          />
                          <p className="text-tech-gray text-xs">
                            Создайте токен в настройках сообщества → Работа с API → Ключи доступа
                          </p>
                        </div>
                        <div className="p-4 bg-tech-blue/10 border border-tech-blue/20 rounded-lg">
                          <h4 className="text-tech-blue font-medium mb-2">Необходимые права доступа:</h4>
                          <ul className="text-tech-gray text-sm space-y-1">
                            <li>• messages - для работы с сообщениями</li>
                            <li>• manage - для управления сообществом</li>
                            <li>• wall - для работы с записями</li>
                          </ul>
                        </div>
                        <Button 
                          type="submit"
                          className="w-full bg-tech-red hover:bg-tech-red/80"
                        >
                          <Icon name="MessageSquare" size={20} className="mr-2" />
                          Подключить сообщество
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="register-agent">
                  <Card className="bg-tech-dark/50 border-tech-gray/20">
                    <CardHeader>
                      <CardTitle className="text-white text-center">Регистрация как независимый агент</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="agentName" className="text-white">Ваше имя</Label>
                            <Input 
                              id="agentName"
                              placeholder="Иван Петров"
                              value={formData.agentName}
                              onChange={(e) => handleInputChange('agentName', e.target.value)}
                              className="bg-tech-dark/50 border-tech-gray/30 text-white placeholder:text-tech-gray"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-white">Email</Label>
                            <Input 
                              id="email"
                              type="email"
                              placeholder="ivan@email.com"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              className="bg-tech-dark/50 border-tech-gray/30 text-white placeholder:text-tech-gray"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="specialization" className="text-white">Основная специализация</Label>
                          <Select onValueChange={(value) => handleInputChange('specialization', value)}>
                            <SelectTrigger className="bg-tech-dark/50 border-tech-gray/30 text-white">
                              <SelectValue placeholder="Выберите специализацию" />
                            </SelectTrigger>
                            <SelectContent className="bg-tech-dark border-tech-gray/30">
                              <SelectItem value="technical">Техническая поддержка</SelectItem>
                              <SelectItem value="sales">Продажи и консультации</SelectItem>
                              <SelectItem value="customer-service">Клиентский сервис</SelectItem>
                              <SelectItem value="api-support">API и интеграции</SelectItem>
                              <SelectItem value="social-media">SMM и социальные сети</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="experience" className="text-white">Опыт работы</Label>
                          <Select onValueChange={(value) => handleInputChange('experience', value)}>
                            <SelectTrigger className="bg-tech-dark/50 border-tech-gray/30 text-white">
                              <SelectValue placeholder="Выберите опыт" />
                            </SelectTrigger>
                            <SelectContent className="bg-tech-dark border-tech-gray/30">
                              <SelectItem value="junior">До 1 года</SelectItem>
                              <SelectItem value="middle">1-3 года</SelectItem>
                              <SelectItem value="senior">3-5 лет</SelectItem>
                              <SelectItem value="expert">Более 5 лет</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="p-4 bg-purple-400/10 border border-purple-400/20 rounded-lg">
                          <h4 className="text-purple-400 font-medium mb-2">Преимущества агента:</h4>
                          <ul className="text-tech-gray text-sm space-y-1">
                            <li>• Гибкий график работы</li>
                            <li>• Работа с несколькими организациями</li>
                            <li>• Процент от решенных тикетов</li>
                            <li>• Собственная статистика и рейтинг</li>
                          </ul>
                        </div>
                        <Button 
                          type="submit"
                          className="w-full bg-purple-400 hover:bg-purple-400/80"
                        >
                          <Icon name="Shield" size={20} className="mr-2" />
                          Зарегистрироваться как агент
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
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