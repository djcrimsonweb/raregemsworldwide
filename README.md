# Rare Gems Worldwide

A cultural OS for internet discovery. Curating the most relevant global trends and underground movements.

## 🎯 What is Rare Gems Worldwide?

Rare Gems Worldwide is a curated internet culture platform combining editorial content, media sections, and a lightweight engagement system called "GEMS". It's designed to feel like a cultural operating system for discovering emerging trends, aesthetics, and cultural movements.

## 🏗️ Architecture

```
.
├── app/
│   ├── layout.tsx              # Main layout
│   ├── page.tsx                # Homepage / Internet Culture feed
│   ├── globals.css             # Global styles
│   ├── category/[slug]/page.tsx # Dynamic category pages
│   └── gems/page.tsx           # Personal GEMS dashboard
├── components/
│   ├── Header.tsx              # Navigation header
│   ├── Footer.tsx              # Footer
│   ├── PostCard.tsx            # Individual post component
│   └── FeedGrid.tsx            # Feed layout grid
├── lib/
│   └── data.ts                 # Mock data & types
├── public/                     # Static assets
└── package.json
```

## 🎨 Design System

**Colors:**
- Black: `#0a0a0a`
- White: `#ffffff`
- Off-white: `#f5f5f5`
- Gray: `#888888`
- Accent (Gold): `#d4af37`

**Typography:**
- Editorial: Playfair Display (serif)
- Modern: Inter (sans-serif)

**Principles:**
- Minimal, editorial aesthetic
- High whitespace
- No crypto or social media vibes
- Curated, not algorithmic

## 📱 Pages

### 1. **Home** (`/`)
- Featured editorial post
- Grid feed of cultural moments
- Call-to-action for content submission

### 2. **Categories** (`/category/[slug]`)
- Internet Culture
- Radio
- Music
- Fashion
- Design / 3D
- Games
- Mind

### 3. **GEMS** (`/gems`)
- Personal cultural engagement dashboard
- GEMS counter
- Scoring information
- Interactive actions

## 🔧 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Google Fonts (Playfair Display + Inter)
- **Deployment:** Vercel

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📊 Mock Data

Posts include:
- Unique IDs
- Titles & descriptions
- Image URLs (Unsplash)
- Categories
- Cultural scenes (Tokyo, Paris, Berlin, NYC, Seoul, London, Global)
- GEMS scores
- Tags

Located in: `lib/data.ts`

## 🧩 Component System

### PostCard
Displays a single post with image, metadata, and engagement info.

### FeedGrid
Arranges posts in a responsive grid (1 col mobile, 2 col desktop).

### Header
Sticky navigation with category links and GEMS access.

### Footer
Informational footer with links.

## ♿ Accessibility

- Semantic HTML
- Proper heading hierarchy
- Alt text for images (ready for real content)
- High contrast text
- Keyboard navigation support

## 🔄 Planned Features (UI/UX Only)

- [ ] "Create Gem" functionality
- [ ] "Submit Content" flow
- [ ] "Analyze Post" tools
- [ ] User authentication
- [ ] Real database integration
- [ ] GEMS marketplace/rewards system
- [ ] Chats (contextual creation tools)
- [ ] Real-time notifications

## 📝 Development Notes

- All components are client/server compatible
- No external APIs required yet (mock data only)
- TypeScript strict mode enabled
- Ready for Vercel deployment
- SEO optimized with metadata

## 🚢 Deployment

Push to GitHub and connect to Vercel for automatic deployments.

```bash
git init
git add .
git commit -m "Initial commit: Rare Gems Worldwide"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/rare-gems-worldwide.git
git push -u origin main
```

Then connect to [Vercel](https://vercel.com) for instant deployments.

## 📄 License

MIT

## 👥 Contributing

Contributions welcome! Please follow the design system and architecture guidelines.

---

**Built with ❤️ for internet culture.**
