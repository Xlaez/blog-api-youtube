import { DolphServiceHandler } from "@dolphjs/dolph/classes";
import { Dolph, NotFoundException } from "@dolphjs/dolph/common";
import { InjectMongo } from "@dolphjs/dolph/decorators";
import { Model } from "mongoose";
import { PostModel, IPost } from "./post.model";
import { CreatePostDto, UpdatePostDto } from "./post.dto";

@InjectMongo("postModel", PostModel)
export class PostService extends DolphServiceHandler<Dolph> {
  postModel!: Model<IPost>;

  constructor() {
    super("postservice");
  }

  async createPost(dto: CreatePostDto) {
    return this.postModel.create(dto);
  }

  async retrievePostById(postId: string) {
    const post = await this.postModel.findById(postId);

    if (!post) throw new NotFoundException("The requested post does not exist");

    return post;
  }

  async updatePost(dto: UpdatePostDto) {
    return this.postModel.findByIdAndUpdate(
      dto.postId,
      { descr: dto.descr },
      { new: true }
    );
  }

  async deletePost(postId: string) {
    return this.postModel.findByIdAndDelete(postId);
  }
}
