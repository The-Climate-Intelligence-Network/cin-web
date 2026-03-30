import { directus } from "../directus";
import { readItems } from "@directus/sdk";

export async function getKnowledgeResources() {
    const items = await directus.request(
        readItems("knowledge_resources")
    );
    console.log(items)
    return items
}