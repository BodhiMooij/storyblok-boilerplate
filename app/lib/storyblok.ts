import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

import Page from "@components/storyblok/Page";
import Feature from "@components/storyblok/Feature";
import Grid from "@components/storyblok/Grid";
import Teaser from "@components/storyblok/Teaser";

const components = {
    page: Page,
    feature: Feature,
    grid: Grid,
    teaser: Teaser,
};

export const getStoryblokApi = storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN,
    use: [apiPlugin],
    components,
    apiOptions: {
        region: "eu",
    },
});

export { components };
