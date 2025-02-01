import { Controller, Get, Param, Post, Body } from '@nestjs/common';
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
  addProduct(
    @Body('id') id: number,
    @Body('name') name: string,
    @Body('description') description: string,
    @Body('price') price: number,
  ) {
    return this.productsService.addProduct({ id, name, description, price });
  }
}
