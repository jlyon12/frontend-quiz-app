interface Props {
	questionNumber: number;
}
const QuizProgressBar = ({ questionNumber }: Props) => {
	return (
		<div className="flex h-4 w-full rounded-full bg-d-neutral-500 p-1">
			<span
				style={{ width: (questionNumber / 10) * 100 + '%' }}
				className="rounded-full bg-d-purple "
			></span>
		</div>
	);
};

export default QuizProgressBar;
