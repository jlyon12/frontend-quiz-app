import Header from '../components/Header';
import useDarkModeContext from '../hooks/useDarkModeContext';

const GlobalLayout = ({ children }: React.PropsWithChildren) => {
	const { darkMode } = useDarkModeContext();
	return (
		<div className={darkMode ? 'dark' : ''}>
			<div className="   flex min-h-dvh bg-d-neutral-200 bg-mobile-light  bg-no-repeat px-6 pt-4 dark:bg-d-neutral-600 dark:bg-mobile-dark md:bg-tablet-light  md:px-16 md:pt-12  dark:md:bg-tablet-dark lg:bg-desktop-light dark:lg:bg-desktop-dark xl:bg-cover  xl:bg-center xl:pt-16 ">
				<div className="mx-auto   flex !w-full flex-grow    flex-col gap-4 xl:max-w-[1160px] xl:gap-14 ">
					<Header />
					<main className="  mt-8 gap-10   xl:grid xl:grid-cols-2 ">
						{children}
					</main>
					<footer></footer>
				</div>
			</div>
		</div>
	);
};

export default GlobalLayout;
