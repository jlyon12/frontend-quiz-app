import React from 'react';
import ReactDOM from 'react-dom/client';
import { DarkModeContextProvider } from './context/DarkModeContext.tsx';
import { QuizContextProvider } from './context/QuizContext.tsx';
import GlobalLayout from './layouts/GlobalLayout.tsx';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<DarkModeContextProvider>
			<QuizContextProvider>
				<GlobalLayout>
					<App />
				</GlobalLayout>
			</QuizContextProvider>
		</DarkModeContextProvider>
	</React.StrictMode>
);
