import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getKnowledgeResourceBySlug } from "@/lib/cms/knowledge";
import { getAssetUrl } from "@/lib/cms/assets";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 300;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const article = await getKnowledgeResourceBySlug(slug) as any;
  if (!article) return { title: "Not Found | CIN Knowledge" };
  return {
    title: `${article.title} | CIN Knowledge`,
    description: article.summary ?? undefined,
    openGraph: article.cover_image
      ? { images: [{ url: getAssetUrl(article.cover_image) as string }] }
      : undefined,
  };
}

export default async function KnowledgeArticlePage({ params }: PageProps) {
  const { slug } = await params;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const article = await getKnowledgeResourceBySlug(slug) as any;

  if (!article) notFound();

  return (
    <main style={{ backgroundColor: "#F7FAF4", minHeight: "100vh" }}>
      <article style={{ maxWidth: "800px", margin: "0 auto", padding: "3rem 1.5rem" }}>

        {/* Breadcrumb */}
        <nav style={{ marginBottom: "2rem" }}>
          <a href="/knowledge" style={{ color: "#568265", fontSize: "0.875rem", fontWeight: 500, textDecoration: "none" }}>
            Knowledge
          </a>
          <span style={{ color: "#46A6A8", margin: "0 0.5rem" }}>›</span>
          <span style={{ color: "#2F3E34", fontSize: "0.875rem" }}>{article.title}</span>
        </nav>

        {/* Category tag */}
        {article.category && (
          <span style={{
            display: "inline-block",
            backgroundColor: "#46A6A8",
            color: "#fff",
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "0.25rem 0.75rem",
            borderRadius: "2px",
            marginBottom: "1.25rem",
          }}>
            {article.category}
          </span>
        )}

        {/* Title */}
        <h1 style={{
          fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
          fontWeight: 800,
          color: "#3F664F",
          lineHeight: 1.2,
          letterSpacing: "-0.02em",
          marginBottom: "1rem",
        }}>
          {article.title}
        </h1>

        {/* Meta row */}
        {(article.author || article.date_published) && (
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            color: "#568265",
            fontSize: "0.875rem",
            marginBottom: "2rem",
            paddingBottom: "1.5rem",
            borderBottom: "1px solid #92C3A4",
          }}>
            {article.author && (
              <span>By <strong style={{ color: "#3F664F" }}>{article.author}</strong></span>
            )}
            {article.date_published && (
              <span>
                {new Date(article.date_published).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            )}
          </div>
        )}

        {/* Summary */}
        {article.summary && (
          <p style={{
            fontSize: "1.125rem",
            color: "#2F3E34",
            lineHeight: 1.8,
            fontWeight: 500,
            marginBottom: "2rem",
            padding: "1.25rem 1.5rem",
            borderLeft: "3px solid #46A6A8",
            backgroundColor: "#eef6f0",
            borderRadius: "0 4px 4px 0",
          }}>
            {article.summary}
          </p>
        )}

        {/* Content */}
        {article.content && (
          <div
            style={{ color: "#2F3E34", fontSize: "1rem", lineHeight: 1.85 }}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        )}
      </article>
    </main>
  );
}
