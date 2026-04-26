import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Paper Craft Estimator | papercraftpr.com",
  description: "Professional quotation tool for event planners",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={playfair.variable}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
