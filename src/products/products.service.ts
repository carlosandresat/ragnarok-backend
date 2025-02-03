import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from './products.entity';

@Injectable()
export class ProductsService {
  constructor (
    @InjectRepository(Products)
    private productsRepository: Repository<Products>
  ) {}

  private products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is product 1',
      price: 100,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is product 2',
      price: 150,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is product 3',
      price: 200,
    },
  ];

  getProducts() {
    return this.products;
  }

  getProduct(id: number) {
    const product = this.products.find((item: any) => item.id == id);
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }

  addProduct(name: string, description: string, basePrice: number) {
    const product = this.productsRepository.create({ name, description, basePrice });

    return this.productsRepository.save(product);
  }
}
