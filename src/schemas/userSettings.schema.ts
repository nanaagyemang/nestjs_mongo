import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Settings {
  @Prop({ required: false })
  receiveSMS?: boolean;

  @Prop({ required: false })
  receiveEmail?: boolean;

  @Prop({ required: false })
  receiveNotification?: boolean;
}

export const settingsSchema = SchemaFactory.createForClass(Settings);
