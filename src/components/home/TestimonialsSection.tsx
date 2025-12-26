export function TestimonialsSection() {
	return (
		<section className="w-full py-16 px-5 sm:px-10 lg:px-20 bg-[#F7F8FF]">
			<div className="max-w-7xl mx-auto flex flex-col gap-12">
				{/* Title */}
				<div className="text-center">
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#000545]">
						What our customers say
					</h2>
					<p className="text-sm sm:text-base text-[#393F4D] mt-3">
						Real stories from real people who love our products.
					</p>
				</div>

				{/* Slider */}
				<div
					className="
            flex gap-6 overflow-x-auto scroll-smooth
            snap-x snap-mandatory
            md:grid md:grid-cols-3 md:gap-8
            md:overflow-visible
          "
				>
					{/* Card 1 */}
					<div className="min-w-[80%] sm:min-w-[60%] md:min-w-0 snap-center bg-white p-6 rounded-2xl shadow-sm flex flex-col gap-4">
						<div className="flex items-center gap-4">
							<img
								src="../../src/assets/image/image 12.png"
								alt="Customer"
								className="w-12 h-12 rounded-full object-cover"
							/>
							<div>
								<p className="font-semibold text-[#000545]">Emily Carter</p>
								<p className="text-sm text-[#393F4D]">Fashion Blogger</p>
							</div>
						</div>
						<p className="text-sm text-[#393F4D] leading-relaxed">
							“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
							felis tellus, malesuada vel cursus.”
						</p>
					</div>

					{/* Card 2 */}
					<div className="min-w-[80%] sm:min-w-[60%] md:min-w-0 snap-center bg-white p-6 rounded-2xl shadow-sm flex flex-col gap-4">
						<div className="flex items-center gap-4">
							<img
								src="../../src/assets/image/image 12 (1).png"
								alt="Customer"
								className="w-12 h-12 rounded-full object-cover"
							/>
							<div>
								<p className="font-semibold text-[#000545]">Sophia Lee</p>
								<p className="text-sm text-[#393F4D]">Content Creator</p>
							</div>
						</div>
						<p className="text-sm text-[#393F4D] leading-relaxed">
							“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
							felis tellus, malesuada vel cursus.”
						</p>
					</div>

					{/* Card 3 */}
					<div className="min-w-[80%] sm:min-w-[60%] md:min-w-0 snap-center bg-white p-6 rounded-2xl shadow-sm flex flex-col gap-4">
						<div className="flex items-center gap-4">
							<img
								src="../../src/assets/image/image 12 (2).png"
								alt="Customer"
								className="w-12 h-12 rounded-full object-cover"
							/>
							<div>
								<p className="font-semibold text-[#000545]">Olivia Brown</p>
								<p className="text-sm text-[#393F4D]">Stylist</p>
							</div>
						</div>
						<p className="text-sm text-[#393F4D] leading-relaxed">
							“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
							felis tellus, malesuada vel cursus.”
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
