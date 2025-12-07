import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Товар не найден</h2>
        <Button onClick={() => navigate('/catalog')}>Вернуться в каталог</Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} добавлен в корзину`, {
      action: {
        label: 'Перейти в корзину',
        onClick: () => navigate('/cart'),
      },
    });
  };

  return (
    <div className="container py-8">
      <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6 gap-2">
        <Icon name="ArrowLeft" size={20} />
        Назад
      </Button>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div className="space-y-4">
          <div className="aspect-square rounded-xl overflow-hidden bg-muted animate-scale-in">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-6 animate-fade-in">
          <div>
            <Badge variant="outline" className="mb-3">
              {product.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Icon name="Star" size={18} className="fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{product.rating}</span>
                <span className="text-muted-foreground">({product.reviews} отзывов)</span>
              </div>
              {product.inStock ? (
                <Badge variant="secondary" className="gap-1">
                  <Icon name="Check" size={14} />
                  В наличии
                </Badge>
              ) : (
                <Badge variant="destructive">Нет в наличии</Badge>
              )}
            </div>
          </div>

          <Separator />

          <div>
            <p className="text-4xl font-bold text-primary">
              {product.price.toLocaleString('ru-RU')} ₽
            </p>
          </div>

          <div className="space-y-4">
            <Button
              size="lg"
              className="w-full gap-2 text-lg"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              <Icon name="ShoppingCart" size={20} />
              Добавить в корзину
            </Button>
            <Button size="lg" variant="outline" className="w-full gap-2">
              <Icon name="Heart" size={20} />
              В избранное
            </Button>
          </div>

          <Separator />

          <div>
            <h2 className="text-xl font-semibold mb-3">Описание</h2>
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Характеристики</h2>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="CheckCircle" size={18} className="text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-muted/50 rounded-lg p-6 space-y-3">
            <div className="flex items-center gap-3">
              <Icon name="Truck" size={24} className="text-primary" />
              <div>
                <p className="font-medium">Бесплатная доставка</p>
                <p className="text-sm text-muted-foreground">При заказе от 5000 ₽</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="Shield" size={24} className="text-primary" />
              <div>
                <p className="font-medium">Гарантия 12 месяцев</p>
                <p className="text-sm text-muted-foreground">Официальная гарантия производителя</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="RotateCcw" size={24} className="text-primary" />
              <div>
                <p className="font-medium">Возврат 14 дней</p>
                <p className="text-sm text-muted-foreground">Без вопросов и объяснений</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
