import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-background py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Современная электроника
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                по лучшим ценам
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Откройте для себя широкий выбор качественной техники с доставкой по всей России и безопасной оплатой
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link to="/catalog">
                <Button size="lg" className="group">
                  Перейти в каталог
                  <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contacts">
                <Button size="lg" variant="outline">
                  Связаться с нами
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors animate-fade-in">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon name="Truck" size={28} className="text-primary" />
            </div>
            <h3 className="font-semibold text-lg">Быстрая доставка</h3>
            <p className="text-sm text-muted-foreground">
              Доставим заказ по всей России в течение 1-3 дней
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center">
              <Icon name="Shield" size={28} className="text-secondary" />
            </div>
            <h3 className="font-semibold text-lg">Гарантия качества</h3>
            <p className="text-sm text-muted-foreground">
              Официальная гарантия на все товары от производителя
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon name="CreditCard" size={28} className="text-primary" />
            </div>
            <h3 className="font-semibold text-lg">Безопасная оплата</h3>
            <p className="text-sm text-muted-foreground">
              Защищенные платежи через банковские карты и электронные кошельки
            </p>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold">Популярные товары</h2>
              <p className="text-muted-foreground mt-2">Выбор покупателей этого месяца</p>
            </div>
            <Link to="/catalog">
              <Button variant="outline" className="group">
                Смотреть все
                <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Скидка 15% на первый заказ
            </h2>
            <p className="text-lg mb-6 text-white/90">
              Подпишитесь на рассылку и получите промокод на скидку для первой покупки
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground"
              />
              <Button size="lg" variant="secondary" className="whitespace-nowrap">
                Получить скидку
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
