import type { Config } from 'tailwindcss';

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontSize: {
			sm: ['1.25rem', { lineHeight: '1.5', fontWeight: 400 }],
			base: ['1.5rem', { lineHeight: '1.5', fontWeight: 400 }],
			md: ['1.75rem', { lineHeight: '1', fontWeight: 500 }],
			lg: ['2rem', { lineHeight: '1', fontWeight: 500 }],
			xl: ['4rem', { lineHeight: '1', fontWeight: 300 }],
			'2xl': ['9rem', { lineHeight: '1', fontWeight: 500 }],
		},
		extend: {
			colors: {
				'd-purple': '#A729F5',
				'd-green': '#26D782',
				'd-red': '#EE5454',
				'd-neutral': {
					600: '#313E51',
					500: '#3B4D66',
					400: '#626C7F',
					300: '#ABC1E1',
					200: '#F4F6FA',
					100: '#ffffff',
				},
			},
			fontFamily: {
				sans: ['Rubik', 'sans-serif'],
			},
			backgroundImage: {
				'mobile-light':
					"url('./assets/images/pattern-background-mobile-light.svg')",
				'mobile-dark':
					"url('./assets/images/pattern-background-mobile-dark.svg')",
				'tablet-light':
					"url('./assets/images/pattern-background-tablet-light.svg')",
				'tablet-dark':
					"url('./assets/images/pattern-background-tablet-dark.svg')",
				'desktop-light':
					"url('./assets/images/pattern-background-desktop-light.svg')",
				'desktop-dark':
					"url('./assets/images/pattern-background-desktop-dark.svg')",
			},
		},
	},
	plugins: [],
} satisfies Config;
