/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
  			center: true,
  			padding: '1.25rem',
  			screens: {
  				'2xl': '1240px',
  			}
  		},
      screens: {
        'md': "820px"
      }
    },
  },
  plugins: [],
}

