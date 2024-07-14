import { Model } from "mongoose";
import { Role } from "./user.constant";

export interface TUser {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: keyof typeof Role;
  phone?: string;
  address?: string;
  profilePicture?: string;
  coverPicture?: string;
  about?: string;
  livesIn?: string;
  worksAt?: string;
  relationship?: string;
  followers?: string[];
  following?: string[];
}
export interface UserModel extends Model<TUser> {
  isUserExistsByCustomEmail(email: string): Promise<TUser>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
  isJWTIssuedBeforePasswordChanged(
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number,
  ): boolean;
}

export interface TLogin {
  email: string;
  password: string;
}
