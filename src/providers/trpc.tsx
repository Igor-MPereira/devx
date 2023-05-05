"use client";

import { type AppRouter } from "@/server/trpc";
import { getBaseUrl } from "@/shared/url";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
	createTRPCReact,
	getFetch,
	httpBatchLink,
	loggerLink
} from "@trpc/react-query";
import { useState, type PropsWithChildren } from "react";
import SuperJSON from "superjson";

export const trpc = createTRPCReact<AppRouter>({
	overrides: {
		useMutation: {
			async onSuccess(opts) {
				await opts.originalFn();
				await opts.queryClient.invalidateQueries();
			}
		}
	}
});

function TRPCProvider({ children }: PropsWithChildren) {
	const [queryClient] = useState(() => new QueryClient());
	const [trpcClient] = useState(() =>
		trpc.createClient({
			transformer: SuperJSON,
			links: [
				loggerLink({
					enabled: opts =>
						process.env.NODE_ENV !== "production" ||
						(opts.direction === "down" && opts.result instanceof Error)
				}),
				httpBatchLink({
					url: `${getBaseUrl()}/api/trpc`,
					fetch: async (input, init?) => {
						const fetch = getFetch();
						return fetch(input, {
							...init,
							credentials: "include"
						});
					}
				})
			]
		})
	);

	return (
		<trpc.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>
				{children}
				<ReactQueryDevtools />
			</QueryClientProvider>
		</trpc.Provider>
	);
}

export default TRPCProvider;
