import { directus } from "../directus";
import { readItems } from "@directus/sdk";

export async function getInsights() {
    try {
        const items = await directus.request(
            readItems("insights")
        );
        return items;
    } catch (e) {
        console.error("Error fetching insights", e);
        return [];
    }
}

export async function getInsightById(id: string) {
    try {
        const items = await directus.request(
            readItems("insights", {
                filter: { id: { _eq: id } },
                limit: 1,
            })
        );
        return items?.[0] || null;
    } catch (e) {
        console.error("Error fetching insight by id", e);
        return null;
    }
}

export async function getInsightBySlug(slug: string) {
    try {
        const items = await directus.request(
            readItems("insights", {
                filter: { slug: { _eq: slug } },
                limit: 1,
            })
        );
        return items?.[0] || null;
    } catch (e) {
        console.error("Error fetching insight by slug", e);
        return null;
    }
}
