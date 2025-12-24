export function Herosection() {
	return (
		<div className="w-full flex items-center justify-between gap-5 px-20 py-3">
			<div className="flex flex-col gap-5">
				<h1 className="text-6xl max-w-10/12">
					Fashion fits from the big brands.
				</h1>
				<p className="min-w-10/12 text-sm">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce felis
					tellus, malesuada vel cursus et, sodales sit amet eros. Integer sed
					justo ac dolor molestie.
				</p>
			</div>
			<div className="w-full relative overflow-visible py-7">
				<img
					src="../../src/assets/svgs/Group 3.svg"
					alt=""
					className="absolute -top-1 -left-6 w-24"
				/>
				<img
					src="../../src/assets/image/solesavy-ur0-4ibMm54-unsplash 1.png"
					alt=""
					className="w-full relative"
				/>
				<img
					src="../../src/assets/svgs/Group 3.svg"
					alt=""
					className="absolute -bottom-1 -right-6 w-24"
				/>
			</div>
		</div>
	);
}
