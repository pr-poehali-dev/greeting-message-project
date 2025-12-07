import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Icon name="ShoppingBag" className="text-primary" size={24} />
              <span className="text-lg font-bold">ShopVibe</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Ваш надежный интернет-магазин электроники с доставкой по всей стране
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Каталог</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/catalog" className="hover:text-primary transition-colors">Смартфоны</Link></li>
              <li><Link to="/catalog" className="hover:text-primary transition-colors">Ноутбуки</Link></li>
              <li><Link to="/catalog" className="hover:text-primary transition-colors">Аксессуары</Link></li>
              <li><Link to="/catalog" className="hover:text-primary transition-colors">Умные устройства</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Информация</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/contacts" className="hover:text-primary transition-colors">О нас</Link></li>
              <li><Link to="/contacts" className="hover:text-primary transition-colors">Доставка</Link></li>
              <li><Link to="/contacts" className="hover:text-primary transition-colors">Оплата</Link></li>
              <li><Link to="/contacts" className="hover:text-primary transition-colors">Гарантия</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>+7 (800) 555-35-35</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>info@shopvibe.ru</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>Москва, ул. Примерная, 1</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 ShopVibe. Все права защищены
          </p>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Icon name="Instagram" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Icon name="Facebook" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Icon name="Twitter" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;