import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#FF69B4',
					foreground: '#ffffff',
					light: '#FF8CC6',
					dark: '#E6007E',
					glow: '#FF8CC6'
				},
				secondary: {
					DEFAULT: '#FF9ECD',
					foreground: '#ffffff',
					light: '#FFC1E0',
					dark: '#FF7AB8'
				},
				accent: {
					DEFAULT: '#E244FF',
					foreground: '#ffffff',
					light: '#F07FFF',
					dark: '#D10DFF'
				},
				success: {
					DEFAULT: '#FF69B4',
					light: '#FF8CC6',
					dark: '#E6007E'
				},
				warning: {
					DEFAULT: '#FFC1E0',
					light: '#FFD4E9',
					dark: '#FFAED7'
				},
				destructive: {
					DEFAULT: '#FF6B6B',
					foreground: '#ffffff',
					light: '#FF8A8A',
					dark: '#FF4C4C'
				},
				barbie: {
					pink: '#FF69B4',
					purple: '#E244FF',
					sparkle: '#FFD4E9',
					ui: {
						light: '#FFF0F6',
						DEFAULT: '#FFE4F0',
						dark: '#FFD4E9',
						border: '#FFBEDE'
					}
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'pulse-soft': {
					'0%, 100%': { opacity: '1', transform: 'scale(1)' },
					'50%': { opacity: '0.8', transform: 'scale(1.05)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'sparkle': {
					'0%, 100%': { 
						transform: 'scale(1) rotate(0deg)',
						opacity: '1'
					},
					'50%': { 
						transform: 'scale(1.2) rotate(180deg)',
						opacity: '0.8'
					}
				},
				'sparkle-glow': {
					'0%, 100%': { 
						'box-shadow': '0 0 20px 0 rgba(255, 105, 180, 0.5)',
						transform: 'scale(1)'
					},
					'50%': { 
						'box-shadow': '0 0 30px 0 rgba(255, 105, 180, 0.7)',
						transform: 'scale(1.1)'
					}
				},
				'bounce-subtle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				'hover-card': {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(-8px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'sparkle': 'sparkle 2s ease-in-out infinite',
				'sparkle-glow': 'sparkle-glow 2s ease-in-out infinite',
				'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
				'hover-card': 'hover-card 0.3s ease-out forwards'
			},
			fontFamily: {
				'barbie': ['Quicksand', 'sans-serif'],
				'barbie-script': ['Dancing Script', 'cursive']
			},
			boxShadow: {
				'barbie': '0 8px 16px -4px rgba(255, 105, 180, 0.15), 0 0 0 1px rgba(255, 105, 180, 0.05)',
				'barbie-hover': '0 12px 20px -4px rgba(255, 105, 180, 0.2), 0 0 0 2px rgba(255, 105, 180, 0.1)',
				'sparkle': '0 0 20px rgba(255, 105, 180, 0.4)',
				'card': '0 4px 8px rgba(255, 105, 180, 0.1), 0 0 0 1px rgba(255, 105, 180, 0.05)',
				'card-hover': '0 8px 16px rgba(255, 105, 180, 0.1), 0 0 0 2px rgba(255, 105, 180, 0.1)'
			},
			backgroundImage: {
				'barbie-gradient': 'linear-gradient(135deg, #FF69B4 0%, #FF9ECD 50%, #E244FF 100%)',
				'barbie-pattern': 'repeating-linear-gradient(45deg, rgba(255, 105, 180, 0.1) 0%, rgba(255, 158, 205, 0.1) 10%, rgba(226, 68, 255, 0.1) 20%)',
				'sparkle-pattern': 'radial-gradient(circle at center, #FF69B4 0%, transparent 70%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
