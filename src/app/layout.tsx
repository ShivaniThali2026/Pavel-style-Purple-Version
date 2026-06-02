import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shivani Thali | Marketing Strategy & Creative Growth Portfolio",
  description:
    "Portfolio for Shivani Thali, focused on marketing strategy, growth, analytics, campaigns, and creative storytelling.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}