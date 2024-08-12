import { createFactory } from "hono/factory";

const factory = createFactory();

const todosIndex = factory.createHandlers((c) => {
    return c.text("todo index");
});

export { todosIndex };
