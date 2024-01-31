import MoonIconDark from '../assets/images/icon-moon-dark.svg?react';
import MoonIconLight from '../assets/images/icon-moon-light.svg?react';
import SunIconDark from '../assets/images/icon-sun-dark.svg?react';
import SunIconLight from '../assets/images/icon-sun-light.svg?react';

import useDarkModeContext from '../hooks/useDarkModeContext';
import ActiveQuizLogo from './ActiveQuizLogo';
import Switch from './Switch';
const Header = () => {
	const { darkMode, toggleDarkMode } = useDarkModeContext();

	return (
		<header className=" flex h-10 items-center justify-between    ">
			<ActiveQuizLogo />
			<div className="flex items-center gap-[8px] md:gap-4">
				{darkMode ? (
					<MoonIconLight title="moon icon" />
				) : (
					<MoonIconDark title="moon icon" />
				)}
				<Switch isOn={darkMode} handleToggle={toggleDarkMode} />
				{darkMode ? (
					<SunIconLight title="sun icon" />
				) : (
					<SunIconDark title="sun icon" />
				)}
			</div>
		</header>
	);
};

export default Header;
