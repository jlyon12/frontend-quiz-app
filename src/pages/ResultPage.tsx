import Button from '../components/Button';
import useQuizContext from '../hooks/useQuizContext';
import ActiveQuizLogo from '../components/ActiveQuizLogo';
const ResultPage = () => {
	const { correctAnswers, resetQuiz } = useQuizContext();
	return (
		<>
			<div>
				<h1 className=" !text-[40px] text-xl text-d-neutral-600 dark:text-d-neutral-100 md:!text-[64px]">
					Quiz Completed
					<span className="mt-2 block font-medium">You scored...</span>
				</h1>
			</div>
			<div className=" mt-10 flex flex-col gap-3 text-center  md:mt-16  md:gap-6 xl:mx-0 xl:mt-0 xl:max-w-none">
				<div className="grid gap-4 rounded-xl bg-d-neutral-500 p-8 md:gap-10 md:p-12">
					<ActiveQuizLogo />
					<p className="grid gap-4 text-center text-[18px] dark:text-d-neutral-300 md:text-base">
						<span className=" text-2xl text-[88px] text-d-neutral-600 dark:text-d-neutral-100 md:text-[144px]">
							{correctAnswers}
						</span>{' '}
						out of 10
					</p>
				</div>
				<Button label="Play Again" handleClick={resetQuiz} />
			</div>
		</>
	);
};

export default ResultPage;
