type LoginModalProps = {
	onClose: () => void;
};

export default function LoginModal({ onClose }: LoginModalProps) {
	return (
		<div className="fixed inset-0 bg-black/9 flex items-center justify-center z-50">
			<div className="bg-white rounded-lg w-11/12 max-w-md p-6 relative">
				<button
					onClick={onClose}
					className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
				>
					&times;
				</button>

				<h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
				<form className="flex flex-col gap-4">
					<input
						type="email"
						placeholder="Email"
						className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
					<input
						type="password"
						placeholder="Password"
						className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
					<button
						type="submit"
						className="bg-[#2945FF] text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
					>
						Login
					</button>
				</form>
			</div>
		</div>
	);
}
