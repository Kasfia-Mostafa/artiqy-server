"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("../module/users/user.route");
const router = (0, express_1.Router)();
const modulesRoutes = [
    {
        path: "/auth",
        route: user_route_1.UserRoutes,
    },
];
modulesRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
