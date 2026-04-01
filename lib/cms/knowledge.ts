import { directus } from "../directus";
import { readItems, readItem } from "@directus/sdk";

export async function getKnowledgeResources() {
    try {
        const items = await directus.request(
            readItems("knowledge_resources")
        ); 
        return items;
    } catch (e) {
        console.error("Error fetching knowledge resources", e);
        return [];
    }
}

export async function getKnowledgeResourceBySlug(slug: string) {
    try {
        const items = await directus.request(
            readItems("knowledge_resources", {
                filter: { slug: { _eq: slug } },
                limit: 1,
            })
        );
        return items?.[0] || null;
    } catch (e) {
        console.error("Error fetching knowledge resource by slug", e);
        return null;
    }
}
