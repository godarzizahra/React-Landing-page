type ButtonProps = {
	text?: string;
	onClick?: () => void;
	className?: string;
};

export function Button({
	text = "Click Me",
	onClick,
	className = "",
}: ButtonProps) {
	return (
		<button
			onClick={onClick}
			className={`
        bg-[#2945FF] text-white px-8 py-3 rounded-full font-medium
        transition-all duration-300 hover:bg-[#1f37d6] hover:scale-105
        ${className}
      `}
		>
			{text}
		</button>
	);
}
