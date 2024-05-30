
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { PostModule } from './post/post.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1/nest'),
  UsersModule,
  PostModule,
  
  ],
  
})
export class AppModule {}
