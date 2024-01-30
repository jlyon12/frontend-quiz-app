import { QuizTopic, TOPICS } from './types';

export const isQuizTopic = (topic: string): topic is QuizTopic => {
	return TOPICS.includes(topic as QuizTopic);
};
