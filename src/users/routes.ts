import { Hono } from "hono";
import { usersIndex, usersStore } from "./handlers";

const usersRoutes = new Hono();

usersRoutes.get("/", ...usersIndex);
usersRoutes.post("/", ...usersStore);

export { usersRoutes };
