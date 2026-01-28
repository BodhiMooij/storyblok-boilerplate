import Link from "next/link";
import DarkModeToggle from "@components/DarkModeToggle";

export default function PageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background">
            <header className="fixed top-0 left-0 right-0 z-50 border-b border-primary/10 bg-background/80 backdrop-blur-sm">
                <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="font-semibold text-foreground hover:text-primary transition-colors">
                        Storyblok × Next.js
                    </Link>
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/BodhiMooij/storyblok-boilerplate"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/60 hover:text-foreground transition-colors"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                        </a>
                        <DarkModeToggle />
                    </div>
                </div>
            </header>

            <main className="pt-32 pb-20 px-6">
                <div className="max-w-5xl mx-auto">
                    {children}
                </div>
            </main>

            <footer className="border-t border-primary/10 py-8 px-6">
                <div className="max-w-5xl mx-auto text-center text-foreground/50 text-sm">
                    Built by <a href="https://bodhimooij.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primarydark transition-colors">Bodhi Mooij</a> with Next.js and Storyblok. Edit this page in the Visual Editor.
                </div>
            </footer>
        </div>
    );
}
