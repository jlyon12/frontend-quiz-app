export interface Quiz {
	title: string;
	icon: string;
	questions: Question[];
}

interface Question {
	question: string;
	options: [string, string, string, string];
	answer: string;
}
