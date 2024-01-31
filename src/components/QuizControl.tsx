import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';
const fullConfig = resolveConfig(tailwindConfig);

interface BaseProps {
	icon: React.ReactNode | string;
	iconBgHexColor: string | undefined;
	text: string;
	handleClick: () => void;
}

interface AnswerOptionProps extends BaseProps {
	borderColor: string | null;
	resultIcon: React.ReactNode | null;
}

type QuizControlProps = BaseProps | AnswerOptionProps;

const QuizControl = (props: QuizControlProps) => {
	const { icon, text, iconBgHexColor, handleClick } = props;
	const { borderColor } =
		'borderColor' in props ? props : { borderColor: null };
	const { resultIcon } = 'resultIcon' in props ? props : { resultIcon: null };

	return (
		// Opted for several inline style props as the style is dependent on the props passed in and Tailwind CSS does not allow for string interpolation in class names. Normally try to avoid
		<button
			onClick={handleClick}
			style={{
				border: borderColor ? borderColor : '',
			}}
			className="flex w-full items-center gap-4 rounded-xl bg-d-neutral-100  p-3 shadow-md hover:bg-d-neutral-300 dark:bg-d-neutral-500 dark:hover:bg-d-neutral-300 md:gap-8 md:rounded-3xl xl:p-[18px_20px]"
		>
			<div
				style={{
					backgroundColor: iconBgHexColor
						? iconBgHexColor
						: fullConfig.theme.colors['d-neutral'][200],
					color: iconBgHexColor
						? fullConfig.theme.colors['d-neutral'][100]
						: fullConfig.theme.colors['d-neutral'][400],
				}}
				className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg p-1 text-[28px]  md:h-14 md:w-14 md:rounded-xl md:p-2"
			>
				{icon}
			</div>

			<p className=" text-left text-[18px] font-medium text-d-neutral-600 dark:text-d-neutral-100 md:text-[28px]">
				{text}
			</p>
			<div className="ml-auto flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg p-1 text-[28px] text-d-neutral-400 md:h-14 md:w-14 md:rounded-xl md:p-2">
				{resultIcon}
			</div>
		</button>
	);
};

export default QuizControl;
