import { cn } from "@/lib/utils";
import SessionProvider from "@/providers/session";
import ToastContainer from "@/providers/toast";
import TRPCProvider from "@/providers/trpc";
import { sonoFont } from "@/styles/font";
import "@/styles/globals.css";
import { type Metadata } from "next/types";
import { type PropsWithChildren } from "react";
import AppBar from "./AppBar";

export const metadata: Metadata = {
	title: "DevX Share - Share your code with your friends",
	description: "DevX Share is a platform to share your code with your friends"
};

function RootLayout({ children }: PropsWithChildren) {
	return (
		<html>
			<body className={cn("bg-gray-800 text-white", sonoFont.className)}>
				<ToastContainer
					containerId="root"
					closeOnClick={false}
					limit={6}
					newestOnTop
					pauseOnFocusLoss={false}
					position="top-center"
					theme="dark"
				/>
				<SessionProvider>
					<TRPCProvider>
						<AppBar />
						<main className="flex justify-center p-12">{children}</main>
					</TRPCProvider>
				</SessionProvider>
			</body>
		</html>
	);
}

export default RootLayout;
