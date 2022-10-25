import {
  IsInt,
  IsNumber,
  IsPositive,
  IsString,
  Min,
  MinLength,
} from 'class-validator';
export class CreateProductDto {
  @IsNumber()
  @IsInt()
  @IsPositive()
  @Min(1)
  price: number;

  @IsNumber()
  @IsInt()
  @IsPositive()
  @Min(1)
  stock: number;

  @IsString()
  @MinLength(1)
  name: string;
}
