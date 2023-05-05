"use client";

import { trpc } from "@/providers/trpc";

function Home() {
	const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

	return (
		<div>
			<div className="flex flex-col items-center gap-10">
				<h1 className="text-6xl">DevXShare</h1>
				<p className="text-2xl">
					{hello.data ? hello.data.greeting : "Loading tRPC query..."}
				</p>
			</div>
		</div>
	);
}

export default Home;
