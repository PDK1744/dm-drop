// components/Header.jsx
"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isAuthenticated = false; // Temp placeholder. Replace with real logic later.

  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-700 py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          DM Drop
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-4 items-center">
          <Link
            href="#features"
            className="transition transform hover:scale-105 hover:text-primary font-medium"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="transition transform hover:scale-105 hover:text-primary font-medium"
          >
            Pricing
          </Link>
          <Link
            href="#about"
            className="transition transform hover:scale-105 hover:text-primary font-medium"
          >
            About
          </Link>

          {!isAuthenticated ? (
            <>
              <Link href="/login">
                <Button variant="secondary">Login</Button>
              </Link>
              <Link href="/signup">
                <Button>Sign Up</Button>
              </Link>
            </>
          ) : (
            <Link href="/dashboard">
              <Button>Dashboard</Button>
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden"
        >
          <span className="sr-only">Toggle menu</span>☰
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-4 flex flex-col gap-1">
          <Link href="#features" className="block">
            Features
          </Link>
          <Link href="#pricing" className="block">
            Pricing
          </Link>
          <Link href="#about" className="block">
            About
          </Link>

          {!isAuthenticated ? (
            <>
              <Link href="/login">
                <Button variant="secondary" className="w-full">
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="w-full">Sign Up</Button>
              </Link>
            </>
          ) : (
            <Link href="/dashboard">
              <Button className="w-full">Dashboard</Button>
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
