import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAllProducts() {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.productsService.getProduct(parseInt(id));
  }

  @Post()
  addProduct(@Body() product: CreateProductDto) {
    this.productsService.addProduct(product.name, product.description, product.basePrice);
  }
}
