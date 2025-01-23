import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private products = [];

  getTasks() {
    return this.products;
  }
}
