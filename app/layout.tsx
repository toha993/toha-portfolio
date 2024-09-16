import React from "react";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mutasim Billah Toha - Portfolio",
  description: "Software Engineer portfolio of Mutasim Billah Toha",
  icons: {
    icon: [
      {
        url: "/images/profile-picture.jpg",
        type: "image/jpeg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/profile-picture.jpg" sizes="any" />
      </head>
      <body className="bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}
