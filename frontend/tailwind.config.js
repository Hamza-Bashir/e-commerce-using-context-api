// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Include all JSX/TSX files here
    './node_modules/@shadcn/ui/dist/**/*.{js,ts,jsx,tsx}', // Ensure this path is included for ShadCN UI components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
