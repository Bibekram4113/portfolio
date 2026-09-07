import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        void: '#020609',
        abyss: '#04090f',
        panel: '#081018',
        bio: {
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
        },
        pulse: {
          400: '#34d399',
          500: '#10b981',
        },
        ink: '#e6edf3',
        muted: '#8ea3b8',
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"Segoe UI"', 'system-ui', 'sans-serif'],
        body: ['Inter', '"Segoe UI"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Cascadia Code"', 'Consolas', 'monospace'],
      },
      animation: {
        marquee: 'marquee 46s linear infinite',
        'marquee-slow': 'marquee 72s linear infinite',
        'marquee-reverse': 'marquee-reverse 58s linear infinite',
        scan: 'scan 4s ease-in-out infinite',
        float: 'float 7s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 3s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        blink: 'blink 1.1s step-end infinite',
        ecg: 'ecg 4.2s linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
        scan: {
          '0%': { top: '4%' },
          '50%': { top: '93%' },
          '100%': { top: '4%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.6)', opacity: '0.8' },
          '100%': { transform: 'scale(1.9)', opacity: '0' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        ecg: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;