import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  title: string;

  @IsString()
  @IsNotEmpty()
  descr: string;
}

export class UpdatePostDto {
  @IsString()
  @IsNotEmpty()
  descr: string;

  @IsString()
  @IsNotEmpty()
  postId: string;
}
