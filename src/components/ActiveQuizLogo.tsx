import useQuizContext from '../hooks/useQuizContext';
import HtmlIcon from '../assets/images/icon-html.svg?react';
import CssIcon from '../assets/images/icon-css.svg?react';
import JavaScriptIcon from '../assets/images/icon-js.svg?react';
import AccessibilityIcon from '../assets/images/icon-accessibility.svg?react';
const ActiveQuizLogo = () => {
	const { activeQuiz } = useQuizContext();

	const generateIcon = () => {
		switch (activeQuiz) {
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

	const generateIconBgColor = () => {
		switch (activeQuiz) {
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

	return (
		<div className="md: flex items-center gap-4 text-[18px] font-medium text-d-neutral-600 dark:text-d-neutral-100 md:text-[28px]">
			<div
				style={{
					backgroundColor: generateIconBgColor(),
				}}
				className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg p-1 text-[28px]  md:h-14 md:w-14 md:rounded-xl md:p-2"
			>
				{generateIcon()}
			</div>
			<p>{activeQuiz}</p>
		</div>
	);
};

export default ActiveQuizLogo;
