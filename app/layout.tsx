import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ilivo | طراحی سایت حرفه‌ای",
  description: "طراحی سایت حرفه‌ای، فروشگاهی و شرکتی با ilivo"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
