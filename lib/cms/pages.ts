import { directus } from "../directus";
import { readItems } from "@directus/sdk";

export async function getPages() {
    try {
        const items = await directus.request(
            readItems("pages")
        );
        return items;
    } catch (e) {
        console.error("Error fetching pages", e);
        return [];
    }
}

export async function getPageBySlug(slug: string) {
    try {
        const items = await directus.request(
            readItems("pages", {
                filter: { slug: { _eq: slug } },
                limit: 1,
            })
        );
        return items?.[0] || null;
    } catch (e) {
        console.error("Error fetching page by slug", e);
        return null;
    }
}
