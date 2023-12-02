import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Task extends Document {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  userId: string; // Ensure this property is defined
}
export const TaskSchema = SchemaFactory.createForClass(Task);
