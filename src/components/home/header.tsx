import { useState } from "react";

export function Header() {
	const [open, setOpen] = useState(false);

	return (
		<header className="w-full flex items-center justify-between px-20 py-3 relative">
			<div className="flex items-baseline-last gap-1">
				<span className="text-[26.4px] font-bold">Fashion Haus</span>
				<span className="bg-[#2945FF] w-4 h-1"></span>
			</div>
			<div className="hidden md:flex gap-6">
				<span>Latest News</span>
				<span>Shopping</span>
				<span>Blog</span>
				<span>Community</span>
				<span>Reviews</span>
			</div>
			<button
				onClick={() => setOpen(!open)}
				className="md:hidden flex flex-col gap-1"
			>
				<span className="w-6 h-0.5 bg-black"></span>
				<span className="w-6 h-0.5 bg-black"></span>
				<span className="w-6 h-0.5 bg-black"></span>
			</button>
			<div
				className={`
					absolute top-full left-0 w-full bg-white shadow-md
					flex flex-col items-center gap-4 py-4
					transform transition-all duration-300 ease-in-out
					md:hidden
					${
						open
							? "opacity-100 translate-y-0 pointer-events-auto"
							: "opacity-0 -translate-y-4 pointer-events-none"
					}
				`}
			>
				<span>Latest News</span>
				<span>Shopping</span>
				<span>Blog</span>
				<span>Community</span>
				<span>Reviews</span>
			</div>
		</header>
	);
}
