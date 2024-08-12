import { createFactory } from "hono/factory";

const factory = createFactory();

const rootIndex = factory.createHandlers((c) => {
    return c.text("root index");
});

export { rootIndex };
