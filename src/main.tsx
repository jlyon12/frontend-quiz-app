import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalLayout from './layouts/GlobalLayout.tsx';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<GlobalLayout>
			<App />
		</GlobalLayout>
	</React.StrictMode>
);
