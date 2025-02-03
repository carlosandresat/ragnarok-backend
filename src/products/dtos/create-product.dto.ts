import { IsString, IsNumber, IsPositive, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  //validate if is a number, if its possitive
  @IsNumber()
  @Min(0)
  basePrice: number;
}
