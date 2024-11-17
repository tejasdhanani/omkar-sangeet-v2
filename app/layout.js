import { Inter } from "next/font/google";
import "./globals.css";
import { home_metadata } from "@/content/metadata";
import { Header } from "./components/shared/Header";
import { Footer } from "./components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = home_metadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={home_metadata.favicon} sizes="any" />
      </head>
      <body className={inter.className}>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
