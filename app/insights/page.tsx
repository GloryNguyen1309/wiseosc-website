import Container from "@/components/container";
import InsightCard from "./_components/insight-card";
import { CTASection } from "../(main)/sections/cta-section";

export default function InsightsPage() {
  const posts = [
    {
      id: 1,
      title: "Top 10 Software Development Trends You Need to Know in 2024",
      category: "Technology Trends",
      image: "/placeholder.svg?height=600&width=800",
      date: "May 18, 2024",
      author: "oneprobl4ckMild",
    },
    {
      id: 2,
      title: "How to Scale Your Application: Proven Architecture Strategies",
      category: "System Architecture",
      image: "/placeholder.svg?height=600&width=800",
      date: "May 18, 2024",
      author: "oneprobl4ckMild",
    },
    {
      id: 3,
      title: "The Ultimate Guide to Staff Augmentation: Best Practices",
      category: "Team Building",
      image: "/placeholder.svg?height=600&width=800",
      date: "May 18, 2024",
      author: "oneprobl4ckMild",
    },
    {
      id: 4,
      title: "Maximize Your Development ROI: Effective Agile Methodologies",
      category: "Project Management",
      image: "/placeholder.svg?height=600&width=800",
      date: "May 18, 2024",
      author: "oneprobl4ckMild",
    },
    {
      id: 5,
      title: "Essential Tools for Web Developers: Streamline Your Workflow",
      category: "Developer Tools",
      image: "/placeholder.svg?height=600&width=800",
      date: "May 18, 2024",
      author: "oneprobl4ckMild",
    },
    {
      id: 6,
      title:
        "Designing for Accessibility: Making Your Website Inclusive for All Users",
      category: "Best Practices",
      image: "/placeholder.svg?height=600&width=800",
      date: "May 18, 2024",
      author: "oneprobl4ckMild",
    },
  ];

  return (
    <div className="bg-[#050A1B] min-h-screen flex flex-col pb-10 gap-10">
      <Container className="min-h-screen mt-[200px] lg:mt-0 grid place-items-center w-full max-w-[1400px] ">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-center items-center mb-6">
              <div className="bg-[#1E3A8A] px-3 py-1 rounded-md text-sm flex items-center">
                <span className="mr-1">🤝</span> CONTACT
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Our <span className="text-[#3B82F6]">Insights</span>.
            </h1>
          </div>
          <section>
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <InsightCard
                    key={post.id}
                    title={post.title}
                    category={post.category}
                    image={post.image}
                    date={post.date}
                    author={post.author}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </Container>
      <Container className="w-full max-w-[1400px]">
        <CTASection className="h-[700px]" />
      </Container>
    </div>
  );
}
