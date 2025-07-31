import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeView, setActiveView] = useState('landing');
  const [activeSection, setActiveSection] = useState('tickets');
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [newTicketOpen, setNewTicketOpen] = useState(false);
  const [ticketDetailOpen, setTicketDetailOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [newMessage, setNewMessage] = useState('');
  
  const [agents, setAgents] = useState([
    { id: 1, name: 'Анна Петрова', email: 'anna@company.com', status: 'online', tickets: 8, avatar: '👩‍💼' },
    { id: 2, name: 'Иван Сидоров', email: 'ivan@company.com', status: 'busy', tickets: 12, avatar: '👨‍💼' },
    { id: 3, name: 'Мария Козлова', email: 'maria@company.com', status: 'offline', tickets: 5, avatar: '👩‍🔬' }
  ]);
  
  const [tickets, setTickets] = useState([
    {
      id: '#001',
      title: 'Проблема с интеграцией VK API',
      description: 'При попытке подключения к VK API возникает ошибка 403. Нужна помощь с настройкой токенов доступа.',
      status: 'open',
      priority: 'high',
      agent: 'Анна Петрова',
      agentId: 1,
      customer: 'Алексей Иванов',
      created: '2025-01-31 14:30',
      updated: '2025-01-31 15:45',
      messages: [
        { id: 1, author: 'Алексей Иванов', content: 'При попытке подключения к VK API возникает ошибка 403. Нужна помощь с настройкой токенов доступа.', time: '14:30', type: 'customer' },
        { id: 2, author: 'Анна Петрова', content: 'Здравствуйте! Проверьте, правильно ли указаны права доступа в настройках приложения ВКонтакте.', time: '14:45', type: 'agent' },
        { id: 3, author: 'Алексей Иванов', content: 'Проверил, права доступа выглядят корректно. Может быть проблема в другом?', time: '15:20', type: 'customer' }
      ]
    },
    {
      id: '#002', 
      title: 'Настройка webhook для сообщений',
      description: 'Необходимо настроить webhook для автоматической обработки входящих сообщений из групп ВКонтакте.',
      status: 'in-progress',
      priority: 'medium',
      agent: 'Иван Сидоров',
      agentId: 2,
      customer: 'Мария Смирнова',
      created: '2025-01-31 12:15',
      updated: '2025-01-31 16:20',
      messages: [
        { id: 1, author: 'Мария Смирнова', content: 'Необходимо настроить webhook для автоматической обработки входящих сообщений из групп ВКонтакте.', time: '12:15', type: 'customer' },
        { id: 2, author: 'Иван Сидоров', content: 'Начинаю работу над настройкой webhook. Отправлю инструкцию в течение часа.', time: '12:30', type: 'agent' }
      ]
    },
    {
      id: '#003',
      title: 'Обновление документации API',
      description: 'Документация API устарела, нужно обновить примеры кода и добавить новые эндпоинты.',
      status: 'resolved',
      priority: 'low',
      agent: 'Мария Козлова',
      agentId: 3,
      customer: 'Дмитрий Петров',
      created: '2025-01-30 16:45',
      updated: '2025-01-31 10:30',
      messages: [
        { id: 1, author: 'Дмитрий Петров', content: 'Документация API устарела, нужно обновить примеры кода и добавить новые эндпоинты.', time: '16:45', type: 'customer' },
        { id: 2, author: 'Мария Козлова', content: 'Спасибо за обращение! Обновлю документацию в ближайшее время.', time: '17:00', type: 'agent' },
        { id: 3, author: 'Мария Козлова', content: 'Документация обновлена. Добавлены новые эндпоинты и исправлены примеры кода.', time: '10:30', type: 'agent' }
      ]
    },
    {
      id: '#004',
      title: 'Ошибка при отправке уведомлений',
      description: 'Уведомления не доходят до пользователей через email. Проверьте настройки SMTP.',
      status: 'open',
      priority: 'high',
      agent: 'Анна Петрова',
      agentId: 1,
      customer: 'Елена Волкова',
      created: '2025-01-31 16:00',
      updated: '2025-01-31 16:00',
      messages: [
        { id: 1, author: 'Елена Волкова', content: 'Уведомления не доходят до пользователей через email. Проверьте настройки SMTP.', time: '16:00', type: 'customer' }
      ]
    },
    {
      id: '#005',
      title: 'Интеграция с Telegram Bot API',
      description: 'Нужна помощь с настройкой интеграции с Telegram Bot API для автоматических ответов.',
      status: 'in-progress',
      priority: 'medium',
      agent: 'Иван Сидоров',
      agentId: 2,
      customer: 'Андрей Козлов',
      created: '2025-01-31 11:30',
      updated: '2025-01-31 14:15',
      messages: [
        { id: 1, author: 'Андрей Козлов', content: 'Нужна помощь с настройкой интеграции с Telegram Bot API для автоматических ответов.', time: '11:30', type: 'customer' },
        { id: 2, author: 'Иван Сидоров', content: 'Изучаю вашу задачу. Telegram Bot API имеет несколько нюансов при настройке webhook.', time: '14:15', type: 'agent' }
      ]
    }
  ]);

  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         ticket.customer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || ticket.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || ticket.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const openTicketDetails = (ticket) => {
    setSelectedTicket(ticket);
    setTicketDetailOpen(true);
  };

  const createNewTicket = (formData) => {
    const newTicket = {
      id: `#${String(tickets.length + 1).padStart(3, '0')}`,
      title: formData.title,
      description: formData.description,
      status: 'open',
      priority: formData.priority,
      agent: formData.agent,
      agentId: parseInt(formData.agentId),
      customer: formData.customer,
      created: new Date().toLocaleString('ru-RU'),
      updated: new Date().toLocaleString('ru-RU'),
      messages: [
        { id: 1, author: formData.customer, content: formData.description, time: new Date().toLocaleTimeString('ru-RU', {hour: '2-digit', minute:'2-digit'}), type: 'customer' }
      ]
    };
    
    setTickets([...tickets, newTicket]);
    setNewTicketOpen(false);
  };

  const sendMessage = () => {
    if (!newMessage.trim() || !selectedTicket) return;
    
    const message = {
      id: selectedTicket.messages.length + 1,
      author: 'Анна Петрова',  // Current agent
      content: newMessage,
      time: new Date().toLocaleTimeString('ru-RU', {hour: '2-digit', minute:'2-digit'}),
      type: 'agent'
    };

    const updatedTicket = {
      ...selectedTicket,
      messages: [...selectedTicket.messages, message],
      updated: new Date().toLocaleString('ru-RU')
    };

    setTickets(tickets.map(t => t.id === selectedTicket.id ? updatedTicket : t));
    setSelectedTicket(updatedTicket);
    setNewMessage('');
  };

  if (activeView === 'platform') {
    return (
      <div className="min-h-screen bg-tech-dark font-inter">
        {/* Header */}
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
                  onClick={() => setActiveView('landing')}
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

        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="bg-tech-dark/50 border-tech-gray/20">
                <CardContent className="p-6">
                  <nav className="space-y-2">
                    <Button 
                      variant="ghost" 
                      className={`w-full justify-start ${activeSection === 'tickets' ? 'text-tech-blue bg-tech-blue/10' : 'text-tech-gray hover:text-white'}`}
                      onClick={() => setActiveSection('tickets')}
                    >
                      <Icon name="Ticket" size={18} className="mr-3" />
                      Тикеты
                    </Button>
                    <Button 
                      variant="ghost" 
                      className={`w-full justify-start ${activeSection === 'agents' ? 'text-tech-blue bg-tech-blue/10' : 'text-tech-gray hover:text-white'}`}
                      onClick={() => setActiveSection('agents')}
                    >
                      <Icon name="Users" size={18} className="mr-3" />
                      Агенты
                    </Button>
                    <Button 
                      variant="ghost" 
                      className={`w-full justify-start ${activeSection === 'vk' ? 'text-tech-blue bg-tech-blue/10' : 'text-tech-gray hover:text-white'}`}
                      onClick={() => setActiveSection('vk')}
                    >
                      <Icon name="MessageSquare" size={18} className="mr-3" />
                      ВКонтакте
                    </Button>
                    <Button 
                      variant="ghost" 
                      className={`w-full justify-start ${activeSection === 'api' ? 'text-tech-blue bg-tech-blue/10' : 'text-tech-gray hover:text-white'}`}
                      onClick={() => setActiveSection('api')}
                    >
                      <Icon name="Code" size={18} className="mr-3" />
                      API
                    </Button>
                    <Button 
                      variant="ghost" 
                      className={`w-full justify-start ${activeSection === 'analytics' ? 'text-tech-blue bg-tech-blue/10' : 'text-tech-gray hover:text-white'}`}
                      onClick={() => setActiveSection('analytics')}
                    >
                      <Icon name="BarChart3" size={18} className="mr-3" />
                      Аналитика
                    </Button>
                    <Button 
                      variant="ghost" 
                      className={`w-full justify-start ${activeSection === 'settings' ? 'text-tech-blue bg-tech-blue/10' : 'text-tech-gray hover:text-white'}`}
                      onClick={() => setActiveSection('settings')}
                    >
                      <Icon name="Settings" size={18} className="mr-3" />
                      Настройки
                    </Button>
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {activeSection === 'tickets' && (
                <>
                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <Card className="bg-tech-dark/50 border-tech-gray/20">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-tech-gray text-sm">Открытые тикеты</p>
                            <p className="text-2xl font-semibold text-white">{tickets.filter(t => t.status === 'open').length}</p>
                          </div>
                          <div className="w-10 h-10 bg-tech-red/20 rounded-lg flex items-center justify-center">
                            <Icon name="AlertCircle" size={20} className="text-tech-red" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-tech-dark/50 border-tech-gray/20">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-tech-gray text-sm">В работе</p>
                            <p className="text-2xl font-semibold text-white">{tickets.filter(t => t.status === 'in-progress').length}</p>
                          </div>
                          <div className="w-10 h-10 bg-tech-blue/20 rounded-lg flex items-center justify-center">
                            <Icon name="Clock" size={20} className="text-tech-blue" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-tech-dark/50 border-tech-gray/20">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-tech-gray text-sm">Решено</p>
                            <p className="text-2xl font-semibold text-white">{tickets.filter(t => t.status === 'resolved').length}</p>
                          </div>
                          <div className="w-10 h-10 bg-tech-green/20 rounded-lg flex items-center justify-center">
                            <Icon name="CheckCircle" size={20} className="text-tech-green" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-tech-dark/50 border-tech-gray/20">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-tech-gray text-sm">Всего тикетов</p>
                            <p className="text-2xl font-semibold text-white">{tickets.length}</p>
                          </div>
                          <div className="w-10 h-10 bg-tech-blue/20 rounded-lg flex items-center justify-center">
                            <Icon name="Timer" size={20} className="text-tech-blue" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Filters and Search */}
                  <Card className="bg-tech-dark/50 border-tech-gray/20 mb-6">
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                          <Input
                            placeholder="Поиск по названию или клиенту..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-tech-dark/50 border-tech-gray/30 text-white placeholder:text-tech-gray"
                          />
                        </div>
                        <Select value={statusFilter} onValueChange={setStatusFilter}>
                          <SelectTrigger className="w-48 bg-tech-dark/50 border-tech-gray/30 text-white">
                            <SelectValue placeholder="Статус" />
                          </SelectTrigger>
                          <SelectContent className="bg-tech-dark border-tech-gray/30">
                            <SelectItem value="all">Все статусы</SelectItem>
                            <SelectItem value="open">Открытые</SelectItem>
                            <SelectItem value="in-progress">В работе</SelectItem>
                            <SelectItem value="resolved">Решенные</SelectItem>
                          </SelectContent>
                        </Select>
                        <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                          <SelectTrigger className="w-48 bg-tech-dark/50 border-tech-gray/30 text-white">
                            <SelectValue placeholder="Приоритет" />
                          </SelectTrigger>
                          <SelectContent className="bg-tech-dark border-tech-gray/30">
                            <SelectItem value="all">Все приоритеты</SelectItem>
                            <SelectItem value="high">Высокий</SelectItem>
                            <SelectItem value="medium">Средний</SelectItem>
                            <SelectItem value="low">Низкий</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Tickets Table */}
                  <Card className="bg-tech-dark/50 border-tech-gray/20">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-white">Тикеты поддержки ({filteredTickets.length})</CardTitle>
                        <Dialog open={newTicketOpen} onOpenChange={setNewTicketOpen}>
                          <DialogTrigger asChild>
                            <Button className="bg-tech-blue hover:bg-tech-blue/80">
                              <Icon name="Plus" size={16} className="mr-2" />
                              Новый тикет
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="bg-tech-dark border-tech-gray/30 text-white max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>Создать новый тикет</DialogTitle>
                            </DialogHeader>
                            <form onSubmit={(e) => {
                              e.preventDefault();
                              const formData = new FormData(e.target);
                              createNewTicket({
                                title: formData.get('title'),
                                description: formData.get('description'),
                                priority: formData.get('priority'),
                                customer: formData.get('customer'),
                                agent: agents.find(a => a.id === parseInt(formData.get('agent')))?.name,
                                agentId: formData.get('agent')
                              });
                            }}>
                              <div className="space-y-4">
                                <div>
                                  <Label htmlFor="customer">Клиент</Label>
                                  <Input name="customer" required className="bg-tech-dark/50 border-tech-gray/30 text-white" />
                                </div>
                                <div>
                                  <Label htmlFor="title">Заголовок</Label>
                                  <Input name="title" required className="bg-tech-dark/50 border-tech-gray/30 text-white" />
                                </div>
                                <div>
                                  <Label htmlFor="description">Описание</Label>
                                  <Textarea name="description" required className="bg-tech-dark/50 border-tech-gray/30 text-white" rows={4} />
                                </div>
                                <div>
                                  <Label htmlFor="priority">Приоритет</Label>
                                  <Select name="priority" required>
                                    <SelectTrigger className="bg-tech-dark/50 border-tech-gray/30 text-white">
                                      <SelectValue placeholder="Выберите приоритет" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-tech-dark border-tech-gray/30">
                                      <SelectItem value="low">Низкий</SelectItem>
                                      <SelectItem value="medium">Средний</SelectItem>
                                      <SelectItem value="high">Высокий</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                                <div>
                                  <Label htmlFor="agent">Назначить агента</Label>
                                  <Select name="agent" required>
                                    <SelectTrigger className="bg-tech-dark/50 border-tech-gray/30 text-white">
                                      <SelectValue placeholder="Выберите агента" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-tech-dark border-tech-gray/30">
                                      {agents.map(agent => (
                                        <SelectItem key={agent.id} value={agent.id.toString()}>
                                          {agent.name}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                </div>
                                <div className="flex gap-2 pt-4">
                                  <Button type="submit" className="bg-tech-blue hover:bg-tech-blue/80">
                                    Создать тикет
                                  </Button>
                                  <Button type="button" variant="outline" onClick={() => setNewTicketOpen(false)}>
                                    Отмена
                                  </Button>
                                </div>
                              </div>
                            </form>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {filteredTickets.map((ticket) => (
                          <div 
                            key={ticket.id}
                            className="p-4 rounded-lg bg-tech-dark/30 border border-tech-gray/10 hover:border-tech-gray/30 transition-all cursor-pointer"
                            onClick={() => openTicketDetails(ticket)}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center space-x-3">
                                <span className="text-tech-blue font-medium">{ticket.id}</span>
                                <h3 className="text-white font-medium">{ticket.title}</h3>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Badge 
                                  variant={ticket.status === 'open' ? 'destructive' : 
                                         ticket.status === 'in-progress' ? 'default' : 'secondary'}
                                  className={
                                    ticket.status === 'open' ? 'bg-tech-red/20 text-tech-red border-tech-red/30' :
                                    ticket.status === 'in-progress' ? 'bg-tech-blue/20 text-tech-blue border-tech-blue/30' :
                                    'bg-tech-green/20 text-tech-green border-tech-green/30'
                                  }
                                >
                                  {ticket.status === 'open' ? 'Открыт' :
                                   ticket.status === 'in-progress' ? 'В работе' : 'Решен'}
                                </Badge>
                                <Badge 
                                  variant="outline"
                                  className={
                                    ticket.priority === 'high' ? 'border-tech-red/30 text-tech-red' :
                                    ticket.priority === 'medium' ? 'border-tech-blue/30 text-tech-blue' :
                                    'border-tech-gray/30 text-tech-gray'
                                  }
                                >
                                  {ticket.priority === 'high' ? 'Высокий' :
                                   ticket.priority === 'medium' ? 'Средний' : 'Низкий'}
                                </Badge>
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-sm text-tech-gray">
                              <span>Клиент: {ticket.customer}</span>
                              <div className="flex items-center space-x-4">
                                <span>Агент: {ticket.agent}</span>
                                <div className="flex items-center space-x-1">
                                  <Icon name="MessageCircle" size={14} />
                                  <span>{ticket.messages.length}</span>
                                </div>
                                <span>{ticket.created}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}

              {activeSection === 'agents' && (
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
              )}

              {activeSection === 'vk' && (
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
              )}

              {activeSection === 'api' && (
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
                          <Button size="sm" className="bg-tech-blue hover:bg-tech-blue/80">
                            <Icon name="Copy" size={16} />
                          </Button>
                        </div>
                        <p className="text-tech-gray text-sm mt-2">
                          Используйте этот ключ в заголовке Authorization: Bearer YOUR_API_KEY
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {activeSection === 'analytics' && (
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
              )}

              {activeSection === 'settings' && (
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
              )}
            </div>
          </div>
        </div>

        {/* Ticket Detail Dialog */}
        <Dialog open={ticketDetailOpen} onOpenChange={setTicketDetailOpen}>
          <DialogContent className="bg-tech-dark border-tech-gray/30 text-white max-w-4xl max-h-[80vh]">
            {selectedTicket && (
              <>
                <DialogHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <DialogTitle className="text-xl">{selectedTicket.id} - {selectedTicket.title}</DialogTitle>
                      <p className="text-tech-gray text-sm mt-1">Клиент: {selectedTicket.customer}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge 
                        className={
                          selectedTicket.status === 'open' ? 'bg-tech-red/20 text-tech-red border-tech-red/30' :
                          selectedTicket.status === 'in-progress' ? 'bg-tech-blue/20 text-tech-blue border-tech-blue/30' :
                          'bg-tech-green/20 text-tech-green border-tech-green/30'
                        }
                      >
                        {selectedTicket.status === 'open' ? 'Открыт' :
                         selectedTicket.status === 'in-progress' ? 'В работе' : 'Решен'}
                      </Badge>
                      <Badge 
                        className={
                          selectedTicket.priority === 'high' ? 'border-tech-red/30 text-tech-red bg-tech-red/10' :
                          selectedTicket.priority === 'medium' ? 'border-tech-blue/30 text-tech-blue bg-tech-blue/10' :
                          'border-tech-gray/30 text-tech-gray bg-tech-gray/10'
                        }
                      >
                        {selectedTicket.priority === 'high' ? 'Высокий приоритет' :
                         selectedTicket.priority === 'medium' ? 'Средний приоритет' : 'Низкий приоритет'}
                      </Badge>
                    </div>
                  </div>
                </DialogHeader>
                
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-2">
                    <ScrollArea className="h-96 pr-4">
                      <div className="space-y-4">
                        {selectedTicket.messages.map((message) => (
                          <div 
                            key={message.id} 
                            className={`p-3 rounded-lg ${
                              message.type === 'agent' 
                                ? 'bg-tech-blue/20 border-l-4 border-tech-blue ml-8' 
                                : 'bg-tech-gray/10 border-l-4 border-tech-gray mr-8'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium text-white">{message.author}</span>
                              <span className="text-tech-gray text-sm">{message.time}</span>
                            </div>
                            <p className="text-tech-gray">{message.content}</p>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                    
                    <div className="mt-4 space-y-3">
                      <Textarea
                        placeholder="Написать сообщение..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="bg-tech-dark/50 border-tech-gray/30 text-white placeholder:text-tech-gray"
                        rows={3}
                      />
                      <div className="flex gap-2">
                        <Button onClick={sendMessage} className="bg-tech-blue hover:bg-tech-blue/80">
                          <Icon name="Send" size={16} className="mr-2" />
                          Отправить
                        </Button>
                        <Button variant="outline" className="border-tech-gray/30 text-tech-gray hover:text-white">
                          Прикрепить файл
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <Card className="bg-tech-dark/30 border-tech-gray/20">
                      <CardContent className="p-4">
                        <h4 className="text-white font-medium mb-3">Информация</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-tech-gray">Создан:</span>
                            <span className="text-white">{selectedTicket.created}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-tech-gray">Обновлен:</span>
                            <span className="text-white">{selectedTicket.updated}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-tech-gray">Агент:</span>
                            <span className="text-white">{selectedTicket.agent}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-tech-gray">Сообщений:</span>
                            <span className="text-white">{selectedTicket.messages.length}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-tech-dark/30 border-tech-gray/20">
                      <CardContent className="p-4">
                        <h4 className="text-white font-medium mb-3">Действия</h4>
                        <div className="space-y-2">
                          <Button 
                            size="sm" 
                            className="w-full justify-start bg-tech-green/20 text-tech-green hover:bg-tech-green/30"
                          >
                            <Icon name="CheckCircle" size={16} className="mr-2" />
                            Решить тикет
                          </Button>
                          <Button 
                            size="sm" 
                            className="w-full justify-start bg-tech-blue/20 text-tech-blue hover:bg-tech-blue/30"
                          >
                            <Icon name="UserPlus" size={16} className="mr-2" />
                            Назначить агента
                          </Button>
                          <Button 
                            size="sm" 
                            className="w-full justify-start bg-tech-red/20 text-tech-red hover:bg-tech-red/30"
                          >
                            <Icon name="AlertTriangle" size={16} className="mr-2" />
                            Повысить приоритет
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    );
  }

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
              onClick={() => setActiveView('platform')}
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
                onClick={() => setActiveView('platform')}
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
                    onClick={() => setActiveView('platform')}
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