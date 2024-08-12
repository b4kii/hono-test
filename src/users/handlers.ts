import { createFactory } from "hono/factory";

const factory = createFactory();

export const usersIndex = factory.createHandlers((c) => {
    return c.text("user index");
});

export const usersStore = factory.createHandlers((c) => {
    return c.text("saving user");
});