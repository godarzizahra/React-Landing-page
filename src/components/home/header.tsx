import { useState } from "react";
import MenuIcon from "../../../src/assets/svgs/menu-svgrepo-com.svg";
import { Button } from "./shared/shared";

export function Header() {
	const [open, setOpen] = useState(false);

	return (
		<header className="w-full flex items-center justify-between  px-20 py-5 sm:px-5 lg:px-20 relative">
			<div className="flex items-baseline-last gap-1">
				<span className="text-[20px] lg:text-[26.4px] sm:text-[20px] font-bold">
					Fashion Haus
				</span>
				<span className="bg-[#2945FF] w-4 h-1"></span>
			</div>
			<div className="hidden md:flex gap-6">
				<span>Latest News</span>
				<span>Shopping</span>
				<span>Blog</span>
				<span>Community</span>
				<span>Reviews</span>
				<Button text="Members" />
			</div>
			<button
				onClick={() => setOpen(!open)}
				className="md:hidden flex flex-col gap-1"
			>
				<img className="w-10" src={MenuIcon} alt="" />
			</button>
			<div
				className={`
		fixed inset-0 text-white bg-[#2945FF] z-50 pt-5
		flex flex-col items-center  gap-6
		transition-all duration-300 ease-in-out
		md:hidden
		${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
	`}
			>
				<button
					onClick={() => setOpen(false)}
					className="absolute top-2 right-6 text-3xl"
				>
					×
				</button>

				<span className="text-2xl">Latest News</span>
				<span className="text-2xl">Shopping</span>
				<span className="text-2xl">Blog</span>
				<span className="text-2xl">Community</span>
				<span className="text-2xl">Reviews</span>
			</div>
		</header>
	);
}
