import Link from "next/link";
import PageLayout from "@components/PageLayout";

export default function NotFound() {
    return (
        <PageLayout>
            <div className="text-center py-16">
                <h1 className="text-4xl font-bold text-foreground mb-2">Page not found</h1>
                <p className="text-foreground/60 mb-6">This page doesn’t exist or hasn’t been published in Storyblok.</p>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primarydark transition-colors"
                >
                    Back to home
                </Link>
            </div>
        </PageLayout>
    );
}
