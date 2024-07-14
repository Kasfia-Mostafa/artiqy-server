import { z } from "zod";
import { Role } from "./user.constant";

// Define the Zod schema for TUser
export const createUserValidationSchema = z.object({
  body: z.object({
    username: z.string().nonempty("Username is required"),
    firstName: z.string().nonempty("First name is required"),
    lastName: z.string().nonempty("Last name is required"),
    email: z.string().email("Invalid email address"),
    password: z
      .string({
        invalid_type_error: "Password must be string",
      })
      .max(20, { message: "Password cant not be more then 20 characters" })
      .optional(),
    phone: z.string().optional(),
    role: z.nativeEnum(Role).default(Role.admin),
    address: z.string().optional(),
    profilePicture: z.string().optional(),
    coverPicture: z.string().optional(),
    about: z.string().optional(),
    livesIn: z.string().optional(),
    worksAt: z.string().optional(),
    relationship: z.string().optional(),
    followers: z.array(z.string()).optional(),
    following: z.array(z.string()).optional(),
  }),
});
const loginValidationSchema = z.object({
  body: z.object({
    email: z.string({ required_error: "Email is required!" }),
    password: z.string({ required_error: "Password is required!" }),
  }),
});

export const UserValidation = {
  createUserValidationSchema,
  loginValidationSchema,
};
