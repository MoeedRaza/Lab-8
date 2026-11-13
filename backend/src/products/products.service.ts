import { Injectable, NotFoundException } from '@nestjs/common';

export interface Product {
  id: number;
  game: string;
  name: string;
  category: string;
  price: number;
}

@Injectable()
export class ProductsService {
  private products: Product[] = [
    { id: 1, game: 'Valorant', name: '2,050 Valorant Points', category: 'FPS', price: 5490 },
    { id: 2, game: 'Call of Duty', name: '2,400 COD Points', category: 'FPS', price: 5650 },
    { id: 3, game: 'Apex Legends', name: '2,250 Apex Coins', category: 'FPS', price: 5250 },
    { id: 4, game: 'Rainbow Six Siege', name: '2,670 R6 Credits', category: 'FPS', price: 6190 },
    { id: 5, game: 'Fortnite', name: '2,800 V-Bucks', category: 'FPS', price: 6450 },
    { id: 6, game: 'Overwatch 2', name: '2,200 Overwatch Coins', category: 'FPS', price: 5590 },
    { id: 7, game: 'Counter-Strike 2', name: 'Steam Wallet Credit', category: 'FPS', price: 5000 },
    { id: 8, game: 'League of Legends', name: '2,800 RP', category: 'MOBA', price: 6250 },
    { id: 9, game: 'Dota 2', name: 'Dota Plus - 1 Month', category: 'MOBA', price: 1150 },
    { id: 10, game: 'Rocket League', name: '3,000 Credits', category: 'Sports', price: 6950 },
    { id: 11, game: 'EA SPORTS FC 26', name: '2,800 FC Points', category: 'Sports', price: 7250 },
  ];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product {
    const product = this.products.find((item) => item.id === Number(id));
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  create(product: Omit<Product, 'id'>): Product {
    const newProduct = { id: this.products.length ? Math.max(...this.products.map((item) => item.id)) + 1 : 1, ...product };
    this.products.push(newProduct);
    return newProduct;
  }
}
