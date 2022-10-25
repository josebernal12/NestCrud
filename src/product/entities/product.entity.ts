import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop({
    unique: true,
    index: true,
  })
  name: string;

  @Prop({
    index: true,
  })
  price: number;
  @Prop({
    index: true,
  })
  stock: number;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
