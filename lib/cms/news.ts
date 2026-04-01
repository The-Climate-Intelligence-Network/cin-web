import { directus } from "../directus";
import { readItems } from "@directus/sdk";

export async function getNews() {
    try {
        const items = await directus.request(
            readItems("news")
        );
        return items;
    } catch (e) {
        console.error("Error fetching news", e);
        return [];
    }
}

export async function getNewsById(id: string) {
    try {
        const items = await directus.request(
            readItems("news", {
                filter: { id: { _eq: id } },
                limit: 1,
            })
        );
        return items?.[0] || null;
    } catch (e) {
        console.error("Error fetching news by id", e);
        return null;
    }
}
