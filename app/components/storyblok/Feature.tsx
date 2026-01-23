import { storyblokEditable, SbBlokData } from "@storyblok/react/rsc";

interface FeatureBlok extends SbBlokData {
    name?: string;
}

export default function Feature({ blok }: { blok: FeatureBlok }) {
    return (
        <div
            className="group p-6 rounded-lg bg-primary/5 border border-primary/20 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
            {...storyblokEditable(blok)}
        >
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center text-white font-bold shadow-lg shadow-primary/25">
                    ✦
                </div>
                <span className="text-lg font-medium">{blok.name}</span>
            </div>
        </div>
    );
}

