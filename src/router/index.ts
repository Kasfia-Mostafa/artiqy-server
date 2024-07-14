import { Router } from "express";
import { UserRoutes } from "../module/users/user.route";
import { PostsRoutes } from "../module/posts/posts.route";

const router = Router();

const modulesRoutes = [
  {
    path: "/auth",
    route: UserRoutes,
  },
  {
    path: "/posts",
    route: PostsRoutes,
  },
];

modulesRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
