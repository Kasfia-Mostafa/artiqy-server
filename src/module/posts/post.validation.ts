import { z } from "zod";

// Define the validation schema for TPost
const createPostValidationSchema = z.object({
  body:z.object({
    userId: z.string().nonempty("User ID is required"),
    desc: z.string().optional(),
    likes: z.array(z.string()).default([]),
    image: z.string().optional(),
  })
})

export const PostValidation = {
  createPostValidationSchema
};
