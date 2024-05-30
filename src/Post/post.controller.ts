import { Body, Controller, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/createpost.dto';

@Controller('post')
export class PostController {
    constructor(private postService:PostService){}

    @Post()
    createPost(@Body() createPostDto:CreatePostDto){
      return  this.postService.createPost(createPostDto)
    }
}
