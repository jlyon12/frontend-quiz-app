interface Props {
	handleClick: () => void;
	label: string;
}

const Button = ({ label, handleClick }: Props) => {
	return (
		<button
			onClick={handleClick}
			className="inline-flex h-14 items-center justify-center  self-stretch rounded-xl bg-d-purple p-3 text-[18px] font-medium text-d-neutral-100 shadow-md hover:bg-d-neutral-300 md:rounded-3xl md:p-8 md:text-md"
		>
			<p>{label}</p>
		</button>
	);
};

export default Button;
