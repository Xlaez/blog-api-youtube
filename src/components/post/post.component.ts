import { Component } from "@dolphjs/dolph/decorators";
import { PostController } from "./post.controller";
import { PostService } from "./post.service";

@Component({ controllers: [PostController], services: [PostService] })
export class PostComponent {}
