import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: "400" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: "400" });

export default function DashboardPage() {
  return (
    <div className={`min-h-screen flex flex-col md:flex-row ${inter.className}`}>
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-gray-100 dark:bg-gray-900 p-4 border-r border-gray-300 dark:border-gray-700">
        <nav className="flex flex-col gap-4">
          <Button variant="ghost" className="justify-start">📦 My Drops</Button>
          <Button variant="ghost" className="justify-start">📊 Analytics</Button>
          <Button variant="ghost" className="justify-start">🎨 Branding</Button>
          <Button variant="ghost" className="justify-start">⚙️ Settings</Button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-6">
        <header className="flex items-center justify-between">
          <h1 className={`text-3xl font-semibold ${spaceGrotesk.className}`}>
            Welcome Back!
          </h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">creator@example.com</span>
            <div className="h-10 w-10 bg-gray-300 rounded-full" />
          </div>
        </header>

        <Separator />

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Create a Drop</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Quickly upload and share your content via private links.
              </p>
              <Button className="mt-4">+ New Drop</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>View Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Track who views, clicks, or downloads your drops.
              </p>
              <Button className="mt-4">📊 View Insights</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Manage Branding</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Customize the look of your drops (Pro users only).
              </p>
              <Button className="mt-4">🎨 Customize</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
