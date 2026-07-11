/* eslint-disable @next/next/no-img-element */
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/container";
import { CTASection } from "@/app/(main)/sections/cta-section";
import { getBlogBySlug } from "@/lib/blogs";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Linkedin, Twitter } from "lucide-react";
import { GEO_CONFIG } from "@/lib/geo-config";
import { CopyLinkButton } from "./_components/copy-link-button";

type PageProps = {
  params: {
    slug: string;
  };
};

export const revalidate = 60;

export default async function BlogDetailPage({ params }: PageProps) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog || !blog.published) {
    notFound();
  }

  const slugify = (value: string) =>
    value
      .toLowerCase()
      .trim()
      .replace(/[\s]+/g, "-")
      .replace(/[^\w-]/g, "");

  const headingMatches =
    blog.content.match(/^#{2,3}\s+.+$/gm)?.map((line) => {
      const level = line.startsWith("###") ? 3 : 2;
      const text = line.replace(/^#{2,3}\s+/, "").trim();
      const id = slugify(text);
      return { level, text, id };
    }) ?? [];

  const wordCount = blog.content.split(/\s+/).filter(Boolean).length;
  const readMinutes = Math.max(1, Math.round(wordCount / 220));

  const articleUrl = `${GEO_CONFIG.baseUrl}/blogs/${blog.slug}`;
  const encodedUrl = encodeURIComponent(articleUrl);

  const shareLinks = {
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}`,
    x: `https://x.com/intent/tweet?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
  };

  return (
    <div className="bg-[#050A1B] min-h-screen text-white pb-20 sm:pb-24">
      <Container className="w-full max-w-[1200px] px-5 pt-28 sm:px-6 sm:pt-32">
        {/* Top nav */}
        <div className="mb-10 text-sm text-slate-300">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white"
          >
            <span className="text-lg">←</span>
            <span>Back to blogs</span>
          </Link>
        </div>

        <div className="mx-auto flex max-w-[1000px] flex-col items-start gap-8 md:flex-row md:gap-12">
          {/* Left index / table of contents */}
          <aside className="hidden md:block md:w-[260px] text-sm text-slate-300">
            {headingMatches.length > 0 && (
              <div className="space-y-4 sticky top-32">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  In this article
                </p>
                <ul className="space-y-2">
                  {headingMatches.map((h) => (
                    <li key={h.id} className={h.level === 3 ? "ml-3" : ""}>
                      <a
                        href={`#${h.id}`}
                        className="hover:text-white transition-colors"
                      >
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>

          {/* Main content */}
          <article className="w-full min-w-0 md:flex-1 md:max-w-[640px]">
            <header className="mb-6 space-y-4 sm:mb-8">
              <h1 className="text-balance text-2xl font-bold leading-[1.2] tracking-tight sm:text-3xl md:text-5xl md:leading-tight">
                {blog.title}
              </h1>

              {/* Author + share row */}
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-sm font-semibold">
                    WA
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-white">Wise Accelerate</p>
                    <p className="text-xs text-slate-400">
                      {readMinutes} min read
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="uppercase tracking-[0.2em]">Share</span>
                  <div className="flex items-center gap-2 text-slate-300">
                    <a
                      href={shareLinks.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Share on LinkedIn"
                      className="hover:text-white"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href={shareLinks.x}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Share on X"
                      className="hover:text-white"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a
                      href={shareLinks.facebook}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Share on Facebook"
                      className="hover:text-white"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <CopyLinkButton url={articleUrl} />
                  </div>
                </div>
              </div>
            </header>

            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ node, ...props }) => {
                  const text = String(props.children ?? "");
                  const id = slugify(text);
                  return (
                    <h1
                      id={id}
                      className="mt-10 mb-4 text-2xl md:text-3xl font-semibold leading-snug"
                      {...props}
                    />
                  );
                },
                h2: ({ node, ...props }) => {
                  const text = String(props.children ?? "");
                  const id = slugify(text);
                  return (
                    <h2
                      id={id}
                      className="mt-8 mb-3 text-2xl md:text-3xl font-semibold leading-snug"
                      {...props}
                    />
                  );
                },
                h3: ({ node, ...props }) => {
                  const text = String(props.children ?? "");
                  const id = slugify(text);
                  return (
                    <h3
                      id={id}
                      className="mt-6 mb-2 text-xl md:text-2xl font-semibold"
                      {...props}
                    />
                  );
                },
                p: ({ node, ...props }) => (
                  <p
                    className="mt-4 text-base md:text-lg leading-relaxed text-slate-100"
                    {...props}
                  />
                ),
                li: ({ node, ...props }) => (
                  <li
                    className="ml-6 text-base md:text-lg leading-relaxed text-slate-100 list-disc"
                    {...props}
                  />
                ),
                a: ({ node, ...props }) => (
                  <a
                    className="text-blue-400 underline underline-offset-2"
                    {...props}
                  />
                ),
                strong: ({ node, ...props }) => (
                  <strong className="font-semibold text-white" {...props} />
                ),
              }}
            >
              {blog.content}
            </ReactMarkdown>
          </article>
        </div>
      </Container>
      <section className="py-16 bg-[#01071A] mt-16">
        <CTASection />
      </section>
    </div>
  );
}
