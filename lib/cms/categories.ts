import { directus } from "../directus";
import { readItems } from "@directus/sdk";

export async function getCategories() {
    try {
        const items = await directus.request(
            readItems("categories")
        );
        return items;
    } catch (e) {
        console.error("Error fetching categories", e);
        return [];
    }
}

export async function getCategoryBySlug(slug: string) {
    try {
        const items = await directus.request(
            readItems("categories", {
                filter: { slug: { _eq: slug } },
                limit: 1,
            })
        );
        return items?.[0] || null;
    } catch (e) {
        console.error("Error fetching category by slug", e);
        return null;
    }
}
