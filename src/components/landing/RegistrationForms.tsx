import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface RegistrationFormsProps {
  onSubmit: (e: React.FormEvent) => void;
  formData: {
    orgName: string;
    email: string;
    phone: string;
    agentName: string;
    specialization: string;
    experience: string;
    orgCode: string;
    vkGroupId: string;
    vkAccessToken: string;
  };
  onInputChange: (field: string, value: string) => void;
}

export default function RegistrationForms({ onSubmit, formData, onInputChange }: RegistrationFormsProps) {
  const [activeForm, setActiveForm] = useState('create-org');

  return (
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
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="orgName" className="text-white">Название организации</Label>
                      <Input 
                        id="orgName"
                        placeholder="ООО Ромашка"
                        value={formData.orgName}
                        onChange={(e) => onInputChange('orgName', e.target.value)}
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
                        onChange={(e) => onInputChange('email', e.target.value)}
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
                      onChange={(e) => onInputChange('phone', e.target.value)}
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
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="orgCode" className="text-white">Код приглашения организации</Label>
                    <Input 
                      id="orgCode"
                      placeholder="ABC123DEF"
                      value={formData.orgCode}
                      onChange={(e) => onInputChange('orgCode', e.target.value)}
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
                        onChange={(e) => onInputChange('agentName', e.target.value)}
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
                        onChange={(e) => onInputChange('email', e.target.value)}
                        className="bg-tech-dark/50 border-tech-gray/30 text-white placeholder:text-tech-gray"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="specialization" className="text-white">Специализация</Label>
                    <Select onValueChange={(value) => onInputChange('specialization', value)}>
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
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="vkGroupId" className="text-white">ID сообщества ВКонтакте</Label>
                    <Input 
                      id="vkGroupId"
                      placeholder="123456789"
                      value={formData.vkGroupId}
                      onChange={(e) => onInputChange('vkGroupId', e.target.value)}
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
                      onChange={(e) => onInputChange('vkAccessToken', e.target.value)}
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
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="agentName" className="text-white">Ваше имя</Label>
                      <Input 
                        id="agentName"
                        placeholder="Иван Петров"
                        value={formData.agentName}
                        onChange={(e) => onInputChange('agentName', e.target.value)}
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
                        onChange={(e) => onInputChange('email', e.target.value)}
                        className="bg-tech-dark/50 border-tech-gray/30 text-white placeholder:text-tech-gray"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="specialization" className="text-white">Основная специализация</Label>
                    <Select onValueChange={(value) => onInputChange('specialization', value)}>
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
                    <Select onValueChange={(value) => onInputChange('experience', value)}>
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
  );
}