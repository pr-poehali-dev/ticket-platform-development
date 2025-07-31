import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

interface NewTicketModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  agents: any[];
  onCreateTicket: (formData: any) => void;
}

export default function NewTicketModal({
  open,
  onOpenChange,
  agents,
  onCreateTicket
}: NewTicketModalProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onCreateTicket({
      title: formData.get('title'),
      description: formData.get('description'),
      priority: formData.get('priority'),
      customer: formData.get('customer'),
      agent: agents.find(a => a.id === parseInt(formData.get('agent') as string))?.name,
      agentId: formData.get('agent')
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-tech-dark border-tech-gray/30 text-white max-w-2xl">
        <DialogHeader>
          <DialogTitle>Создать новый тикет</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="customer">Клиент</Label>
              <Input 
                name="customer" 
                required 
                className="bg-tech-dark/50 border-tech-gray/30 text-white" 
                placeholder="Имя клиента"
              />
            </div>
            <div>
              <Label htmlFor="title">Заголовок</Label>
              <Input 
                name="title" 
                required 
                className="bg-tech-dark/50 border-tech-gray/30 text-white" 
                placeholder="Краткое описание проблемы"
              />
            </div>
            <div>
              <Label htmlFor="description">Описание</Label>
              <Textarea 
                name="description" 
                required 
                className="bg-tech-dark/50 border-tech-gray/30 text-white" 
                rows={4}
                placeholder="Подробное описание проблемы"
              />
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
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => onOpenChange(false)}
                className="border-tech-gray/30 text-tech-gray hover:text-white"
              >
                Отмена
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}