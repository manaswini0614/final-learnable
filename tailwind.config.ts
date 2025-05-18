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
					DEFAULT: '#17B978',
					foreground: '#ffffff',
					light: '#1FE491',
					dark: '#129B63',
					glow: '#1FE491'
				},
				secondary: {
					DEFAULT: '#086972',
					foreground: '#ffffff',
					light: '#0A8C98',
					dark: '#064C53'
				},
				accent: {
					DEFAULT: '#071A52',
					foreground: '#ffffff',
					light: '#0B2477',
					dark: '#040F2D'
				},
				success: {
					DEFAULT: '#17B978',
					light: '#1FE491',
					dark: '#129B63'
				},
				warning: {
					DEFAULT: '#FFC107',
					light: '#FFD54F',
					dark: '#FFA000'
				},
				destructive: {
					DEFAULT: '#FF6B6B',
					foreground: '#ffffff',
					light: '#FF8A8A',
					dark: '#FF4C4C'
				},
				sims: {
					green: '#17B978',
					teal: '#086972',
					blue: '#071A52',
					plumbob: '#17B978',
					ui: {
						light: '#FFFFFF',
						DEFAULT: '#F0F2F5',
						dark: '#E4E6E9',
						border: '#D8DADF'
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
				'glow': {
					'0%, 100%': { 
						'box-shadow': '0 0 20px 0 rgba(23, 185, 120, 0.5)',
						transform: 'scale(1)'
					},
					'50%': { 
						'box-shadow': '0 0 30px 0 rgba(23, 185, 120, 0.7)',
						transform: 'scale(1.05)'
					}
				},
				'bounce-subtle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				'rotate-plumbob': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'plumbob-glow': {
					'0%, 100%': { 
						'filter': 'brightness(1) drop-shadow(0 0 10px rgba(23, 185, 120, 0.5))',
						transform: 'scale(1)'
					},
					'50%': { 
						'filter': 'brightness(1.2) drop-shadow(0 0 20px rgba(23, 185, 120, 0.7))',
						transform: 'scale(1.1)'
					}
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
				'glow': 'glow 2s ease-in-out infinite',
				'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
				'rotate-plumbob': 'rotate-plumbob 4s linear infinite',
				'plumbob-glow': 'plumbob-glow 2s ease-in-out infinite',
				'hover-card': 'hover-card 0.3s ease-out forwards'
			},
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'sims': ['Righteous', 'Inter', 'sans-serif']
			},
			boxShadow: {
				'sims': '0 8px 16px -4px rgba(23, 185, 120, 0.15), 0 0 0 1px rgba(23, 185, 120, 0.05)',
				'sims-hover': '0 12px 20px -4px rgba(23, 185, 120, 0.2), 0 0 0 2px rgba(23, 185, 120, 0.1)',
				'plumbob': '0 0 20px rgba(23, 185, 120, 0.4)',
				'card': '0 4px 8px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(23, 185, 120, 0.05)',
				'card-hover': '0 8px 16px rgba(0, 0, 0, 0.1), 0 0 0 2px rgba(23, 185, 120, 0.1)'
			},
			backgroundImage: {
				'sims-gradient': 'linear-gradient(135deg, #17B978 0%, #086972 50%, #071A52 100%)',
				'sims-pattern': 'repeating-linear-gradient(45deg, rgba(23, 185, 120, 0.1) 0%, rgba(8, 105, 114, 0.1) 10%, rgba(7, 26, 82, 0.1) 20%)',
				'plumbob-pattern': 'radial-gradient(circle at center, #17B978 0%, transparent 70%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
