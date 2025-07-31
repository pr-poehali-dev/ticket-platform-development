import { useState } from 'react';
import LandingPage from '@/components/LandingPage';
import PlatformHeader from '@/components/PlatformHeader';
import Sidebar from '@/components/Sidebar';
import TicketsSection from '@/components/TicketsSection';
import OtherSections from '@/components/OtherSections';
import TicketDetailModal from '@/components/TicketDetailModal';
import NewTicketModal from '@/components/NewTicketModal';

export default function Index() {
  const [activeView, setActiveView] = useState('landing');
  const [activeSection, setActiveSection] = useState('tickets');
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [newTicketOpen, setNewTicketOpen] = useState(false);
  const [ticketDetailOpen, setTicketDetailOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  
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

  const openTicketDetails = (ticket: any) => {
    setSelectedTicket(ticket);
    setTicketDetailOpen(true);
  };

  const createNewTicket = (formData: any) => {
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

  const sendMessage = (message: string) => {
    if (!selectedTicket) return;
    
    const newMessage = {
      id: selectedTicket.messages.length + 1,
      author: 'Анна Петрова',
      content: message,
      time: new Date().toLocaleTimeString('ru-RU', {hour: '2-digit', minute:'2-digit'}),
      type: 'agent'
    };

    const updatedTicket = {
      ...selectedTicket,
      messages: [...selectedTicket.messages, newMessage],
      updated: new Date().toLocaleString('ru-RU')
    };

    setTickets(tickets.map((t: any) => t.id === selectedTicket.id ? updatedTicket : t));
    setSelectedTicket(updatedTicket);
  };

  if (activeView === 'platform') {
    return (
      <div className="min-h-screen bg-tech-dark font-inter">
        <PlatformHeader onBackToLanding={() => setActiveView('landing')} />

        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <Sidebar 
              activeSection={activeSection} 
              onSectionChange={setActiveSection} 
            />

            <div className="lg:col-span-3">
              {activeSection === 'tickets' && (
                <TicketsSection
                  tickets={tickets}
                  filteredTickets={filteredTickets}
                  searchQuery={searchQuery}
                  statusFilter={statusFilter}
                  priorityFilter={priorityFilter}
                  onSearchChange={setSearchQuery}
                  onStatusFilterChange={setStatusFilter}
                  onPriorityFilterChange={setPriorityFilter}
                  onTicketClick={openTicketDetails}
                  onNewTicketClick={() => setNewTicketOpen(true)}
                />
              )}

              <OtherSections 
                activeSection={activeSection} 
                agents={agents} 
              />
            </div>
          </div>
        </div>

        <TicketDetailModal
          open={ticketDetailOpen}
          onOpenChange={setTicketDetailOpen}
          ticket={selectedTicket}
          onSendMessage={sendMessage}
          onUpdateTickets={setTickets}
          tickets={tickets}
        />

        <NewTicketModal
          open={newTicketOpen}
          onOpenChange={setNewTicketOpen}
          agents={agents}
          onCreateTicket={createNewTicket}
        />
      </div>
    );
  }

  return (
    <LandingPage 
      onEnterPlatform={() => setActiveView('platform')}
      tickets={tickets}
    />
  );
}