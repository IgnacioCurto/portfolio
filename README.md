# 3D Artist & Concept Designer Portfolio

A modern portfolio website built with React, TypeScript, and Vite for showcasing 3D modeling and concept art work.

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **State Management**: TanStack Query
- **UI Components**: Radix UI primitives
- **Deployment**: GitHub Pages

## Development

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:8080`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run deploy` - Deploy to GitHub Pages

## Deployment to GitHub Pages

### Automatic Deployment

1. Make sure you have gh-pages installed:
```bash
npm install
```

2. Run the deploy script:
```bash
npm run deploy
```

This will build the project and deploy it to the `gh-pages` branch, which GitHub Pages will serve.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npx gh-pages -d dist
```

### GitHub Pages Configuration

Make sure your GitHub repository has GitHub Pages enabled:
1. Go to your repository's Settings
2. Scroll down to "Pages" section
3. Under "Build and deployment", select "Deploy from a branch"
4. Choose `gh-pages` branch and `/ (root)` folder

## Project Structure

```
src/
├── components/     # Reusable React components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── utils/         # Utility functions
├── styles/        # Global styles and Tailwind config
└── main.tsx       # App entry point
```

## License

This project is open source and available under the [MIT License](LICENSE).
