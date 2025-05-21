"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function MobileNav({ isAuthenticated }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(!open)} className="md:hidden">
        <span className="sr-only">Toggle menu</span>☰
      </button>

      {open && (
        <div className="md:hidden mt-4 space-y-4 flex flex-col gap-1">
          {["features", "pricing", "about"].map((item) => (
            <Link key={item} href={`#${item}`} className="block">
              {item[0].toUpperCase() + item.slice(1)}
            </Link>
          ))}

          {!isAuthenticated ? (
            <>
              <Link href="/sign-in">
                <Button variant="secondary" className="w-full">
                  Login
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button className="w-full">Sign Up</Button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/dashboard">
                <Button className="w-full">Dashboard</Button>
              </Link>
              <form action="/auth/signout" method="POST" className="w-full">
                <Button variant="destructive" className="w-full">
                  Sign Out
                </Button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
}
