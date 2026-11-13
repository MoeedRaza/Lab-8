import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService {
  private categories = ['FPS', 'MOBA', 'Sports'];

  findAll() {
    return this.categories;
  }

  create(name: string) {
    this.categories.push(name);
    return { name };
  }
}
