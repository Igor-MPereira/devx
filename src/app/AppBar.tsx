import { Command, CommandDialog, CommandInput } from "@/components/ui/command";
import Link from "next/link";

function AppBar() {
	return (
		<header className="flex justify-between bg-primary p-3">
			<Link className="text-xl sm:text-2xl md:text-4xl transition-opacity hover:opacity-70" href="/">
				DevXShare
			</Link>

			<CommandDialog>
				<CommandInput placeholder="Search..." className="h-8" />
			</CommandDialog>

			<span>userstuff</span>
		</header>
	);
}

export default AppBar;
