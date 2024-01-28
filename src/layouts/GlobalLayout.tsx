import Header from '../components/Header';
const GlobalLayout = ({ children }: React.PropsWithChildren) => {
	return (
		<div className=" min-h-dvh bg-d-neutral-100 bg-mobile-light bg-cover bg-center bg-no-repeat px-6 pt-4 md:bg-tablet-light md:px-16 md:pt-12 lg:bg-desktop-light dark:bg-d-neutral-500 dark:bg-mobile-dark dark:md:bg-tablet-dark  dark:lg:bg-desktop-dark">
			<Header />
			<main>{children}</main>
			<footer></footer>
		</div>
	);
};

export default GlobalLayout;
