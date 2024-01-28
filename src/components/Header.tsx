import MoonIconDark from '../assets/images/icon-moon-dark.svg?react';
import SunIconDark from '../assets/images/icon-sun-dark.svg?react';
import Switch from './ui/Switch';
const Header = () => {
	return (
		<header className=" flex h-10 items-center justify-between   ">
			<div></div>
			<div className="flex items-center gap-[8px] md:gap-4">
				<MoonIconDark title="moon icon" />
				<Switch isOn={true} handleToggle={() => null} />
				<SunIconDark title="sun icon" />
			</div>
		</header>
	);
};

export default Header;
