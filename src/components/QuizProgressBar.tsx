import useQuizContext from '../hooks/useQuizContext';

const QuizProgressBar = () => {
	const { questionNumber } = useQuizContext();
	return (
		<div className="flex h-4 w-full rounded-full bg-d-neutral-100 p-1 dark:bg-d-neutral-500">
			<span
				style={{ width: (questionNumber / 10) * 100 + '%' }}
				className="rounded-full bg-d-purple "
			></span>
		</div>
	);
};

export default QuizProgressBar;
