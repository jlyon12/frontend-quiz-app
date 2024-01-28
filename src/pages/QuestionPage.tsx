import { useState } from 'react';
import quizzes from '../data/quizzes';
import QuizControl from '../components/QuizControl';
import Button from '../components/ui/Button';
interface Props {
	activeQuiz: 'HTML' | 'CSS' | 'Javascript' | 'Accessibility';
}

enum OptionLetter {
	A = 0,
	B,
	C,
	D,
}

const QuestionPage = ({ activeQuiz }: Props) => {
	const quizData = quizzes.filter((q) => q.title === activeQuiz)[0];
	const [questionNumber, setQuestionNumber] = useState(5);
	const { question, options, answer } = quizData.questions[questionNumber - 1];
	return (
		<>
			<div className="flex flex-col-reverse justify-end gap-4 md:gap-[27px]">
				<h1 className=" text-[20px] font-medium leading-[1.2] text-d-neutral-600 dark:text-d-neutral-100 md:text-[36px] md:text-lg">
					{question}
				</h1>
				<p className="!text-[14px] text-sm italic text-d-neutral-400 dark:text-d-neutral-300">
					Question {questionNumber} of 10
				</p>
			</div>
			<div className="  mt-10 flex flex-col gap-3   md:mt-16  md:gap-6 xl:mx-0 xl:mt-0 xl:max-w-none">
				{options.map((o, i) => (
					<QuizControl
						icon={Object.entries(OptionLetter)[i][1]}
						iconBgHexColor={undefined}
						text={o}
					/>
				))}
				<Button label="Submit Answer" handleClick={() => null} />
			</div>
		</>
	);
};

export default QuestionPage;
