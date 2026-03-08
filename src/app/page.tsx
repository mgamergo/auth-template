import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

export default async function HomePage() {
  const { userId } = await auth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Auth Template</h1>
      {userId ? (
        <Link href="/dashboard" className="text-blue-600 underline">
          Go to Dashboard →
        </Link>
      ) : (
        <div className="flex gap-4">
          <Link href="/sign-in" className="text-blue-600 underline">Sign In</Link>
          <Link href="/sign-up" className="text-blue-600 underline">Sign Up</Link>
        </div>
      )}
    </main>
  );
}
