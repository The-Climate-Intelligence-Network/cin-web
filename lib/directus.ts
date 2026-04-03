import { createDirectus, rest } from '@directus/sdk';

export interface annual_reports {
  title?: string;
}

export interface authors {}

export interface categories {
  name?: string;
  slug?: string;
  created_at?: string;
  id?: string;
  description?: string;
  parent_id?: string;
  parent?: any;
}

export interface contact_submissions {}

export interface dashboards {}

export interface datasets {
  id?: string;
  title?: string;
}

export interface developer_applications {}

export interface insights {
  id?: string;
  title?: string;
  slug?: string;
  summary?: string;
  content?: any;
  date_published?: string;
  author?: string;
  author_id?: string;
  category?: string;
}

export interface knowledge_resources {
  content?: any;
  id?: string;
  title?: string;
  slug?: string;
  summary?: string;
  featured_image?: string;
  author_id?: string;
  external_url?: string;
  source_name?: string;
  publication_year?: number;
  status?: string;
  published_at?: string;
  created_at?: string;
  category?: string;
  tags?: any;
  resource_type?: string;
}

export interface news {
  title?: string;
  id?: string;
  content?: any;
}

export interface pages {
  content?: any;
  id?: string;
  title?: string;
  slug?: string;
  page_type?: any;
  seo_title?: string;
  seo_description?: string;
  status?: string;
  published_at?: string;
  created_at?: string;
}

export interface tags {
  name?: string;
  id?: string;
  slug?: string;
  created_at?: string;
}

export interface tools {}

export interface Schema {
  annual_reports: annual_reports[];
  authors: authors[];
  categories: categories[];
  contact_submissions: contact_submissions[];
  dashboards: dashboards[];
  datasets: datasets[];
  developer_applications: developer_applications[];
  insights: insights[];
  knowledge_resources: knowledge_resources[];
  news: news[];
  pages: pages[];
  tags: tags[];
  tools: tools[];
}

const directusUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL || "https://cms.theclimateintel.org";
export const directus = createDirectus<Schema>(directusUrl).with(rest());
