import { sql } from "@vercel/postgres";

export type Blog = {
  id: number;
  title: string;
  slug: string;
  content: string;
  coverImageUrl: string | null;
  createdAt: string;
  updatedAt: string;
  published: boolean;
};

async function ensureTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS blogs (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      content TEXT NOT NULL,
      cover_image_url TEXT,
      published BOOLEAN NOT NULL DEFAULT TRUE,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `;
}

export async function getPublishedBlogs(): Promise<Blog[]> {
  await ensureTable();

  const result =
    await sql`SELECT id, title, slug, content, cover_image_url, published, created_at, updated_at FROM blogs WHERE published = TRUE ORDER BY created_at DESC`;

  return result.rows.map(rowToBlog);
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  await ensureTable();

  const result =
    await sql`SELECT id, title, slug, content, cover_image_url, published, created_at, updated_at FROM blogs WHERE slug = ${slug} LIMIT 1`;

  if (result.rowCount === 0) return null;
  return rowToBlog(result.rows[0]);
}

export async function getAllBlogs(): Promise<Blog[]> {
  await ensureTable();

  const result =
    await sql`SELECT id, title, slug, content, cover_image_url, published, created_at, updated_at FROM blogs ORDER BY created_at DESC`;

  return result.rows.map(rowToBlog);
}

export async function createBlog(data: {
  title: string;
  slug: string;
  content: string;
  coverImageUrl?: string | null;
  published?: boolean;
}): Promise<Blog> {
  await ensureTable();

  const result = await sql`
    INSERT INTO blogs (title, slug, content, cover_image_url, published)
    VALUES (${data.title}, ${data.slug}, ${data.content}, ${data.coverImageUrl ?? null}, ${
      data.published ?? true
    })
    RETURNING id, title, slug, content, cover_image_url, published, created_at, updated_at
  `;

  return rowToBlog(result.rows[0]);
}

export async function updateBlog(
  id: number,
  data: {
    title?: string;
    slug?: string;
    content?: string;
    coverImageUrl?: string | null;
    published?: boolean;
  },
): Promise<Blog> {
  await ensureTable();

  // Fetch current values
  const existing =
    await sql`SELECT id, title, slug, content, cover_image_url, published FROM blogs WHERE id = ${id} LIMIT 1`;

  if (existing.rowCount === 0) {
    throw new Error("Blog not found");
  }

  const current = existing.rows[0];

  const result = await sql`
    UPDATE blogs
    SET
      title = ${data.title ?? current.title},
      slug = ${data.slug ?? current.slug},
      content = ${data.content ?? current.content},
      cover_image_url = ${
        data.coverImageUrl !== undefined
          ? data.coverImageUrl
          : current.cover_image_url
      },
      published = ${data.published ?? current.published},
      updated_at = NOW()
    WHERE id = ${id}
    RETURNING id, title, slug, content, cover_image_url, published, created_at, updated_at
  `;

  return rowToBlog(result.rows[0]);
}

export async function deleteBlog(id: number): Promise<void> {
  await ensureTable();
  await sql`DELETE FROM blogs WHERE id = ${id}`;
}

function rowToBlog(row: any): Blog {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    content: row.content,
    coverImageUrl: row.cover_image_url ?? null,
    published: row.published,
    createdAt: row.created_at?.toISOString
      ? row.created_at.toISOString()
      : String(row.created_at),
    updatedAt: row.updated_at?.toISOString
      ? row.updated_at.toISOString()
      : String(row.updated_at),
  };
}

