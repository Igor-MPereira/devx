import { createTRPCRouter } from "./api";
import { exampleRouter } from "./routers/example";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const router = createTRPCRouter({
	example: exampleRouter
});

// export type definition of API
export type AppRouter = typeof router;
