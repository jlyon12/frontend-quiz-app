import { useState } from 'react';
import StartPage from './pages/StartPage';
import QuestionPage from './pages/QuestionPage';
import { isQuizTopic } from './utils';
import { QuizTopic } from './types';
import ResultPage from './pages/ResultPage';

const App = () => {
	const [activeQuiz, setActiveQuiz] = useState<QuizTopic | null>(null);
	const [correctAnswers, setCorrectAnswers] = useState<number>(0);
	const [questionNumber, setQuestionNumber] = useState(1);

	const resetQuiz = () => {
		setActiveQuiz(null);
		setQuestionNumber(1);
		setCorrectAnswers(0);
	};

	switch (true) {
		case activeQuiz && questionNumber > 10:
			return (
				<ResultPage
					activeQuiz={activeQuiz}
					score={correctAnswers}
					resetQuiz={resetQuiz}
				/>
			);

		case activeQuiz && isQuizTopic(activeQuiz) === true && questionNumber <= 10:
			return (
				<QuestionPage
					activeQuiz={activeQuiz}
					setCorrectAnswers={setCorrectAnswers}
					questionNumber={questionNumber}
					setQuestionNumber={setQuestionNumber}
					setActiveQuiz={setActiveQuiz}
				/>
			);
		default:
			return <StartPage setActiveQuiz={setActiveQuiz} />;
	}
};

export default App;
