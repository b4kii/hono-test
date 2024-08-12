import { Hono } from "hono";
import { todosIndex } from "./handlers";

const todosRoutes = new Hono();

todosRoutes.get("/", ...todosIndex);

export { todosRoutes };
