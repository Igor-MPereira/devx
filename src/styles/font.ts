import { Fira_Code, Inter, JetBrains_Mono, Sono } from "next/font/google";

export const sonoFont = Sono({
	fallback: ["monospace", "Roboto Mono", "ui-monospace", "SFMono-Regular"]
});

export const interFont = Inter({
	fallback: ["sans-serif", "ui-sans-serif", "system-ui"]
});

export const firaCodeFont = Fira_Code({
	fallback: ["monospace", "Roboto Mono", "ui-monospace", "SFMono-Regular"],
	weight: ["400", "500", "700"]
});

export const jetBrainsMonoFont = JetBrains_Mono({
	fallback: ["monospace", "Roboto Mono", "ui-monospace", "SFMono-Regular"],
	weight: ["400", "500", "700"]
});
