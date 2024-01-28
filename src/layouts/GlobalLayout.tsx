import Header from '../components/Header';
import useDarkModeContext from '../hooks/useDarkModeContext';

const GlobalLayout = ({ children }: React.PropsWithChildren) => {
	const { darkMode } = useDarkModeContext();
	return (
		<div className={darkMode ? 'dark' : ''}>
			<div className="min-h-dvh bg-d-neutral-100 bg-mobile-light bg-cover bg-center bg-no-repeat px-6 pt-4 dark:bg-d-neutral-500 dark:bg-mobile-dark md:bg-tablet-light md:px-16 md:pt-12 dark:md:bg-tablet-dark lg:bg-desktop-light  dark:lg:bg-desktop-dark">
				<Header />
				<main>{children}</main>
				<footer></footer>
			</div>
		</div>
	);
};

export default GlobalLayout;
