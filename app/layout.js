import { Inter } from "next/font/google";
import "./globals.css";
import { home_metadata } from "@/content/metadata";
import { Header } from "./components/shared/Header";
import { footerSections, navLinks, organization } from "@/content/global";
import { Footer } from "./components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = home_metadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header organizationName={organization.name} navLinks={navLinks} />
        <div className="pt-16">{children}</div>
        <Footer organization={organization} sections={footerSections} />
      </body>
    </html>
  );
}
