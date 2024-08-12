import { Hono } from "hono";
import { usersRoutes } from "./users/routes";
import { todosRoutes } from "./todos/routes";
import { rootIndex } from "./handlers";

const routes = new Hono();

routes.get("/", ...rootIndex);
routes.route("/users", usersRoutes);
routes.route("/todos", todosRoutes);

export { routes };
