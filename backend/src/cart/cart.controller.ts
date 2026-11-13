import { Body, Controller, Get, Post } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  findAll() {
    return this.cartService.findAll();
  }

  @Post()
  add(@Body() item: { productId: number; quantity?: number }) {
    return this.cartService.add(item.productId, item.quantity);
  }
}
