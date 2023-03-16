/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          }
        },

        'fade-in-down': {
          '0%': {
              opacity: '0',
              transform: 'translateY(-10px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateY(0)'
          }
        },

        'fade-in-right': {
            '0%': {
              opacity: '0',
              transform: 'translateX(-80px)'
            },
            '100%': {
              opacity: '1',
              transform: 'translateX(0)'
            }
          },

          'fade-in-left': {
            '0%': {
                opacity: '0',
                transform: 'translateX(80px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateX(0)'
            },
          }
      },
      animation: {
        'fade-in': 'fade-in 3s, easy-in',
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-in-right': 'fade-in-right 1s ease-out',
        'fade-in-left': 'fade-in-left 1s ease-out',
      },
      backgroundImage: {
        'tutoring': "url('/src/assets/tutoring.png')",
        'about-me-portrait': "url('/src/assets/michael_running_portrait.png')"
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
