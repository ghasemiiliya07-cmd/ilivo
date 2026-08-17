import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://ilivo.ir";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "طراحی سایت حرفه‌ای | ilivo",
    template: "%s | ilivo",
  },

  description:
    "ilivo ارائه‌دهنده طراحی سایت حرفه‌ای، فروشگاهی و شرکتی با طراحی مدرن، سرعت بالا، طراحی اختصاصی و سئو پایه.",

  applicationName: "ilivo",

  keywords: [
    "طراحی سایت",
    "طراحی سایت حرفه‌ای",
    "طراحی سایت فروشگاهی",
    "طراحی سایت شرکتی",
    "سفارش طراحی سایت",
    "ساخت سایت",
    "طراحی وب سایت",
    "طراحی سایت اختصاصی",
    "فروش سایت",
    "سئو سایت",
    "طراحی UI UX",
    "ilivo",
    "ایلیوو",
  ],

  authors: [
    {
      name: "ilivo",
      url: siteUrl,
    },
  ],

  creator: "ilivo",
  publisher: "ilivo",

  alternates: {
    canonical: siteUrl,
    languages: {
      "fa-IR": siteUrl,
    },
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: siteUrl,
    siteName: "ilivo",
    title: "طراحی سایت حرفه‌ای | ilivo",
    description:
      "طراحی سایت حرفه‌ای، فروشگاهی و شرکتی با ilivo؛ سریع، مدرن و اختصاصی.",
    images: [
      {
        url: "/hero-devices.jpg",
        width: 1200,
        height: 630,
        alt: "طراحی سایت حرفه‌ای با ilivo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "طراحی سایت حرفه‌ای | ilivo",
    description:
      "طراحی سایت حرفه‌ای، فروشگاهی و شرکتی با ilivo.",
    images: ["/hero-devices.jpg"],
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta name="theme-color" content="#02050b" />
        <meta
          name="google-site-verification"
          content="8WadMKuy_5GyHS_RaCxeINhxHRIIPoMUVRZKzuuB_VM"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}