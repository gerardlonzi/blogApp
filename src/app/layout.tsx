import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import AuthProviders from "@/providers/AuthProviders";

const roboto = Roboto({ style: 'normal', weight: '300', subsets: ["latin"] });

export const metadata: Metadata = {
  title: "glCoding blog",
  description: "Blog personnel pour developpeurs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AuthProviders>
\          {children}
        </AuthProviders>
      </body>
    </html>
  );
}
