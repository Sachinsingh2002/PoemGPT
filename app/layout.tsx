import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PoemGPT - AI Poetry Generator",
  description: "Unleash your imagination, one verse at a time. Create poetry that speaks your soul with AI-powered poem generation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
