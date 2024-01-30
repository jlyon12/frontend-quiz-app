interface Props {
	isOn: boolean;
	handleToggle: () => void;
}

const Switch = ({ isOn, handleToggle }: Props) => {
	return (
		<label className="relative inline-flex cursor-pointer items-center">
			<input
				type="checkbox"
				className="peer sr-only"
				checked={isOn}
				onChange={handleToggle}
			/>
			<div className="peer-checked: peer h-5 w-8 rounded-full border-none bg-d-purple p-1 after:absolute  after:start-[4px] after:top-[4px]  after:h-3 after:w-3 after:rounded-full after:bg-white  after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-focus:outline-none md:h-7 md:w-12 md:after:start-[4px] md:after:top-[4px] md:after:h-5  md:after:w-5 rtl:peer-checked:after:-translate-x-full"></div>
		</label>
	);
};

export default Switch;
