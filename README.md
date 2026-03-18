# Glacetouch - Professional Painting Services Website

A modern, pixel-perfect website for Glacetouch painting services, built with React, Tailwind CSS, and Vite.

## 🎨 Features

- **Responsive Design**: Mobile-first approach with full responsiveness
- **Modern UI**: Professional design with smooth animations and transitions
- **Component-Based Architecture**: Reusable, modular React components
- **Tailwind CSS v4**: Latest Tailwind CSS with advanced utilities
- **Interactive Elements**: Smooth scrolling, hover effects, and form handling
- **Performance Optimized**: Fast loading with Vite bundler
- **SEO Ready**: Semantic HTML and proper meta tags

## 📁 Project Structure

```
src/
├── components/
│   ├── Common/
│   │   ├── Header.jsx          # Navigation header with smooth scroll
│   │   ├── Footer.jsx          # Footer with contact info
│   │   ├── Button.jsx          # Reusable button component
│   │   └── Card.jsx            # Reusable card component
│   └── Sections/
│       ├── HeroSection.jsx      # Hero banner with CTA
│       ├── ServicesSection.jsx  # Services showcase
│       ├── AboutSection.jsx     # Company information
│       ├── StatsSection.jsx     # Key statistics
│       ├── PricingSection.jsx   # Pricing tables
│       ├── PortfolioSection.jsx # Project showcase
│       ├── TeamSection.jsx      # Team members
│       ├── TestimonialsSection.jsx # Customer reviews
│       ├── FAQSection.jsx       # Frequently asked questions
│       └── ContactSection.jsx   # Contact form
├── data/
│   ├── services.js
│   ├── team.js
│   ├── testimonials.js
│   ├── portfolio.js
│   ├── pricing.js
│   ├── faq.js
│   └── stats.js
├── App.jsx                      # Main app component
├── main.jsx                     # React DOM entry point
└── index.css                    # Global styles and animations
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5176`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📦 Dependencies

- **React 19**: UI framework
- **Tailwind CSS 4**: Utility-first CSS framework
- **Vite 7**: Modern build tool

## 🎯 Key Components

### Header
- Fixed navigation bar with smooth scroll behavior
- Mobile-responsive hamburger menu
- Logo with gradient styling
- CTA button for quotes

### Hero Section
- Eye-catching headline with accent color
- Dynamic image with shadow effects
- Quick statistics display
- Dual CTA buttons

### Services Section
- 6 service cards with hover animations
- Icon-based design
- Smooth transitions

### Pricing Section
- 3 pricing tiers
- Popular package highlight
- Feature lists with checkmarks
- Clear CTA buttons

### Contact Form
- Fully functional form with state management
- Service selection dropdown
- Responsive layout
- Form validation ready

## 🎨 Color Scheme

- **Primary**: Blue (`#2563eb`)
- **Accent**: Yellow (`#eab308`)
- **Dark**: Gray-900 (`#111827`)
- **Backgrounds**: Gray-50 (`#f9fafb`)

## 📱 Responsive Breakpoints

- Mobile-first design
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## ✨ Custom Animations

- `fade-in`: Smooth fade-in with slide up
- `slide-up`: Element slides up on load
- `pulse-glow`: Subtle pulsing effect
- Hover effects on interactive elements

## 🔧 Customization

### To modify brand colors:
1. Update Tailwind color classes in components
2. Colors used: `blue-600`, `yellow-400`, `gray-*`

### To update content:
1. Edit data files in `src/data/`
2. Modify component JSX for layout changes

### To add new sections:
1. Create new component in `src/components/Sections/`
2. Import and add to `App.jsx`

## 📖 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 💡 Best Practices Implemented

- ✅ Component reusability
- ✅ Semantic HTML
- ✅ Accessibility considerations
- ✅ Performance optimization
- ✅ Clean code structure
- ✅ Mobile-first responsive design
- ✅ Smooth animations and transitions
- ✅ Form handling and validation ready
- ✅ Image optimization with Unsplash
- ✅ SEO-friendly markup

## 📄 License

This project is proprietary to Glacetouch Painting Services.

## 👨‍💼 Support

For support, email: info@glacetouch.com or call (555) 123-4567

---

**Built with ❤️ for Glacetouch Painting Services**
