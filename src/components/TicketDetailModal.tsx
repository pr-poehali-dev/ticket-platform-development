import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

interface TicketDetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  ticket: any;
  onSendMessage: (message: string) => void;
  onUpdateTickets: (updatedTickets: any[]) => void;
  tickets: any[];
}

export default function TicketDetailModal({
  open,
  onOpenChange,
  ticket,
  onSendMessage,
  onUpdateTickets,
  tickets
}: TicketDetailModalProps) {
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    onSendMessage(newMessage);
    setNewMessage('');
  };

  if (!ticket) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-tech-dark border-tech-gray/30 text-white max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-xl">{ticket.id} - {ticket.title}</DialogTitle>
              <p className="text-tech-gray text-sm mt-1">Клиент: {ticket.customer}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Badge 
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
                className={
                  ticket.priority === 'high' ? 'border-tech-red/30 text-tech-red bg-tech-red/10' :
                  ticket.priority === 'medium' ? 'border-tech-blue/30 text-tech-blue bg-tech-blue/10' :
                  'border-tech-gray/30 text-tech-gray bg-tech-gray/10'
                }
              >
                {ticket.priority === 'high' ? 'Высокий приоритет' :
                 ticket.priority === 'medium' ? 'Средний приоритет' : 'Низкий приоритет'}
              </Badge>
            </div>
          </div>
        </DialogHeader>
        
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <ScrollArea className="h-96 pr-4">
              <div className="space-y-4">
                {ticket.messages.map((message: any) => (
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
                <Button onClick={handleSendMessage} className="bg-tech-blue hover:bg-tech-blue/80">
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
                    <span className="text-white">{ticket.created}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-tech-gray">Обновлен:</span>
                    <span className="text-white">{ticket.updated}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-tech-gray">Агент:</span>
                    <span className="text-white">{ticket.agent}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-tech-gray">Сообщений:</span>
                    <span className="text-white">{ticket.messages.length}</span>
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
      </DialogContent>
    </Dialog>
  );
}