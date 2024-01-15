/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
	content: ['./src/**/*.{html,js,jsx}'],
	theme: {
		extend: {
			screens: {
				xs: '475px',
			},
			fontFamily: {
				gsl: ['GeosansLight', 'sans-serif'],
				als: ['"Alumni Sans"', 'sans-serif'],
			},
			colors: {
				c1: '', // 60%
				c2: '', // 30%
				c3: '', // 10%
			},
		},
	},
	plugins: [],
}
