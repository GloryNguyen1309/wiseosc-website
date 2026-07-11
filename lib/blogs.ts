import blogsData from "@/data/blogs.json";

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

const blogs = blogsData as Blog[];

function sortByNewest(items: Blog[]): Blog[] {
  return [...items].sort(
    (a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
}

export async function getPublishedBlogs(): Promise<Blog[]> {
  return sortByNewest(blogs.filter((blog) => blog.published));
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  return blogs.find((blog) => blog.slug === slug) ?? null;
}

export async function getAllBlogs(): Promise<Blog[]> {
  return sortByNewest(blogs);
}
