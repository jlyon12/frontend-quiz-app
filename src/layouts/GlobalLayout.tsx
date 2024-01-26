const GlobalLayout = ({ children }: React.PropsWithChildren) => {
	return (
		<div className="  min-h-dvh bg-d-neutral-100 bg-mobile-light bg-cover bg-center bg-no-repeat px-6 pt-8  md:bg-tablet-light lg:bg-desktop-light dark:bg-d-neutral-500 dark:bg-mobile-dark dark:md:bg-tablet-dark  dark:lg:bg-desktop-dark">
			<header></header>
			<main>{children}</main>
			<footer></footer>
		</div>
	);
};

export default GlobalLayout;
