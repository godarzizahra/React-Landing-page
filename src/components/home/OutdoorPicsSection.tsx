export function OutdoorPicsSection() {
	return (
		<div
			className="
        w-full flex flex-col
        md:flex-row  
        items-center justify-between
        gap-10
        px-5 sm:px-10 lg:px-20
        py-10
      "
		>
			<div className="flex flex-col gap-20 text-center lg:text-left">
				<span className="text-[#A5AEED]">10/04/2021</span>
				<h1 className="text-3xl sm:text-6xl lg:text-8xl max-w-xl text-[#000545] font-bold">
					How to take the best pics outdoors.
				</h1>

				<div className="flex flex-col gap-8">
					<p className="text-sm sm:text-xl max-w-lg text-[#393F4D]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce felis
						tellus, malesuada vel cursus et, sodales sit amet eros. Integer sed
						justo ac dolor molestie.
					</p>
					<p className="text-sm sm:text-xl max-w-lg text-[#393F4D]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce felis
						tellus, malesuada vel cursus et, sodales sit amet eros. Integer sed
						justo ac dolor molestie.
					</p>
				</div>
			</div>
			<div className="w-full lg:w-1/2 relative py-7 flex justify-center items-center">
				<img
					src="../../src/assets/svgs/Group 3.svg"
					alt=""
					className="hidden lg:block absolute -top-2 -left-2 lg:-left-6 w-16 lg:w-24"
				/>

				<img
					src="../../src/assets/image/Rectangle 9.png"
					alt=""
					className="w-full max-w-xs sm:max-w-sm lg:max-w-full relative z-10"
				/>
			</div>
		</div>
	);
}
