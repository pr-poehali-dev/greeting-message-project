import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Product } from '@/types/product';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`${product.name} добавлен в корзину`);
  };

  return (
    <Link to={`/product/${product.id}`}>
      <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col animate-fade-in">
        <div className="relative overflow-hidden aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          />
          {!product.inStock && (
            <Badge className="absolute top-3 right-3 bg-destructive">
              Нет в наличии
            </Badge>
          )}
          {product.rating >= 4.8 && product.inStock && (
            <Badge className="absolute top-3 right-3 bg-secondary">
              🔥 Хит
            </Badge>
          )}
        </div>

        <CardContent className="flex-1 pt-4 space-y-2">
          <Badge variant="outline" className="text-xs">
            {product.category}
          </Badge>
          <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center gap-1 text-sm">
            <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{product.rating}</span>
            <span className="text-muted-foreground">({product.reviews})</span>
          </div>
        </CardContent>

        <CardFooter className="flex items-center justify-between pt-0">
          <div>
            <p className="text-2xl font-bold text-primary">
              {product.price.toLocaleString('ru-RU')} ₽
            </p>
          </div>
          <Button 
            size="icon" 
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="hover:scale-110 transition-transform"
          >
            <Icon name="ShoppingCart" size={18} />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
