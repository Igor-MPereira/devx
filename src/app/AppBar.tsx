import Link from "next/link";

function AppBar() {
	return (
		<header className="bg-primary px-10 py-5 ">
			<span className="text-2xl transition-opacity hover:opacity-70">
				<Link href="/">DevXShare</Link>
			</span>
		</header>
	);
}

export default AppBar;
