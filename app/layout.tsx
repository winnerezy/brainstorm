import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "400", "700",  "800","900"] });

export const metadata: Metadata = {
  title: "Brainstorm",
  description: "Diffenent Topics To Talk About",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="w-full min-h-screen p-4">
        {children}
        </main>
      </body>
    </html>
  );
}
