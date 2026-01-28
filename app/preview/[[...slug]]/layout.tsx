import { draftMode } from "next/headers";

export default async function PreviewLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const draft = await draftMode();
    draft.enable();

    return <>{children}</>;
}
