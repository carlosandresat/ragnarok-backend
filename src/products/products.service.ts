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

  getProducts() {
    return this.productsRepository.find();
  }

  getProduct(id: number) {
    const product = this.productsRepository.findOneBy({ id });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  addProduct(name: string, description: string, basePrice: number) {
    const product = this.productsRepository.create({ name, description, basePrice });

    return this.productsRepository.save(product);
  }
}
