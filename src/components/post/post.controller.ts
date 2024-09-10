import { DolphControllerHandler } from "@dolphjs/dolph/classes";
import {
  Dolph,
  SuccessResponse,
  DRequest,
  DResponse,
  validateBodyMiddleware,
  TryCatchAsyncDec,
  validateParamMiddleware,
  validateQueryMiddleware,
} from "@dolphjs/dolph/common";
import {
  Delete,
  Get,
  Patch,
  Post,
  Route,
  UseMiddleware,
} from "@dolphjs/dolph/decorators";
import { PostService } from "./post.service";
import { CreatePostDto, UpdatePostDto } from "./post.dto";
import { MediaParser } from "@dolphjs/dolph/utilities";

@Route("post")
export class PostController extends DolphControllerHandler<Dolph> {
  private PostService: PostService;

  @Post("create")
  @UseMiddleware(validateParamMiddleware(CreatePostDto))
  @TryCatchAsyncDec
  async post(req: DRequest, res: DResponse) {
    const result = await this.PostService.createPost(req.body);

    SuccessResponse({ res, body: result });
  }

  @Get(":id")
  @TryCatchAsyncDec
  async greet(req: DRequest, res: DResponse) {
    const post = await this.PostService.retrievePostById(req.params.id);

    SuccessResponse({
      res,
      body: post,
    });
  }

  @Patch("update")
  @UseMiddleware(validateBodyMiddleware(UpdatePostDto))
  @TryCatchAsyncDec
  async updatePost(req: DRequest, res: DResponse) {
    const result = await this.PostService.updatePost(req.body);
    SuccessResponse({ res, body: result });
  }

  @Delete(":id")
  @TryCatchAsyncDec
  async deletePost(req: DRequest, res: DResponse) {
    await this.PostService.deletePost(req.params.id);
    SuccessResponse({ res, msg: "Post has  been deleted" });
  }
}
