import { Injectable } from '@nestjs/common';
import { ProductsService } from '../products/products.service';

interface CartEntry {
  productId: number;
  quantity: number;
}

@Injectable()
export class CartService {
  private items: CartEntry[] = [];

  constructor(private readonly productsService: ProductsService) {}

  findAll() {
    return this.items.map((item) => {
      const product = this.productsService.findOne(item.productId);
      return { ...item, game: product.game, name: product.name, price: product.price, total: product.price * item.quantity };
    });
  }

  add(productId: number, quantity = 1) {
    const product = this.productsService.findOne(Number(productId));
    const entry = this.items.find((item) => item.productId === Number(productId));
    if (entry) entry.quantity += Number(quantity);
    else this.items.push({ productId: product.id, quantity: Number(quantity) });
    return this.findAll();
  }

  clear() {
    this.items = [];
  }
}
