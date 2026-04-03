# 🧠 Cinematic Biomedical Experience Website

## Living Digital Lab

A stunning, interactive portfolio showcasing biomedical engineering expertise through a futuristic AI-powered interface.

### 🎨 Design Philosophy

- **Glassmorphism UI** with neon gradients (Electric Blue → Violet → Cyan)
- **Neural network animated background** symbolizing biomedical intelligence
- **Smooth scroll storytelling** creating immersive narrative
- **Interactive micro-interactions** for premium feel
- **Dark futuristic theme** with computational aesthetics

### 🚀 Features

1. **Hero Section** - "You are entering a biomedical intelligence system"
   - Text reveal animations
   - ECG line animating across screen
   - Dual CTA buttons

2. **Story-Based Scroll** - Apple-style immersive experience
   - Section 1: The Problem
   - Section 2: My Role
   - Section 3: What I Build
   - Section 4: Industry Exposure
   - Section 5: Future Vision

3. **Interactive Project Showcase**
   - 3D tilt on hover
   - Modal with problem/solution/architecture
   - Technology tags
   - Live simulation integration

4. **Regulatory Intelligence Engine** ⚙️
   - Medical device input
   - Classification output
   - Approval pathway recommendation
   - Standards & timeline analysis
   - AI-powered system panel appearance

5. **Hologram-Style About Section**
   - Animated avatar with scan effects
   - Rotating glow rings
   - Real-time stats panel
   - Skill tags with hover effects
   - Contact integration

6. **Industry Timeline**
   - BIS → Panacea journey
   - Animated career progression
   - Key achievements per role
   - Visual timeline with floating nodes

7. **Future Vision Section**
   - AI + regulatory integration showcase
   - Quantum-level diagnostics vision
   - Decentralized biomedical networks
   - Call-to-action for collaboration

8. **Micro-interactions**
   - Custom magnetic cursor with glow
   - Button ripple effects
   - Scroll-triggered depth illusion
   - Hover animations throughout
   - Smooth parallax backgrounds

### 🛠️ Tech Stack

- **Framework**: Next.js 14 (React)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion + GSAP
- **3D Models**: Three.js + @react-three/fiber
- **Smooth Scrolling**: Lenis
- **Icons**: Lucide React
- **Language**: TypeScript

### 📋 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/
│   │   ├── NeuralNetworkBackground.tsx
│   │   ├── SmoothScroll.tsx
│   │   └── CustomCursor.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── ScrollSection.tsx
│       ├── ProjectShowcase.tsx
│       ├── RegulatoryIntelligenceEngine.tsx
│       ├── AboutHologram.tsx
│       ├── IndustryTimeline.tsx
│       ├── FutureVision.tsx
│       └── Footer.tsx
public/
├── Bibek Ram Photo.png
└── [other assets]
```

### 🎯 Key Technical Decisions

1. **Canvas-based Neural Network**: Lightweight, performant particle animation without heavy 3D libraries
2. **Lenis Smooth Scroll**: Smooth, physics-based scrolling without jank
3. **Framer Motion + GSAP Hybrid**: Framer Motion for React components, GSAP for advanced timelines
4. **Custom Cursor**: Replaces default for immersive experience
5. **Glassmorphism**: Blur panels with transparency for depth perception
6. **Gradient Text**: CSS gradient for elegance

### 🔥 Performance Optimizations

- Server-side rendering with Next.js
- Optimized images and lazy loading
- CSS animations over JavaScript where possible
- Requestanimationframe for smooth 60fps
- Minimized re-renders with React memo
- Asset optimization for fast loading

### 💡 Recruiter Psychology Elements

✓ **Technical Depth**: Shows understanding of medical standards (IEC 60601, ISO 13485, 21 CFR)
✓ **Production Thinking**: Real documentation samples in project modals
✓ **Problem → Solution → Impact**: Each project clearly shows value delivery
✓ **Industry Credibility**: BIS → Panacea career progression with concrete achievements
✓ **Innovation Vision**: Future vision section shows forward thinking
✓ **User-Centric Design**: Entire site demonstrates UX/DX expertise

### 🎬 Animation Guidelines

- Entrance animations: 0.8s ease-out
- Hover effects: 0.3s smooth
- Page transitions: 0.5s spring
- Looping effects: 2-10s depending on purpose
- Stagger delay: 0.1-0.2s between children

### 📱 Responsive Design

- Mobile-first approach
- Tailwind breakpoints: sm, md, lg, xl
- Touch-friendly interaction zones
- Optimized for all screen sizes

### 🚀 Deployment

Ready to deploy on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Docker** for custom servers

### 📝 Customization

To customize content:
1. Update profile info in `AboutHologram` component
2. Modify projects in `ProjectShowcase` default data
3. Change timeline events in `IndustryTimeline`
4. Update colors in `tailwind.config.ts`
5. Modify animations in individual component files

### 🤝 Connect

**Bibek Ram** - Biomedical Intelligence Architect
- Email: bibek.ram@biomedical.com
- LinkedIn: [profile]
- GitHub: [profile]

---

**Built with precision. Designed for impact. Ready for the future of healthcare.**

✨ Living Digital Lab — Engineering Healthcare. Regulating Innovation. Building Intelligent Medical Systems.
