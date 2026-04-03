import React from "react";
import MerchPage from "@/components/shop/merch";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merchandise",
  description:
    "Show your support with our exclusive collection of apparel, accessories, and lifestyle items by Treena Reynolds. Each piece features unique designs inspired by our creative works.",
  keywords: [
    "merchandise",
    "apparel",
    "accessories",
    "Treena Reynolds merchandise",
    "author merchandise",
    "official merchandise",
    "t-shirts",
    "lifestyle items",
  ],
  openGraph: {
    title: "Merchandise | Treena Reynolds",
    description:
      "Show your support with our exclusive collection of apparel, accessories, and lifestyle items by Treena Reynolds. Each piece features unique designs inspired by our creative works.",
    url: "https://thywilluche.com/shop/merch",
    siteName: "Treena Reynolds",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://thywilluche.com/images/main.jpg",
        width: 1200,
        height: 630,
        alt: "Treena Reynolds Merchandise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Merchandise | Treena Reynolds",
    description:
      "Show your support with our exclusive collection of apparel, accessories, and lifestyle items by Treena Reynolds.",
    images: ["https://thywilluche.com/images/main.jpg"],
  },
  alternates: {
    canonical: "https://thywilluche.com/shop/merch",
  },
};

const page = () => {
  return <MerchPage />;
};

export default page;
