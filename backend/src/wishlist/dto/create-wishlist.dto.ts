import { Types } from 'mongoose';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateWishlistDto {
  @IsString()
  placeName: string;

  @IsString()
  imageUrl: string;

  @IsNumber()
  pricePerNight: number;

  @IsOptional()
  @IsNumber()
  rating: number;

  @IsNumber()
  availableNights: number;

  userId?: Types.ObjectId;
}
