import { Injectable } from '@nestjs/common';
import { CartService } from '../cart/cart.service';

@Injectable()
export class OrdersService {
  private orders: any[] = [];

  constructor(private readonly cartService: CartService) {}

  findAll() {
    return this.orders;
  }

  create(order: any) {
    const newOrder = { id: this.orders.length + 1, createdAt: new Date().toISOString(), ...order };
    this.orders.push(newOrder);
    this.cartService.clear();
    return newOrder;
  }
}
