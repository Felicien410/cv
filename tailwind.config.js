/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#60a5fa", // blue-400
          light: "#93c5fd",   // blue-300
          dark: "#3b82f6",    // blue-500
        },
        // Couleurs de base
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        cyan: {
          300: '#67e8f9',
          400: '#22d3ee',
        },
        zinc: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        },
        // Couleurs nommées pour le thème
        background: "#000000",
        foreground: "#ffffff",
        card: "#18181b",
        "card-foreground": "#e4e4e7",
        "primary-foreground": "#ffffff",
        "muted": "#3f3f46",
        "muted-foreground": "#a1a1aa",
        "accent": "#27272a",
        "accent-foreground": "#ffffff",
        "destructive": "#ef4444",
        "destructive-foreground": "#ffffff",
        "border": "#27272a",
        "input": "#3f3f46",
        "ring": "#ec4899",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "border-glow": "borderGlow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
        borderGlow: {
          '0%, 100%': { boxShadow: '0 0 5px 0px rgba(219, 39, 119, 0.5)' },
          '50%': { boxShadow: '0 0 15px 2px rgba(219, 39, 119, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}