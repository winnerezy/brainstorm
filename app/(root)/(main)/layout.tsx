import { Footer } from "@/components/Footer";
import "../../globals.css";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()
  return (
    <SessionProvider session={session}>
          <main className="relative w-full flex min-h-screen">
      <Sidebar />
      <div className="flex w-full min-h-screen lg:pl-[250px]">
        {children}
      </div>
    </main>
    </SessionProvider>
  );
}
