import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zaur Sharifov - Web Developer",
  description: "Portfolio of Zaur Sharifov",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <svg class="background" width="100%" height="100%">
          <filter id="pedroduarteisalegend">
            <feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves="4" stitchTiles="stitch"></feTurbulence>
          </filter>
          <rect width="100%" height="100%" filter="url(#pedroduarteisalegend)"></ rect>
        </svg>
        <div className="container">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
