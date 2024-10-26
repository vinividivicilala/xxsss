import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Farid Ardiansyah - Resume",
  description:
    "Resume Farid Ardiansyah .",
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
