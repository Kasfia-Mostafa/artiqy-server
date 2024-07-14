import { Schema, model } from "mongoose";
import { TUser, UserModel } from "./user.interface";
import { Role } from "./user.constant";
import bcryptjs from "bcryptjs";
import config from "../../app/config";

const UserSchema: Schema<TUser> = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    role: {
      type: String,
      enum: Object.keys(Role),
      required: true,
    },
    address: {
      type: String,
     
    },
    profilePicture: String,
    coverPicture: String,
    about: String,
    livesIn: String,
    worksAt: String,
    relationship: String,
    followers: {
      type: [String],
      default: [],
    },
    following: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  this.password = await bcryptjs.hash(this.password, Number(config.bcrypt_salt_round));
  next();
});

UserSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

UserSchema.statics.isUserExistsByCustomEmail = async function (email: string) {
  return await this.findOne({ email }).select('+password');
};

UserSchema.statics.isPasswordMatched = async function (
  plainTextPassword: string,
  hashedPassword: string
): Promise<boolean> {
  return await bcryptjs.compare(plainTextPassword, hashedPassword);
};

export const User = model<TUser, UserModel>("User", UserSchema);
