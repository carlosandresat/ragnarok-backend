import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Products } from './entities/products.entity';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { Categories } from './entities/categories.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Products, Categories])],
  providers: [ProductsService, CategoryService],
  controllers: [ProductsController, CategoryController],
})
export class ProductsModule {}
