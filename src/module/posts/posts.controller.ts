import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { PostsService } from "./posts.service";

const createPost = catchAsync(async (req, res) => {
  const result = await PostsService.createPostsIntoDB(req.body);

  res.status(200).json({
    success: true,
    statusCode: httpStatus.OK,
    message: "Post created successfully",
    data: result,
  });
});

export const PostsControllers = {
  createPost,
};
