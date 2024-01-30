import { useState } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';
const fullConfig = resolveConfig(tailwindConfig);
import quizzes from '../data/quizzes';
import CorrectIcon from '../assets/images/icon-correct.svg?react';
import IncorrectIcon from '../assets/images/icon-incorrect.svg?react';
import QuizProgressBar from '../components/QuizProgressBar';
import QuizControl from '../components/QuizControl';
import Button from '../components/Button';
import { QuizTopic } from '../types';
interface Props {
	activeQuiz: QuizTopic;
	questionNumber: number;
	setActiveQuiz: React.Dispatch<React.SetStateAction<QuizTopic | null>>;
	setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
	setCorrectAnswers: React.Dispatch<React.SetStateAction<number>>;
}

enum OptionLetter {
	A = 0,
	B,
	C,
	D,
}

const QuestionPage = ({
	activeQuiz,
	questionNumber,
	setCorrectAnswers,
	setQuestionNumber,
}: Props) => {
	const quizData = quizzes.filter((q) => q.title === activeQuiz)[0];
	const [error, setError] = useState<boolean | null>(null);
	const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
	const { question, options, answer } = quizData.questions[questionNumber - 1];

	const handleAnswerSelect = (option: string) => {
		setError(null);
		if (isSubmitted) return;
		setSelectedAnswer(option);
	};

	const handleSubmit = () => {
		if (!selectedAnswer) {
			return setError(true);
		}
		const answerIsCorrect = selectedAnswer === answer;
		if (answerIsCorrect) {
			setCorrectAnswers((n) => n + 1);
		}
		setIsSubmitted(true);
	};

	const handleNextQuestion = () => {
		setQuestionNumber(questionNumber + 1);
		setIsSubmitted(false);
		setSelectedAnswer(null);
	};

	const generateResultIcon = (option: string): React.ReactNode | null => {
		switch (true) {
			case isSubmitted && option === selectedAnswer && option === answer:
				return <CorrectIcon />;
			case isSubmitted && option === selectedAnswer && option !== answer:
				return <IncorrectIcon />;
			case isSubmitted && option === answer:
				return <CorrectIcon />;

			default:
				return null;
		}
	};

	const generateBorderColor = (option: string): string | null => {
		switch (true) {
			case isSubmitted && option === selectedAnswer && option === answer:
				return `3px solid ${fullConfig.theme.colors['d-green']}`;
			case isSubmitted && option === selectedAnswer && option !== answer:
				return `3px solid ${fullConfig.theme.colors['d-red']}`;
			case option === selectedAnswer:
				return `3px solid ${fullConfig.theme.colors['d-purple']}`;
			default:
				return null;
		}
	};

	const generateAnswerIconColor = (option: string): string | undefined => {
		switch (true) {
			case isSubmitted && option === selectedAnswer && option === answer:
				return fullConfig.theme.colors['d-green'];
			case isSubmitted && option === selectedAnswer && option !== answer:
				return fullConfig.theme.colors['d-red'];
			default:
				return undefined;
		}
	};

	return (
		<>
			<div className="flex flex-col-reverse justify-end xl:max-h-[452px]">
				<QuizProgressBar questionNumber={questionNumber} />
				<h1 className=" mb-6 mt-4 text-[20px] font-medium leading-[1.2] text-d-neutral-600 dark:text-d-neutral-100 md:mb-10 md:mt-[27px] md:text-[36px] md:text-lg xl:mb-auto">
					{question}
				</h1>

				<p className="!text-[14px] text-sm italic text-d-neutral-400 dark:text-d-neutral-300">
					Question {questionNumber} of 10
				</p>
			</div>
			<div className="  mt-10 flex flex-col gap-3   md:mt-16  md:gap-6 xl:mx-0 xl:mt-0 xl:max-w-none">
				{options.map((o, i) => (
					<QuizControl
						key={o}
						icon={Object.entries(OptionLetter)[i][1]}
						iconBgHexColor={generateAnswerIconColor(o)}
						text={o}
						handleClick={() => handleAnswerSelect(o)}
						borderColor={generateBorderColor(o)}
						resultIcon={generateResultIcon(o)}
					/>
				))}

				{!isSubmitted ? (
					<Button label="Submit Answer" handleClick={handleSubmit} />
				) : (
					<Button
						label={questionNumber < 10 ? 'Next Question' : 'Show Results'}
						handleClick={handleNextQuestion}
					/>
				)}
				{error && (
					<div className="mx-auto flex items-center gap-2 text-[18px] text-d-red dark:text-d-neutral-100 md:text-base">
						<IncorrectIcon />
						<p>Please select an answer</p>
					</div>
				)}
			</div>
		</>
	);
};

export default QuestionPage;
