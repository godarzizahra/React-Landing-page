import { useState } from "react";
import LoginModal from "../LoginModal";
import { Button } from "./shared/shared";

export function HeroSection() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<div
			className="
        w-full flex flex-col-reverse lg:flex-row
        items-center justify-between
        gap-10
        px-5 sm:px-10 lg:px-20
        py-10
      "
		>
			<div className="flex flex-col gap-20 text-center lg:text-left">
				<h1 className="text-3xl sm:text-4xl lg:text-6xl max-w-xl">
					Fashion fits from the big brands.
				</h1>

				<p className="text-sm sm:text-base max-w-lg">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce felis
					tellus, malesuada vel cursus et, sodales sit amet eros. Integer sed
					justo ac dolor molestie.
				</p>
				<div>
					<Button text="Learn more" onClick={() => setIsModalOpen(true)} />
				</div>
			</div>

			<div className="w-full lg:w-1/2 relative py-7 flex justify-center items-center">
				<img
					src="../../src/assets/svgs/Group 3.svg"
					alt=""
					className="hidden lg:block absolute -top-2 -left-2 lg:-left-6 w-16 lg:w-24"
				/>

				<img
					src="../../src/assets/image/solesavy-ur0-4ibMm54-unsplash 1.png"
					alt=""
					className="w-full max-w-xs sm:max-w-sm lg:max-w-full relative z-10"
				/>

				<img
					src="../../src/assets/svgs/Group 3.svg"
					alt=""
					className="hidden lg:block absolute -bottom-2 -right-2 lg:-right-6 w-16 lg:w-24"
				/>
			</div>
			{isModalOpen && <LoginModal onClose={() => setIsModalOpen(false)} />}
		</div>
	);
}
