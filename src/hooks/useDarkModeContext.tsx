import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

const useDarkModeContext = () => {
	const context = useContext(DarkModeContext);

	if (!context) {
		throw Error(
			'DarkModeContext must be used inside of a DarkModeContextProvider'
		);
	}
	return context;
};

export default useDarkModeContext;
