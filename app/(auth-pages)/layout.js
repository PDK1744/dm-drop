// app/auth-pages/layout.js
import "@/app/globals.css";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: "400" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "DM Drop – Sign Up",
  description: "Create your DM Drop account.",
};

export default function AuthLayout({ children }) {
  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-900 px-4 py-12 ${inter.className}`}
    >
      <div className="w-full max-w-md space-y-6">
        {children}
      </div>
    </div>
  );
}
