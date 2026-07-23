import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Norman Lyle Pono | Portfolio",
  description:
    "Portfolio website for Norman Lyle Pono, web developer and programmer.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Norman Lyle Pono | Portfolio",
    description:
      "Portfolio website for Norman Lyle Pono, web developer and programmer.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4c95d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
