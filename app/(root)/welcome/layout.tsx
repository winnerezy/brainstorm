import { Footer } from "@/components/Footer";
import "../../globals.css";
import { Sidebar } from "@/components/Sidebar";

export default function WelcomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="w-full min-h-screen">{children}</div>;
}
