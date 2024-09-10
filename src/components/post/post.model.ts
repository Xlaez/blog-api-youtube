import { Schema, Document, model } from "mongoose";

export interface IPost extends Document {
  title: string;
  descr: string;
  img: string;
  createdAt: Date;
  updatedAt: Date;
}

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    descr: {
      type: String,
      required: false,
    },
    img: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export const PostModel = model<IPost>("posts", PostSchema);
