import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface PlatformPreviewProps {
  tickets: any[];
}

export default function PlatformPreview({ tickets }: PlatformPreviewProps) {
  return (
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
  );
}