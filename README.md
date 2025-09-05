# TaskFlow - Modern Task Management Application

![TaskFlow Preview](https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80)

A beautiful and intuitive todo application built with modern web technologies, featuring seamless local storage integration and production-grade UI/UX.

## ✨ Features

- **Real-time Editing**: Inline editing with automatic save
- **Persistent Storage**: LocalStorage integration with type-safe serialization
- **Modern UI**:
  - Smooth animations & transitions
  - Responsive design
  - WCAG-compliant contrast ratios
  - Lucide React icons
- **Advanced Interactions**:
  - Hover-to-reveal actions
  - Gradient backgrounds
  - Empty state illustrations
- **Type Safety**: Full TypeScript support with strict type checking

## � Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation
```bash
npm install
npm run dev
```

### Scripts
| Command        | Description                         |
|----------------|-------------------------------------|
| `npm run dev`  | Start development server            |
| `npm run build`| Create production build             |
| `npm run preview` | Preview production build        |

## 🛠 Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Build Tool**: [Vite 5](https://vitejs.dev/)
- **Type Safety**: TypeScript 5

## 🎨 Design Principles

1. **Minimal Interface**: Clean layout with subtle visual hierarchy
2. **Motion Design**:
   - Smooth opacity transitions
   - Instant feedback on user actions
3. **Color Scheme**:
   - Primary: Emerald (#059669)
   - Secondary: Slate gradients
4. **Accessibility**:
   - ARIA-compliant markup
   - Keyboard-navigable interface
   - Reduced motion support

## 📸 UI Components

```tsx
interface Todo {
  id: string
  text: string
  completed: boolean
  createdAt: Date
}
```

## 📜 License
MIT License - see [LICENSE](LICENSE) for details

## 🙏 Attribution
- UI Photography by [Unsplash](https://unsplash.com)
- Icons by [Lucide](https://lucide.dev)
