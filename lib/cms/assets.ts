import { directus } from "../directus";

export function getAssetUrl(id: string) {
    if (!id) return null;
    return `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${id}`;
}
