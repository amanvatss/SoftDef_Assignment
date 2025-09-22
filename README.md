# 🛍️ E-Commerce Product Listing Website

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vercel.com/)

![Vercel Deploy](https://vercelbadge.vercel.app/api/YOUR_GITHUB_USERNAME/ecommerce-assessment?style=flat-square)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Screenshots](#-screenshots)
- [Development Notes](#-development-notes)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## 🎯 Overview

A modern, responsive **E-commerce Product Listing website** built with **React**, **Vite**, **TypeScript**, and **TailwindCSS**. This project demonstrates production-quality code with a focus on user experience, performance, and maintainability.

Created as part of an assessment assignment, this application transforms a Figma design into a fully functional e-commerce interface featuring advanced filtering, sorting, cart management, and responsive design patterns.

🔗 **Live Demo**: [https://ecommerce-assessment.vercel.app]([https://ecommerce-assessment.vercel.app](https://soft-def-assignment-orpin.vercel.app/))

---

## ✨ Features

### Core Functionality
- 🎨 **Pixel-perfect UI** implementation from Figma design
- 🔍 **Advanced Search** with real-time filtering
- 📊 **Smart Sorting** (name, price, popularity, rating - ascending/descending)
- 📄 **Pagination** with customizable items per page
- 🛒 **Shopping Cart** with persistent state management

### User Experience
- ⚡ **Skeleton Loading** for smooth transitions
- 👀 **Quick View Modal** for product previews
- 🎛️ **Advanced Filters** (categories, colors, brands, price range)
- 📱 **Responsive Design** (mobile-first approach)
- 🎪 **Interactive Animations** and hover effects

### Technical Features
- 🧩 **Modular Component Architecture**
- 🔄 **Context API** for global state management
- 💾 **Local Storage** integration for cart persistence
- 🎭 **TypeScript** for type safety
- 🚀 **Optimized Performance** with lazy loading

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS, CSS Modules |
| **Icons** | Lucide React |
| **State Management** | Context API, Local Storage |
| **Development** | ESLint, Prettier, TypeScript Compiler |
| **Deployment** | Vercel (Auto-deployment) |
| **Testing** | (Ready for Jest/Vitest integration) |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/ecommerce-assessment.git
   cd ecommerce-assessment
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build Commands

```bash
# Development
npm run dev          # Start dev server with hot reload
npm run dev --host   # Expose to network

# Production
npm run build        # Build for production
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
```

---

## 📂 Project Structure

```
ecommerce-assessment/
├── 📁 public/                    # Static assets
│   ├── favicon.ico
│   ├── images/                   # Product images, logos
│   └── icons/                    # Brand icons
│
├── 📁 src/
│   ├── 📁 components/            # Reusable UI components
│   │   ├── 📁 Navbar/           # Navigation component
│   │   ├── 📁 Sidebar/          # Filter sidebar
│   │   ├── 📁 Toolbar/          # Sort & search toolbar
│   │   ├── 📁 ProductCard/      # Product display card
│   │   ├── 📁 CartDrawer/       # Shopping cart drawer
│   │   ├── 📁 Modal/            # Quick view modal
│   │   ├── 📁 Rating/           # Star rating component
│   │   ├── 📁 Badge/            # Status badges
│   │   ├── 📁 Skeleton/         # Loading skeletons
│   │   └── 📁 Footer/           # Page footer
│   │
│   ├── 📁 context/               # Global state management
│   │   └── CartContext.tsx       # Cart state & actions
│   │
│   ├── 📁 data/                  # Static data & types
│   │   ├── products.ts           # Product dataset
│   │   └── types.ts              # TypeScript interfaces
│   │
│   ├── 📁 hooks/                 # Custom React hooks
│   │   ├── useLocalStorage.ts    # Local storage hook
│   │   └── useDebounce.ts        # Debounce hook
│   │
│   ├── 📁 pages/                 # Page components
│   │   └── ProductListing.tsx    # Main product page
│   │
│   ├── 📁 utils/                 # Utility functions
│   │   ├── formatPrice.ts        # Price formatting
│   │   └── constants.ts          # App constants
│   │
│   ├── App.tsx                   # Root component
│   ├── main.tsx                  # App entry point
│   ├── index.css                 # Global styles
│   └── App.css                   # Component styles
│
├── 📁 dist/                      # Production build
├── 📄 package.json               # Dependencies & scripts
├── 📄 tsconfig.json              # TypeScript config
├── 📄 tailwind.config.js         # Tailwind config
├── 📄 vite.config.ts             # Vite config
└── 📄 README.md                  # This file
```

---

## 🌐 Deployment

This project uses **Vercel** for continuous deployment:

- ✅ **Auto-deployment** on push to `main` branch
- ✅ **Preview deployments** for pull requests
- ✅ **Custom domain** support
- ✅ **Performance monitoring** built-in

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

---

## 📸 Screenshots

### Desktop View
*Coming soon - Add your desktop screenshots here*

### Mobile View
*Coming soon - Add your mobile screenshots here*

### Features Demo
*Coming soon - Add feature demonstration GIFs here*

---

## 💡 Development Notes

### Key Components

| Component | Purpose | Features |
|-----------|---------|----------|
| `ProductCard` | Product display | Image, price, rating, quick actions |
| `Sidebar` | Filtering | Category, brand, color, price filters |
| `CartDrawer` | Shopping cart | Add/remove items, quantity control |
| `Toolbar` | Search & sort | Search bar, sort dropdown |
| `Modal` | Quick view | Product details without navigation |

### State Management
- **Cart State**: Managed via Context API
- **Filters**: Local component state with URL sync
- **Search**: Debounced input with real-time results

### Performance Optimizations
- Lazy loading for images
- Memoized expensive calculations
- Virtualized lists for large datasets
- Code splitting by routes

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Write meaningful commit messages
- Add JSDoc comments for complex functions
- Ensure responsive design compatibility

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Aman Vats**

- 💼 LinkedIn: [linkedin.com/in/yourprofile](https://www.linkedin.com/in/aman-vats-778a22279/))
- 🐙 GitHub: [@yourusername]([https://github.com/yourusername](https://github.com/amanvatss))
- 📧 Email: amanvats2245@gmail.com

---

## 🙏 Acknowledgments

- Design inspiration from Figma community
- Icons by [Lucide](https://lucide.dev)
- Deployment powered by [Vercel](https://vercel.com)
- Built with ❤️ using [Vite](https://vitejs.dev)

---

<div align="center">
**⭐ If you found this project helpful, please give it a star!**
</div>
