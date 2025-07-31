import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

interface TicketsSectionProps {
  tickets: any[];
  filteredTickets: any[];
  searchQuery: string;
  statusFilter: string;
  priorityFilter: string;
  onSearchChange: (query: string) => void;
  onStatusFilterChange: (status: string) => void;
  onPriorityFilterChange: (priority: string) => void;
  onTicketClick: (ticket: any) => void;
  onNewTicketClick: () => void;
}

export default function TicketsSection({
  tickets,
  filteredTickets,
  searchQuery,
  statusFilter,
  priorityFilter,
  onSearchChange,
  onStatusFilterChange,
  onPriorityFilterChange,
  onTicketClick,
  onNewTicketClick
}: TicketsSectionProps) {
  return (
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
                onChange={(e) => onSearchChange(e.target.value)}
                className="bg-tech-dark/50 border-tech-gray/30 text-white placeholder:text-tech-gray"
              />
            </div>
            <Select value={statusFilter} onValueChange={onStatusFilterChange}>
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
            <Select value={priorityFilter} onValueChange={onPriorityFilterChange}>
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
            <Button className="bg-tech-blue hover:bg-tech-blue/80" onClick={onNewTicketClick}>
              <Icon name="Plus" size={16} className="mr-2" />
              Новый тикет
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredTickets.map((ticket) => (
              <div 
                key={ticket.id}
                className="p-4 rounded-lg bg-tech-dark/30 border border-tech-gray/10 hover:border-tech-gray/30 transition-all cursor-pointer"
                onClick={() => onTicketClick(ticket)}
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
  );
}