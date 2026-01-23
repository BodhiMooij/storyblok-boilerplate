import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import DarkModeToggle from "@/components/DarkModeToggle";
import Link from "next/link";

export default async function Home() {
    const { data } = await fetchData();

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 border-b border-primary/10 bg-background/80 backdrop-blur-sm">
                <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                    <span className="font-semibold text-foreground">Storyblok × Next.js</span>
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/BodhiMooij/storyblok-boilerplate"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/60 hover:text-foreground transition-colors"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                            </svg>
                        </a>
                        <DarkModeToggle />
                    </div>
                </div>
            </header>

            {/* Main content */}
            <main className="pt-32 pb-20 px-6">
                <div className="max-w-5xl mx-auto">
                    {/* Hero */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-foreground mb-6">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                            Open Source Boilerplate
                        </div>
                        
                        {/* Storyblok Content */}
                        <StoryblokStory story={data.story} bridgeOptions={{ resolveRelations: [] }} />
                        
                        <p className="text-foreground/60 text-lg max-w-2xl mx-auto mt-6">
                            A modern Next.js boilerplate integrated with Storyblok CMS, featuring the Visual Editor, Tailwind CSS, and TypeScript.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
                        <FeatureLink
                            href="https://nextjs.org/docs"
                            title="Next.js Docs"
                            description="Learn about Next.js features and API."
                        />
                        <FeatureLink
                            href="https://www.storyblok.com/docs"
                            title="Storyblok Docs"
                            description="Explore Storyblok's headless CMS."
                        />
                        <FeatureLink
                            href="https://tailwindcss.com/docs"
                            title="Tailwind CSS"
                            description="Utility-first CSS framework."
                        />
                        <FeatureLink
                            href="https://www.storyblok.com/docs/guide/essentials/visual-editor"
                            title="Visual Editor"
                            description="Edit content in real-time."
                        />
                        <FeatureLink
                            href="https://github.com/storyblok/storyblok-react"
                            title="Storyblok React"
                            description="Official React SDK for Storyblok."
                        />
                        <FeatureLink
                            href="https://github.com/BodhiMooij/storyblok-boilerplate"
                            title="GitHub Repo"
                            description="View source code and contribute."
                        />
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <a
                            href="https://github.com/BodhiMooij/storyblok-boilerplate"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                            </svg>
                            View on GitHub
                        </a>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-primary/10 py-8 px-6">
                <div className="max-w-5xl mx-auto text-center text-foreground/50 text-sm">
                    Built by <a href="https://bodhimooij.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark transition-colors">Bodhi Mooij</a> with Next.js and Storyblok. Edit this page in the Visual Editor.
                </div>
            </footer>
        </div>
    );
}

function FeatureLink({ href, title, description }: { href: string; title: string; description: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-lg border border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-primary/30 transition-all"
        >
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                {title}
                <svg
                    className="w-4 h-4 text-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </h3>
            <p className="text-foreground/60 text-sm">{description}</p>
        </a>
    );
}

async function fetchData() {
    const storyblokApi = getStoryblokApi();
    return storyblokApi.get("cdn/stories/home", { version: "draft" });
}
