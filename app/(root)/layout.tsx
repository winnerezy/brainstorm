
import "../globals.css";
import { Sidebar } from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col w-full">
      <Navbar />
      <div className="flex flex-col gap-16 w-full min-h-screen">
        {children}
        <Footer />
      </div>
    </div>
  );
}
