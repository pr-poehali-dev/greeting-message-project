import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: 1,
    name: 'Смартфон Galaxy X Pro',
    price: 89990,
    image: 'https://images.unsplash.com/photo-1592286927505-4fd30c616c36?w=800&auto=format&fit=crop',
    category: 'Электроника',
    description: 'Флагманский смартфон с AMOLED дисплеем 6.7", тройная камера 108MP и процессор последнего поколения.',
    features: ['AMOLED 6.7" 120Hz', 'Камера 108MP', '12GB RAM', '256GB памяти', 'Быстрая зарядка 65W'],
    inStock: true,
    rating: 4.8,
    reviews: 342
  },
  {
    id: 2,
    name: 'Беспроводные наушники AirSound Pro',
    price: 24990,
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800&auto=format&fit=crop',
    category: 'Электроника',
    description: 'Премиум наушники с активным шумоподавлением, поддержкой всех кодеков и автономностью до 30 часов.',
    features: ['ANC шумоподавление', 'До 30 часов работы', 'Кодеки Hi-Res', 'Беспроводная зарядка', 'IPX4'],
    inStock: true,
    rating: 4.9,
    reviews: 528
  },
  {
    id: 3,
    name: 'Ноутбук UltraBook Pro 15',
    price: 129990,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop',
    category: 'Электроника',
    description: 'Мощный ультрабук с 15.6" 4K дисплеем, процессор Intel i7 12-го поколения, дискретная видеокарта.',
    features: ['Intel Core i7', '16GB RAM', '512GB SSD', '4K дисплей', 'GeForce RTX 3050'],
    inStock: true,
    rating: 4.7,
    reviews: 186
  },
  {
    id: 4,
    name: 'Умные часы SmartWatch Ultra',
    price: 34990,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop',
    category: 'Электроника',
    description: 'Спортивные часы с GPS, мониторингом здоровья 24/7, защитой от воды до 50м и автономностью 7 дней.',
    features: ['GPS навигация', 'Монитор сердца', 'Водозащита 50м', 'До 7 дней работы', '100+ тренировок'],
    inStock: true,
    rating: 4.6,
    reviews: 421
  },
  {
    id: 5,
    name: 'Игровая консоль GameX Series S',
    price: 44990,
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&auto=format&fit=crop',
    category: 'Электроника',
    description: 'Компактная игровая консоль с поддержкой 4K, ray tracing, библиотекой 1000+ игр и быстрой загрузкой.',
    features: ['4K gaming', 'Ray Tracing', '512GB SSD', '1000+ игр', 'Быстрая загрузка'],
    inStock: false,
    rating: 4.9,
    reviews: 892
  },
  {
    id: 6,
    name: 'Планшет TabPro 12',
    price: 69990,
    image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800&auto=format&fit=crop',
    category: 'Электроника',
    description: 'Профессиональный планшет 12.9" с поддержкой стилуса, процессор A15 и клавиатурой в комплекте.',
    features: ['12.9" Retina', 'Процессор A15', 'Стилус в комплекте', 'Клавиатура', '256GB памяти'],
    inStock: true,
    rating: 4.8,
    reviews: 267
  },
  {
    id: 7,
    name: 'Умная колонка HomePod Max',
    price: 19990,
    image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=800&auto=format&fit=crop',
    category: 'Электроника',
    description: 'Умная колонка с Hi-Fi звуком, голосовым помощником, управлением умным домом и Dolby Atmos.',
    features: ['Hi-Fi звук', 'Голосовой помощник', 'Умный дом', 'Dolby Atmos', 'Мультирум'],
    inStock: true,
    rating: 4.5,
    reviews: 315
  },
  {
    id: 8,
    name: 'Камера ProShot Z9',
    price: 159990,
    image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64ab?w=800&auto=format&fit=crop',
    category: 'Электроника',
    description: 'Профессиональная беззеркальная камера 45MP, 8K видео, двойной слот карт памяти и стабилизация 5 осей.',
    features: ['45MP сенсор', '8K видео', 'Стабилизация 5 осей', 'Dual card slots', 'Wi-Fi & Bluetooth'],
    inStock: true,
    rating: 5.0,
    reviews: 128
  }
];
