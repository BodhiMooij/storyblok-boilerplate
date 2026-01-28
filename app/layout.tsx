import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import StoryblokProvider from "./components/StoryblokProvider";

const onest = Onest({
    variable: "--font-onest",
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
                <body className={`${onest.className} antialiased`}>
                    {children}
                </body>
            </html>
        </StoryblokProvider>
    );
}
