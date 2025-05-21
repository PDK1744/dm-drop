// components/Header.jsx (Server Component)
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import MobileNav from "./MobileNav"; // New client subcomponent

export default async function Header() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const isAuthenticated = !!user;

  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-700 py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          DM Drop
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-4 items-center">
          {["features", "pricing", "about"].map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              className="transition transform hover:scale-105 hover:text-primary font-medium"
            >
              {item[0].toUpperCase() + item.slice(1)}
            </Link>
          ))}

          {!isAuthenticated ? (
            <>
              <Link href="/sign-in">
                <Button variant="secondary">Login</Button>
              </Link>
              <Link href="/sign-up">
                <Button>Sign Up</Button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/dashboard">
                <Button>Dashboard</Button>
              </Link>
              <form action="/auth/signout" method="post">
                <Button variant="destructive">Sign Out</Button>
              </form>
            </>
          )}
        </nav>

        {/* Mobile Nav Toggle */}
        <MobileNav isAuthenticated={isAuthenticated} />
      </div>
    </header>
  );
}
