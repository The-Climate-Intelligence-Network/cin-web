import { getKnowledgeResources } from "@/lib/cms/knowledge";

export default async function Page() {
  const items = await getKnowledgeResources();

  return (
    <div>
      {items.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}