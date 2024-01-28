import { createContext, useState } from 'react';

interface DarkModeContextType {
	darkMode: boolean;
	toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | null>(null);

const DarkModeContextProvider = ({ children }: React.PropsWithChildren) => {
	const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

	const [darkMode, setDarkMode] = useState(prefersDark);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	return (
		<DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
};

export { DarkModeContext, DarkModeContextProvider };
