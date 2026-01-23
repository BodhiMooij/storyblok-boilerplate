"use client";

import { storyblokInit, apiPlugin } from "@storyblok/react";
import { components } from "@/lib/storyblok";

storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN,
    use: [apiPlugin],
    components,
    apiOptions: {
        region: "eu",
    },
});

export default function StoryblokProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

