import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { useCart } from '@/contexts/CartContext';

const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container py-20 text-center">
        <div className="max-w-md mx-auto space-y-6">
          <div className="w-24 h-24 mx-auto rounded-full bg-muted flex items-center justify-center">
            <Icon name="ShoppingCart" size={48} className="text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-bold">Корзина пуста</h2>
          <p className="text-muted-foreground">
            Добавьте товары из каталога, чтобы начать покупки
          </p>
          <Link to="/catalog">
            <Button size="lg" className="gap-2">
              <Icon name="ShoppingBag" size={20} />
              Перейти в каталог
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Корзина</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <Card key={item.id} className="animate-fade-in">
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1 space-y-2">
                    <Link to={`/product/${item.id}`}>
                      <h3 className="font-semibold hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {item.description}
                    </p>
                    <p className="text-lg font-bold text-primary">
                      {item.price.toLocaleString('ru-RU')} ₽
                    </p>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromCart(item.id)}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <Icon name="Trash2" size={18} />
                    </Button>
                    <div className="flex items-center gap-2 border rounded-lg">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Icon name="Minus" size={16} />
                      </Button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Icon name="Plus" size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-20 animate-scale-in">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-bold">Итого</h2>
              <Separator />
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Товары ({cart.length})</span>
                  <span>{getTotalPrice().toLocaleString('ru-RU')} ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Доставка</span>
                  <span className="text-green-600 font-medium">Бесплатно</span>
                </div>
              </div>

              <Separator />

              <div className="flex justify-between text-lg font-bold">
                <span>К оплате</span>
                <span className="text-primary">{getTotalPrice().toLocaleString('ru-RU')} ₽</span>
              </div>

              <Button 
                size="lg" 
                className="w-full gap-2"
                onClick={() => navigate('/checkout')}
              >
                Оформить заказ
                <Icon name="ArrowRight" size={20} />
              </Button>

              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Shield" size={16} className="text-primary" />
                  <span>Безопасная оплата</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Truck" size={16} className="text-primary" />
                  <span>Доставка 1-3 дня</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="RotateCcw" size={16} className="text-primary" />
                  <span>Возврат в течение 14 дней</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cart;
