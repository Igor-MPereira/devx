"use client";
import type { NextErrorProps } from "@/types/next";

function GlobalErrorPage({ error, reset }: NextErrorProps) {
	return (
		<div className="max-w-lg">
			<p>
				<b>The application crashed!</b>
			</p>
			<pre>{error.message}</pre>
			<button onClick={reset}>Try agaain.</button>
		</div>
	);
}

export default GlobalErrorPage;
