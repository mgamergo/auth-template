import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <UserButton afterSignOutUrl="/" />
      </div>
      <p className="text-gray-500">You are authenticated. Build your app here.</p>
    </main>
  );
}
