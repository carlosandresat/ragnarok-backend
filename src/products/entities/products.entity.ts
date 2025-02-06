import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Categories } from './categories.entity';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('float')
  basePrice: number;

  @ManyToOne(() => Categories, (category) => category.products, { eager: true })
  @JoinColumn({ name: 'categoryId' })
  category: Categories;

  @Column()
  categoryId: number;
}
