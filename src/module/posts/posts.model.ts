import { Schema, model } from "mongoose";
import { TPost } from "./posts.interface";

const postSchema: Schema<TPost> = new Schema(
  {
    userId: { type: String, required: true },
    desc: { type: String },
    likes: { type: [String], default: [] },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

export const Posts = model<TPost>("Posts", postSchema);
