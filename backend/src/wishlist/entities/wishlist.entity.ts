import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Wishlist extends Document {
  @Prop({ required: true })
  placeName: string;

  @Prop({ required: true })
  imageUrl: string;

  @Prop({ required: true })
  pricePerNight: number;

  @Prop()
  rating: number;

  @Prop(Number)
  availableNights: number;

  // Optional: if you have user auth later
  @Prop({ required: true })
  userId?: Types.ObjectId;
}
export const WishlistSchema = SchemaFactory.createForClass(Wishlist);
