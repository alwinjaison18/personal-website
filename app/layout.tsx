import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Alwin Jaison - Portfolio",
  description:
    "Personal portfolio of Alwin Jaison, a Masters in Computer Application student.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-light-bg text-light-text dark:bg-gray-900 dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
