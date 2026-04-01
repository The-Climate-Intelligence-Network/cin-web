import { readItems } from "@directus/sdk";
import { directus } from "@/lib/directus";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const revalidate = 300;

interface InsightArticle {
  id: string;
  title: string;
  slug: string;
  summary?: string;
  content?: string;
  date_published?: string;
  author?: string;
  category?: string;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getInsight(slug: string): Promise<InsightArticle | null> {
  const items = await directus.request(
    readItems("insights", {
      filter: { slug: { _eq: slug } },
      limit: 1,
    })
  );
  return (items as InsightArticle[])[0] ?? null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = await getInsight(slug);
  if (!insight) return { title: "Not Found | CIN Insights" };
  return {
    title: `${insight.title} | CIN Insights`,
    description: insight.summary ?? undefined,
  };
}

export default async function InsightArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const insight = await getInsight(slug);

  if (!insight) notFound();

  return (
    <main style={{ backgroundColor: "#F7FAF4", minHeight: "100vh" }}>
      <article style={{ maxWidth: "800px", margin: "0 auto", padding: "3rem 1.5rem" }}>

        {/* Breadcrumb */}
        <nav style={{ marginBottom: "2rem" }}>
          <span style={{ color: "#568265", fontSize: "0.875rem", fontWeight: 500 }}>
            <a href="/insights" style={{ color: "#568265", textDecoration: "none" }}>
              Insights
            </a>
            {" "}
            <span style={{ color: "#46A6A8", margin: "0 0.5rem" }}>›</span>
            {" "}
            <span style={{ color: "#2F3E34" }}>{insight.title}</span>
          </span>
        </nav>

        {/* Category tag */}
        {insight.category && (
          <span style={{
            display: "inline-block",
            backgroundColor: "#6E5A9E",
            color: "#fff",
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "0.25rem 0.75rem",
            borderRadius: "2px",
            marginBottom: "1.25rem",
          }}>
            {insight.category}
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
          {insight.title}
        </h1>

        {/* Meta row */}
        {(insight.author || insight.date_published) && (
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
            {insight.author && <span>By <strong style={{ color: "#3F664F" }}>{insight.author}</strong></span>}
            {insight.date_published && (
              <span>
                {new Date(insight.date_published).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            )}
          </div>
        )}

        {/* Summary */}
        {insight.summary && (
          <p style={{
            fontSize: "1.125rem",
            color: "#2F3E34",
            lineHeight: 1.8,
            fontWeight: 500,
            marginBottom: "2rem",
            padding: "1.25rem 1.5rem",
            borderLeft: "3px solid #6E5A9E",
            backgroundColor: "#f0eef8",
            borderRadius: "0 4px 4px 0",
          }}>
            {insight.summary}
          </p>
        )}

        {/* Content */}
        {insight.content && (
          <div
            style={{ color: "#2F3E34", fontSize: "1rem", lineHeight: 1.85 }}
            dangerouslySetInnerHTML={{ __html: insight.content }}
          />
        )}
      </article>
    </main>
  );
}
