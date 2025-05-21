import { Button } from "@/components/ui/button";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: "400" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: "400" });

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-12 space-y-24">
      {/* Section 1: Hero / Value Prop */}
      <section className="text-center max-w-2xl">
        <h1 className={"text-4xl font-bold mb-4 " + spaceGrotesk.className}>
          Drop Exclusive Content Straight to DMs — No Platforms, No Limits
        </h1>
        <p className="text-lg mb-6">
          DM Drop lets creators share files, videos, and VIP content directly
          via private links.
        </p>
        <Button variant={"default"}>🔥 Start Dropping — It’s Free</Button>
      </section>

      {/* Section 2: How It Works */}
      <section className="w-full max-w-4xl text-center">
        <h2 className={"text-2xl font-semibold mb-8 " + spaceGrotesk.className}>
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {["Upload content", "Generate drop link", "Send it in a DM"].map(
            (step, idx) => (
              <div key={idx} className="space-y-2">
                <div className="h-24 w-full bg-gray-200 rounded-lg" />
                <p className="text-base font-medium">{step}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Section 3: Why Creators Love It */}
      <section className="w-full max-w-4xl text-center">
        <h2 className={"text-2xl font-semibold mb-6 " + spaceGrotesk.className}>
          Why Creators Love It
        </h2>
        <p className="mb-6">
          No platform fees. More control. Instant drops. Real results.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow p-4 rounded-lg"
            >
              <div className="h-12 w-12 bg-gray-300 rounded-full mx-auto mb-2" />
              <p className="text-sm italic">
                “Game-changer for content sharing!”
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Feature Highlights */}
      <section id="features" className="w-full max-w-4xl text-center">
        <h2 className={"text-2xl font-semibold mb-6 " + spaceGrotesk.className}>
          Features That Matter
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          {[
            "Free forever plan",
            "Gated & expiring links",
            "Analytics & branded drops (Pro)",
            "Mobile-friendly, no login needed for fans",
          ].map((feature, idx) => (
            <li
              key={idx}
              className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 rounded-lg"
            >
              ✅ {feature}
            </li>
          ))}
        </ul>
      </section>

      {/* Section 5: Pricing Teaser */}
      <section className="w-full max-w-5xl text-center">
        <h2 className={"text-3xl font-semibold mb-8 " + spaceGrotesk.className}>
          Simple Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Free Plan */}
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-2">Free</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Get started at no cost.
            </p>
            <ul className="text-left mb-6 space-y-2">
              <li>✅ 5 Drops / month</li>
              <li>✅ Max 2GB per file</li>
              <li>✅ Basic analytics</li>
              <li>🚫 No password protection</li>
              <li>🚫 No gated links</li>
              <li>🚫 No custom branding</li>
            </ul>
            <Button className="w-full">Get Started Free</Button>
          </div>

          {/* Pro Plan */}
          <div className="border border-primary rounded-lg p-6 shadow-md bg-primary/10">
            <h3 className="text-xl font-bold mb-2">Pro</h3>
            <p className="text-gray-600 dark:text-gray-200 mb-4">
              Unlock full potential.
            </p>
            <ul className="text-left mb-6 space-y-2">
              <li>✅ Unlimited Drops</li>
              <li>✅ Up to 10GB per file</li>
              <li>✅ Advanced analytics</li>
              <li>✅ Password-protected links</li>
              <li>✅ Gated links</li>
              <li>✅ Branded drop pages</li>
            </ul>
            <Button className="w-full">Upgrade to Pro – $30/mo</Button>
          </div>
        </div>
        <p className="text-sm italic mt-6">No credit card required to start</p>
      </section>

      {/* Section 6: Call to Action (again) */}
      <section className="text-center max-w-xl">
        <h2 className={"text-2xl font-semibold mb-4 " + spaceGrotesk.className}>
          Start Dropping in Under 60 Seconds
        </h2>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border border-gray-300 rounded-md w-full sm:w-auto"
          />
          <Button variant={"default"}>Get Started Free</Button>
        </form>
      </section>
    </div>
  );
}
