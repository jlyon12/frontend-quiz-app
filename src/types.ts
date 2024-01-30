export interface Quiz {
	title: QuizTopic;
	icon: string;
	questions: Question[];
}

interface Question {
	question: string;
	options: [string, string, string, string];
	answer: string;
}

export const TOPICS = ['HTML', 'CSS', 'JavaScript', 'Accessibility'] as const;

export type QuizTopic = (typeof TOPICS)[number];
