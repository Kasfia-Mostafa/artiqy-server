import { TPost } from "./posts.interface";
import { Posts } from "./posts.model";


const createPostsIntoDB = async (payload: TPost) => {
  const createdPost = await Posts.create(payload);
  return createdPost;
};


export const PostsService ={
  createPostsIntoDB
}