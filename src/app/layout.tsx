import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Pattern from "@/components/pattern";
import { Toaster } from "@/components/ui/sonner";
import { ReactQueryProvider } from "@/providers/react-query-provider";
import NextTopLoader from "nextjs-toploader";
// import { DebugErrorTrigger } from "@/components/debug-error-trigger";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thywilluche.com"),
  title: {
    default: "Treena Reynolds",
    template: "%s | Treena Reynolds",
  },
  description: "365 TIPS, 365 WINS - EVERY DAY IS VICTORY",
  keywords: [
    "Treena Reynolds",
    "Treena Reynolds's Blog",
    "Treena Reynolds's Website",
    "Treena Reynolds's Portfolio",
    "Treena Reynolds's Projects",
    "Treena Reynolds's Achievements",
    "Treena Reynolds's Awards",
    "Treena Reynolds's Certifications",
    "Treena Reynolds's Skills",
    "Treena Reynolds's Education",
    "Treena Reynolds's Experience",
    "Treena Reynolds's References",
    "Treena Reynolds's Testimonials",
    "Writer",
    "Author",
    "Podcaster",
    "Coach",
    "Mentor",
    "Speaker",
    "Consultant",
    "Trainer",
    "Motivational Speaker",
    "Life Coach",
    "Business Coach",
    "Career Coach",
    "Ghostwriter",
    "Relationship Coach",
    "Financial Coach",
    "Health Coach",
    "Wellness Coach",
    "Nutrition Coach",
    "Days I Do Not Die",
    "Writer of Days I Do Not Die",
  ],
  authors: [{ name: "Treena Reynolds", url: "https://thywilluche.com" }],
  creator: "Treena Reynolds",
  publisher: "Treena Reynolds",
  category: "personal website",
  applicationName: "Treena Reynolds",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://thywilluche.com",
    languages: {
      "en-US": "https://thywilluche.com",
      "en-GB": "https://thywilluche.com",
      "en-CA": "https://thywilluche.com",
      "en-AU": "https://thywilluche.com",
      "en-NZ": "https://thywilluche.com",
    },
    media: {
      "image/jpeg": "https://thywilluche.com/images/main.jpg",
      "image/png": "https://thywilluche.com/images/main.png",
      "image/webp": "https://thywilluche.com/images/main.webp",
    },
    types: {
      website: "https://thywilluche.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thywilluche.com",
    siteName: "Treena Reynolds",
    title: "Treena Reynolds",
    description: "365 TIPS, 365 WINS - EVERY DAY IS VICTORY",
    images: [
      {
        url: "https://thywilluche.com/images/main.jpg",
        width: 1200,
        height: 630,
        alt: "Treena Reynolds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Treena Reynolds",
    description: "365 TIPS, 365 WINS - EVERY DAY IS VICTORY",
    images: ["https://thywilluche.com/images/main.jpg"],
    creator: "@thywilluche",
  },
  verification: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Pattern />
        {/* <DebugErrorTrigger /> */}
        <ReactQueryProvider>{children}</ReactQueryProvider>
        <NextTopLoader color="#800000" />
        <Toaster position={"top-center"} richColors />
      </body>
    </html>
  );
}
