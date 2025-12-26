import { Button } from "./shared/shared";

export function RepeatCTASection() {
	return (
		<section className="w-full py-20 px-5 sm:px-10 lg:px-20 bg-[#000545]">
			<div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-8">
				<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
					Ready to upgrade your style?
				</h2>

				<p className="text-sm sm:text-base text-[#D1D4FF] max-w-xl">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, odio
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, odio
				</p>

				<Button text="Get Started" />
			</div>
		</section>
	);
}
