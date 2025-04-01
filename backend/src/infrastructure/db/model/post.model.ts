import { Post } from "@domain/entities/post.entity";

import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true, unique: true },
    date: { type: Date, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    archiveDate: { type: Date, required: false },
    storageDate: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

export const PostModel = mongoose.model<Post>("Post", postSchema);
