import { StoryblokServerComponent, storyblokEditable, SbBlokData } from "@storyblok/react/rsc";

interface PageBlok extends SbBlokData {
    body?: Array<SbBlokData>;
}

export default function Page({ blok }: { blok: PageBlok }) {
    return (
        <div className="w-full space-y-6" {...storyblokEditable(blok)}>
            {blok.body?.map((nestedBlok) => (
                <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </div>
    );
}

