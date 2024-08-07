import { Footer } from "@/components/Footer";
import "../globals.css";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col w-full gap-4">
      <Header />
      <main className="w-full flex items-center">
        <Sidebar />
        <div className="flex flex-col p-4 gap-16 w-full min-h-screen">
          {children}
          <Footer />
        </div>
      </main>
    </div>
  );
}
