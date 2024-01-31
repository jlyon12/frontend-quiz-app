import { createContext, useState } from 'react';
import { QuizTopic } from '../types';

interface QuizContextType {
	activeQuiz: QuizTopic | null;
	setActiveQuiz: React.Dispatch<React.SetStateAction<QuizTopic | null>>;
	correctAnswers: number;
	setCorrectAnswers: React.Dispatch<React.SetStateAction<number>>;
	questionNumber: number;
	setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
	resetQuiz: () => void;
}

const QuizContext = createContext<QuizContextType | null>(null);

const QuizContextProvider = ({ children }: React.PropsWithChildren) => {
	const [activeQuiz, setActiveQuiz] = useState<QuizTopic | null>(null);
	const [correctAnswers, setCorrectAnswers] = useState<number>(0);
	const [questionNumber, setQuestionNumber] = useState(1);

	const resetQuiz = () => {
		setActiveQuiz(null);
		setQuestionNumber(1);
		setCorrectAnswers(0);
	};

	return (
		<QuizContext.Provider
			value={{
				activeQuiz,
				setActiveQuiz,
				correctAnswers,
				setCorrectAnswers,
				questionNumber,
				setQuestionNumber,
				resetQuiz,
			}}
		>
			{children}
		</QuizContext.Provider>
	);
};

export { QuizContext, QuizContextProvider };
