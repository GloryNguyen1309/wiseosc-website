import Container from "@/components/container";
import { BlogListingImage } from "@/components/blog-listing-image";
import { CTASection } from "../(main)/sections/cta-section";
import { getPublishedBlogs } from "@/lib/blogs";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default async function BlogsPage() {
  const blogs = await getPublishedBlogs();

  return (
    <main className="overflow-x-hidden">
      <section className="bg-transparent bg-[radial-gradient(at_calc(75%)_0%,#004BAD_0%,#01071A_71%)] text-white relative overflow-hidden pb-12 md:pb-0">
        <div>
          <Container className="max-w-[1440px] w-full">
            <div className="container mx-auto px-4 pt-52 text-center sm:pt-60 relative z-10 pb-4 md:pb-0">
              <div className="inline-block w-fit bg-[#0e2648] py-2 px-5 pl-4 rounded-[12px] mb-6 bg-[linear-gradient(120deg,_#119CFF33_0%,_#119CFFAD_100%)]">
                <span className="text-[#3DB9F9] text-sm font-medium flex items-center">
                  <span className="text-center uppercase text-[#FFF] font-normal">
                    Blogs
                  </span>
                </span>
              </div>
              <h1 className="mb-6 text-balance text-4xl font-bold sm:text-5xl md:text-6xl">
                Research-Driven{" "}
                <span className="bg-[linear-gradient(165deg,_#119CFF,_#97F8F4)] bg-clip-text text-transparent font-bold md:text-[60px]">
                  Insights
                </span>
              </h1>
            </div>
          </Container>
        </div>
      </section>
      <section className="bg-[#01071A] py-12 pb-24 md:py-24 md:pb-24">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-4 sm:px-6 lg:px-8">
          {blogs.map((blog) => {
            const blogDate = new Date(blog.createdAt).toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              },
            );

            const cleanContent = blog.content
              .replace(/!\[.*?\]\(.*?\)/g, "")
              .replace(/\[.*?\]\(.*?\)/g, "")
              .replace(/<[^>]*>/g, "")
              .replace(/#{1,6}\s+/g, "")
              .replace(/\*\*([^*]+)\*\*/g, "$1")
              .replace(/\*([^*]+)\*/g, "$1")
              .replace(/`([^`]+)`/g, "$1")
              .replace(/```[\s\S]*?```/g, "")
              .replace(/^\s*[-*+]\s+/gm, "")
              .replace(/^\s*\d+\.\s+/gm, "")
              .replace(/\n+/g, " ")
              .trim();

            const preview = cleanContent.substring(0, 200);

            return (
              <Link
                key={blog.id}
                href={`/blogs/${blog.slug}`}
                className="group block w-full"
              >
                <Card className="overflow-hidden rounded-2xl border border-gray-600 bg-transparent text-white transition-all hover:border-blue-500 hover:shadow-[0_0_30px_rgba(17,156,255,0.35)] sm:rounded-3xl">
                  <div className="grid grid-cols-1 md:grid-cols-[minmax(340px,520px)_minmax(0,1fr)] md:items-stretch">
                    <div className="relative w-full min-h-[200px] overflow-hidden bg-[#0a1628] md:h-full md:min-h-[300px] md:rounded-l-3xl md:rounded-tr-none">
                      <div className="relative aspect-[16/9] w-full sm:aspect-[16/10] md:absolute md:inset-0 md:aspect-auto md:min-h-0">
                        <BlogListingImage
                          src={blog.coverImageUrl || "/placeholder.svg"}
                          alt={blog.title}
                        />
                      </div>
                    </div>
                    <CardContent className="flex min-w-0 flex-col justify-center px-5 pb-7 pt-5 sm:px-6 md:px-8 md:py-10 md:pb-10">
                      <h2 className="mb-3 text-left text-xl font-bold leading-snug tracking-tight text-balance sm:text-2xl md:text-3xl group-hover:text-blue-400 transition-colors">
                        {blog.title}
                      </h2>
                      <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-left text-xs text-gray-400 sm:text-sm">
                        <span>{blogDate}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>Wise Accelerate Team</span>
                      </div>
                      <p className="line-clamp-3 text-left text-sm leading-relaxed text-gray-300 sm:line-clamp-2 sm:text-base">
                        {preview}
                        {preview.length === 200 ? "..." : ""}
                      </p>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            );
          })}
          {blogs.length === 0 && (
            <p className="text-center text-slate-400">
              No blogs yet. Check back soon.
            </p>
          )}
        </div>
      </section>
      <section className="bg-[#01071A] pb-24 pt-10 md:py-16 md:pb-16">
        <CTASection />
      </section>
    </main>
  );
}
