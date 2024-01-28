import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';
const fullConfig = resolveConfig(tailwindConfig);

interface Props {
	icon: React.ReactNode | string;
	iconBgHexColor: string | undefined;
	text: string;
}

const QuizControl = ({ icon, text, iconBgHexColor }: Props) => {
	console.log(iconBgHexColor);
	return (
		<button className="flex w-full items-center gap-4 rounded-xl  bg-d-neutral-100 p-3 shadow-md dark:bg-d-neutral-500 md:gap-8 md:rounded-3xl xl:p-5">
			<div
				style={{
					backgroundColor: iconBgHexColor
						? iconBgHexColor
						: fullConfig.theme.colors['d-neutral'][200],
				}}
				className="flex h-10 w-10 items-center justify-center rounded-lg p-1 md:h-14 md:w-14 md:rounded-xl md:p-2"
			>
				{icon}
			</div>

			<p className="text-[18px] text-md dark:text-d-neutral-100 md:text-[28px]">
				{text}
			</p>
		</button>
	);
};

export default QuizControl;
