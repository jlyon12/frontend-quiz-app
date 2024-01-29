import QuizControl from '../components/QuizControl';
import quizzes from '../data/quizzes';
import HtmlIcon from '../assets/images/icon-html.svg?react';
import CssIcon from '../assets/images/icon-css.svg?react';
import JavaScriptIcon from '../assets/images/icon-js.svg?react';
import AccessibilityIcon from '../assets/images/icon-accessibility.svg?react';

const iconElementsObject: { [key: string]: React.ReactNode } = {
	HTML: <HtmlIcon />,
	CSS: <CssIcon />,
	JavaScript: <JavaScriptIcon />,
	Accessibility: <AccessibilityIcon />,
};

enum IconColors {
	HTML = '#FFF1E9',
	CSS = '#E0FDEF',
	JavaScript = '#EBF0FF',
	Accessibility = '#F6E7FF',
}

const StartPage = () => {
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
						text={q.title}
						icon={iconElementsObject[q.title]}
						// TODO: Find a way to avoid type assertion. Need to map quiz title to icon color. Enum possibly a poor solution. All types and keys are known and are not based on dynamic data so this is OK for now.
						iconBgHexColor={IconColors[q.title as keyof typeof IconColors]}
						handleClick={() => null}
					/>
				))}
			</div>
		</>
	);
};

export default StartPage;
