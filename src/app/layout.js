import './globals.css';
import SmoothScroll from "@/components/SmoothScroll";
export const metadata = {
  title: 'Muhammad Sohail | AI Growth Marketing Engineer',
  description: 'AI-powered growth marketing, SEO, paid ads, Next.js web development, and automation portfolio.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
         <SmoothScroll />
        {children}</body>
    </html>
  );
}

