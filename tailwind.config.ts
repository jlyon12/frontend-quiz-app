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
				purple: '#A729F5',
				green: '#26D782',
				red: '#EE5454',
				neutral: {
					100: '#313E51',
					200: '#3B4D66',
					300: '#626C7F',
					400: '#ABC1E1',
					500: '#F4F6FA',
					600: '#ffffff',
				},
			},
			fontFamily: {
				sans: ['Rubik', 'sans-serif'],
			},
		},
	},
	plugins: [],
} satisfies Config;
