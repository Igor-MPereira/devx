"use client";
import type { NextErrorProps } from "@/types/next";

function ErrorPage({ error, reset }: NextErrorProps) {
	return (
		<div className="max-w-lg">
			<p>
				<b>Something went wrong!</b>
			</p>
			<pre>{error.message}</pre>
			<button onClick={reset}>Try again</button>
		</div>
	);
}

export default ErrorPage;
