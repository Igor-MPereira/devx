"use client";
import type { NextErrorProps } from "@/types/next";

function GlobalErrorPage({ error, reset }: NextErrorProps) {
	return (
		<div className="max-w-lg">
			<p>
				<b>A aplicação parou de funcionar!</b>
			</p>
			<pre>{error.message}</pre>
			<button onClick={reset}>Tentar novamente.</button>
		</div>
	);
}

export default GlobalErrorPage;
