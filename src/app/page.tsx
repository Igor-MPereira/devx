"use client";

import { trpc } from "@/providers/trpc";
import { signIn, signOut, useSession } from "next-auth/react";

export const runtime = "edge";

function Home() {
	const { status, data: session } = useSession();
	const hello = trpc.example.hello.useQuery({ text: "from tRPC!" });

	const signInWithGithub = () =>
		signIn()
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			});

	return (
		<div>
			<div className="flex flex-col items-center gap-10">
				<h1 className="text-6xl">DevXShare</h1>
				<p className="text-2xl">
					{hello.data ? hello.data.greeting : "Loading tRPC query..."}
				</p>

				{status === "authenticated" ? (
					<div>
						<p className="text-2xl">Signed in as {session.user.name}</p>
						<button onClick={() => signOut()}>Sign out</button>
					</div>
				) : (
					<button
						className="rounded-md p-2 outline outline-1 outline-white hover:bg-gray-700"
						onClick={signInWithGithub}
					>
						Entrar
					</button>
				)}
			</div>
		</div>
	);
}

export default Home;
