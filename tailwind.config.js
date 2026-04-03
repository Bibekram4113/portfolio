export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'void': '#050A0F',
        'navy': '#0A1520',
        'card': '#0F1E2E',
        'cyan-primary': '#00E5FF',
        'green-bio': '#00FF9D',
        'amber-warn': '#FFB300',
        'red-alert': '#FF4444',
        'violet-neural': '#9B59B6',
        'text-primary': '#E8F4F8',
        'text-secondary': '#7FA8C0',
        'text-dim': '#3D6070',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        'dm-mono': ['DM Mono', 'monospace'],
        'space-mono': ['Space Mono', 'monospace'],
        'jetbrains-mono': ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(0deg, transparent 24%, rgba(0, 229, 255, 0.04) 25%, rgba(0, 229, 255, 0.04) 26%, transparent 27%, transparent 74%, rgba(0, 229, 255, 0.04) 75%, rgba(0, 229, 255, 0.04) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(0, 229, 255, 0.04) 25%, rgba(0, 229, 255, 0.04) 26%, transparent 27%, transparent 74%, rgba(0, 229, 255, 0.04) 75%, rgba(0, 229, 255, 0.04) 76%, transparent 77%, transparent)
        `,
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
    },
  },
  plugins: [],
}
