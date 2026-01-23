import { StoryblokServerComponent, storyblokEditable, SbBlokData } from "@storyblok/react/rsc";

interface GridBlok extends SbBlokData {
    columns?: Array<SbBlokData>;
}

export default function Grid({ blok }: { blok: GridBlok }) {
    return (
        <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-8"
            {...storyblokEditable(blok)}
        >
            {blok.columns?.map((nestedBlok) => (
                <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </div>
    );
}

