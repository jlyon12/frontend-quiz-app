import { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

const useQuizContext = () => {
	const context = useContext(QuizContext);

	if (!context) {
		throw Error('QuizContext must be used inside of a QuizContextProvider');
	}
	return context;
};

export default useQuizContext;
