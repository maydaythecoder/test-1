# GSAP Scroll Animation Project

A Next.js project with advanced scroll-based animations using GSAP and ScrollTrigger.

## 🚀 Quick Start

### 1. Environment Configuration
Create a `.env` file in the root directory with these variables:
```env
# Card Configuration (repeat for CARD2-CARD4)
NEXT_PUBLIC_CARD1_IMAGE='your_image_url_here'
NEXT_PUBLIC_CARD1_WIDTH=[width]
NEXT_PUBLIC_CARD1_HEIGHT=[height]
NEXT_PUBLIC_CARD1_SCRUB=[scrub]
NEXT_PUBLIC_CARD1_LAG=[lag]

NEXT_PUBLIC_CARD2_IMAGE='your_image_url_here'
NEXT_PUBLIC_CARD2_WIDTH=[width]
NEXT_PUBLIC_CARD2_HEIGHT=[height]
NEXT_PUBLIC_CARD2_SCRUB=[scrub]
NEXT_PUBLIC_CARD2_LAG=[lag]

NEXT_PUBLIC_CARD3_IMAGE='your_image_url_here'
NEXT_PUBLIC_CARD3_WIDTH=[width]
NEXT_PUBLIC_CARD3_HEIGHT=[height]
NEXT_PUBLIC_CARD3_SCRUB=[scrub]
NEXT_PUBLIC_CARD3_LAG=[lag]

NEXT_PUBLIC_CARD4_IMAGE='your_image_url_here'
NEXT_PUBLIC_CARD4_WIDTH=[width]
NEXT_PUBLIC_CARD4_HEIGHT=[height]
NEXT_PUBLIC_CARD4_SCRUB=[scrub]
NEXT_PUBLIC_CARD4_LAG=[lag]
```

### 2. Development Server Setup
Choose your package manager:
```bash
npm install && npm run build && npm run dev
```
```bash
yarn install && yarn build && yarn dev
```
```bash
pnpm install && pnpm build && pnpm dev
```
```bash
bun install && bun build && bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Core Configuration

- **Environment Variables**:
  - `NEXT_PUBLIC_CARD*_IMAGE`: High-resolution image URLs
  - `NEXT_PUBLIC_CARD*_SCRUB`: Scroll-animation correlation (higher = smoother scroll coupling)
  - `NEXT_PUBLIC_CARD*_LAG`: Motion phase offset (seconds)

- **Technology Stack**:
  - Next.js 15 (App Router)
  - GSAP 3.12 + ScrollTrigger
  - Tailwind CSS v3.4
  - TypeScript 5.3

## 🖥️ Development Specifications

- Next.js Image Component optimization
- GSAP-based animation pipeline
- Adaptive viewport grid system
- Custom scrollbar implementation

## 🌐 Production Deployment
[![Vercel Deployment](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world)


## 🎚️ Animation Tuning Guide
Adjust these values in `.env` to perfect scroll interactions:

**Current Configuration Examples**:
- Card 1: `SCRUB=3.2` | `LAG=0.45s` (Medium scrub with subtle delay)
- Card 2: `SCRUB=3.8` | `LAG=1.05s` (Smooth scrub with dramatic lag)
- Card 3: `SCRUB=2.7` | `LAG=0.15s` (Responsive scrub with tight sync)
- Card 4: `SCRUB=3.3` | `LAG=0.75s` (Balanced scrub with medium lag)

**Scrub Intensity** (`NEXT_PUBLIC_CARD*_SCRUB`):
- ↗️ Higher values (3.5-4.5): Smoother scroll coupling
- ↘️ Lower values (2.0-3.0): More immediate response

**Motion Lag** (`NEXT_PUBLIC_CARD*_LAG`):
- ↗️ Increased lag (0.5s+): Dramatic staggered effects
- ↘️ Reduced lag (<0.3s): Tight synchronization
**My values**
```env
NEXT_PUBLIC_CARD1_IMAGE='https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
NEXT_PUBLIC_CARD1_WIDTH=600
NEXT_PUBLIC_CARD1_HEIGHT=400
NEXT_PUBLIC_CARD1_SCRUB=3.2
NEXT_PUBLIC_CARD1_LAG=0.45

NEXT_PUBLIC_CARD2_IMAGE='https://images.unsplash.com/photo-1742268350489-e5d1c0616c54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8'
NEXT_PUBLIC_CARD2_WIDTH=600
NEXT_PUBLIC_CARD2_HEIGHT=400
NEXT_PUBLIC_CARD2_SCRUB=3.8
NEXT_PUBLIC_CARD2_LAG=1.05

NEXT_PUBLIC_CARD3_IMAGE='https://images.unsplash.com/photo-1742201934199-750a39f4c277?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8'
NEXT_PUBLIC_CARD3_WIDTH=600
NEXT_PUBLIC_CARD3_HEIGHT=400
NEXT_PUBLIC_CARD3_SCRUB=2.7
NEXT_PUBLIC_CARD3_LAG=0.15

NEXT_PUBLIC_CARD4_IMAGE='https://plus.unsplash.com/premium_photo-1742559343092-c99525c43d40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D'
NEXT_PUBLIC_CARD4_WIDTH=600
NEXT_PUBLIC_CARD4_HEIGHT=400
NEXT_PUBLIC_CARD4_SCRUB=3.3
NEXT_PUBLIC_CARD4_LAG=0.75
```

## 📦 Project Structure

```text
test-1/
├── app/
│ ├── layout.tsx # Root layout configuration
│ ├── globals.css # Global styles and animations
│ └── page.tsx # Main page component
├── components/
│ ├── Images.tsx # Image component with GSAP integration
│ └── Pages/
│ ├── Home.tsx # Main scroll animation page
│ └── Hero.tsx # Hero section with entrance animations
├── constants/
│ └── Data.tsx # Card configurations and env mappings
├── hooks/
│ └── gsap.tsx # GSAP initialization and plugins
├── public/ # Static assets
│ └── fallback-image.jpg # Default fallback image
├── next.config.js # Image domain whitelist
├── package.json # Dependencies and build scripts
├── tailwind.config.js # Tailwind configuration
└── tsconfig.json # TypeScript settings
```
