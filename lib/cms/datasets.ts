import { directus } from "../directus";
import { readItems } from "@directus/sdk";

export async function getDatasets() {
    try {
        const items = await directus.request(
            readItems("datasets")
        );
        return items;
    } catch (e) {
        console.error("Error fetching datasets", e);
        return [];
    }
}

export async function getDatasetById(id: string) {
    try {
        const items = await directus.request(
            readItems("datasets", {
                filter: { id: { _eq: id } },
                limit: 1,
            })
        );
        return items?.[0] || null;
    } catch (e) {
        console.error("Error fetching dataset by id", e);
        return null;
    }
}
