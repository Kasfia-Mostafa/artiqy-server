import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { PostValidation } from "./post.validation";
import { PostsControllers } from "./posts.controller";


const router = express.Router();

router.post(
  "/",
  validateRequest(PostValidation.createPostValidationSchema),
  PostsControllers.createPost
);



export const PostsRoutes = router;
