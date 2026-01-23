import { storyblokEditable, SbBlokData } from "@storyblok/react/rsc";

interface TeaserBlok extends SbBlokData {
    headline?: string;
}

export default function Teaser({ blok }: { blok: TeaserBlok }) {
    return (
        <div {...storyblokEditable(blok)}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground">
                {blok.headline}
            </h1>
        </div>
    );
}

