import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Contacts = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Контакты и поддержка</h1>
          <p className="text-lg text-muted-foreground">
            Мы всегда готовы помочь и ответить на ваши вопросы
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="animate-fade-in">
            <CardContent className="pt-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Icon name="Phone" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Телефон</h3>
                <p className="text-sm text-muted-foreground">+7 (800) 555-35-35</p>
                <p className="text-xs text-muted-foreground mt-1">Бесплатно по России</p>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardContent className="pt-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                <Icon name="Mail" size={24} className="text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-sm text-muted-foreground">info@shopvibe.ru</p>
                <p className="text-xs text-muted-foreground mt-1">Ответим в течение 24 часов</p>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="pt-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Icon name="MapPin" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Адрес</h3>
                <p className="text-sm text-muted-foreground">Москва, ул. Примерная, 1</p>
                <p className="text-xs text-muted-foreground mt-1">Пн-Пт: 9:00 - 20:00</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-6 text-center">Напишите нам</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Иван Иванов" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="example@mail.ru" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Тема обращения</Label>
                <Input id="subject" placeholder="Вопрос о доставке" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Сообщение</Label>
                <Textarea
                  id="message"
                  placeholder="Расскажите подробнее о вашем вопросе..."
                  rows={6}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full gap-2">
                <Icon name="Send" size={20} />
                Отправить сообщение
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <CardContent className="pt-6 space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Icon name="HelpCircle" size={24} className="text-primary" />
                Часто задаваемые вопросы
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium">Как оформить заказ?</p>
                  <p className="text-muted-foreground">Добавьте товары в корзину и следуйте инструкциям при оформлении</p>
                </div>
                <div>
                  <p className="font-medium">Какие способы оплаты доступны?</p>
                  <p className="text-muted-foreground">Банковские карты, СБП, оплата при получении</p>
                </div>
                <div>
                  <p className="font-medium">Сколько времени занимает доставка?</p>
                  <p className="text-muted-foreground">1-3 дня по Москве, 3-7 дней по России</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <CardContent className="pt-6 space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Icon name="Clock" size={24} className="text-secondary" />
                Время работы поддержки
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Понедельник - Пятница</span>
                  <span className="font-medium">9:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Суббота</span>
                  <span className="font-medium">10:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Воскресенье</span>
                  <span className="font-medium">Выходной</span>
                </div>
              </div>
              <div className="pt-4 space-y-2">
                <p className="text-sm font-medium">Мы в социальных сетях:</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Icon name="Facebook" size={20} />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Icon name="Twitter" size={20} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
