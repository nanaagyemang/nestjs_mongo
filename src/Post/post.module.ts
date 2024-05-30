import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { Post, PostSchema } from 'src/schemas/post.schema';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { UsersModule } from 'src/users/users.module';
import { User, UserSchema } from 'src/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Post.name,
        schema: PostSchema,
      },
      {
        name: User.name,
        schema: UserSchema
    }
    ]),
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
