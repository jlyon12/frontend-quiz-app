import useQuizContext from './hooks/useQuizContext';
import StartPage from './pages/StartPage';
import QuestionPage from './pages/QuestionPage';
import ResultPage from './pages/ResultPage';
import { isQuizTopic } from './utils';

const App = () => {
	const { activeQuiz, questionNumber } = useQuizContext();

	switch (true) {
		case activeQuiz && questionNumber > 10:
			return <ResultPage />;

		case activeQuiz && isQuizTopic(activeQuiz) === true && questionNumber <= 10:
			return <QuestionPage />;
		default:
			return <StartPage />;
	}
};

export default App;
