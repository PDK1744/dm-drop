import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], weight: "400" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "DM Drop",
  description: "Drop it in a DM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-screen flex flex-col ` + inter.className}
      >
        <Header />
        <main className="flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
