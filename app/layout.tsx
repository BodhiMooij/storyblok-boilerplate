import type { Metadata } from "next";
import { Onest, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoryblokProvider from "./components/StoryblokProvider";

const onest = Onest({
    variable: "--font-onest",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Storyblok x Next.js",
    description: "A modern Next.js boilerplate with Storyblok CMS",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <StoryblokProvider>
            <html lang="en" suppressHydrationWarning>
                <body className={`${onest.className} ${geistMono.variable} antialiased`}>
                    {children}
                </body>
            </html>
        </StoryblokProvider>
    );
}
