# Modern Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio template includes smooth animations, dark mode support, and a clean, professional design.

## Features

- 🎨 Modern and responsive design
- 🌓 Dark mode support
- ⚡ Smooth animations with Framer Motion
- 📱 Mobile-friendly navigation
- 🎯 SEO optimized
- 📄 Easy to customize content
- 🖼️ Image optimization with Next.js
- 🎭 TypeScript for type safety

## Getting Started

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Personal Information

Edit the `src/data/portfolio.ts` file to update your personal information:

- Name, title, and bio
- Contact information
- Social media links
- Profile image (add your image to `public/images/profile.jpg`)

### Content Sections

The portfolio includes the following sections that you can customize in `src/data/portfolio.ts`:

- Experience
- Projects
- Skills
- Education

### Styling

The portfolio uses Tailwind CSS for styling. You can customize the colors, spacing, and other design elements by modifying the Tailwind classes in the components.

## Project Structure

```
portfolio/
├── public/
│   └── images/          # Add your images here
├── src/
│   ├── app/            # Next.js app directory
│   ├── components/     # React components
│   └── data/          # Portfolio content
└── package.json
```

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [next-themes](https://github.com/pacocoursey/next-themes) - Dark mode
- [React Icons](https://react-icons.github.io/react-icons/) - Icons

## Deployment

The portfolio can be deployed to any platform that supports Next.js applications. Some popular options include:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

## License

This project is open source and available under the [MIT License](LICENSE).
