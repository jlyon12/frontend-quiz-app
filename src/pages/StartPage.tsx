import QuizControl from '../components/QuizControl';
import quizzes from '../data/quizzes';
import HtmlIcon from '../assets/images/icon-html.svg?react';
import CssIcon from '../assets/images/icon-css.svg?react';
import JavaScriptIcon from '../assets/images/icon-js.svg?react';
import AccessibilityIcon from '../assets/images/icon-accessibility.svg?react';
import { QuizTopic } from '../types';
import useQuizContext from '../hooks/useQuizContext';

const generateIcon = (topic: QuizTopic) => {
	switch (topic) {
		case 'Accessibility':
			return <AccessibilityIcon />;
		case 'CSS':
			return <CssIcon />;
		case 'JavaScript':
			return <JavaScriptIcon />;
		case 'HTML':
			return <HtmlIcon />;
	}
};
const generateIconBgColor = (topic: QuizTopic) => {
	switch (topic) {
		case 'Accessibility':
			return '#F6E7FF';
		case 'CSS':
			return '#E0FDEF';
		case 'JavaScript':
			return '#EBF0FF';
		case 'HTML':
			return '#FFF1E9';
	}
};

const StartPage = () => {
	const { setActiveQuiz } = useQuizContext();
	return (
		<>
			<div>
				<h1 className=" !text-[40px] text-xl text-d-neutral-600 dark:text-d-neutral-100 md:!text-[64px]">
					Welcome to the{' '}
					<span className="mt-2 block font-medium">Frontend Quiz!</span>
				</h1>
				<p className=" mt-4 text-[14px] text-sm italic text-d-neutral-400 dark:text-d-neutral-300  md:text-[20px] xl:mt-12">
					Pick a subject to get started.
				</p>
			</div>
			<div className="  mt-10 flex flex-col gap-3  md:mt-16  md:gap-6 xl:mx-0 xl:mt-0 xl:max-w-none">
				{quizzes.map((q) => (
					<QuizControl
						key={q.title}
						text={q.title}
						icon={generateIcon(q.title)}
						iconBgHexColor={generateIconBgColor(q.title)}
						handleClick={() => setActiveQuiz(q.title)}
					/>
				))}
			</div>
		</>
	);
};

export default StartPage;
