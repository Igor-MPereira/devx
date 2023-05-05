"use client";
import { type NextErrorProps } from "@/types/next";

function ErrorPage({ error, reset }: NextErrorProps) {
	return (
		<div className="max-w-lg">
			<p>
				<b>Algo deu errado!</b>
			</p>
			<pre>{error.message}</pre>
			<button onClick={reset}>Tentar novamente</button>
		</div>
	);
}

export default ErrorPage;