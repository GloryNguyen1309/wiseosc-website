import { CTASection } from "../(main)/sections/cta-section";
import { FAQItem } from "./_components/faq-items";

export default function FAQPage() {
  return (
    <div className="min-h-screen pt-80 bg-[#050A18] text-white px-4 py-12 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#0A1428] text-white border border-[#1A2A40]">
            <span className="mr-2">📝</span> FAQ QUESTIONS
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-20">
          Frequently asked <span className="text-[#7ECBF7]">questions</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#0A1428] text-white border border-[#1A2A40]">
              <span className="mr-2">📄</span> QUESTIONS & ANSWER
            </div>

            <h2 className="text-3xl font-bold">
              Your Questions <br />
              <span className="text-[#7ECBF7]">Answered</span>
            </h2>
          </div>

          <div className="space-y-4">
            <FAQItem
              number="01"
              question="Why choose us for your software development needs?"
              answer="We combine technical expertise with business acumen to deliver software solutions that drive real value. Our team specializes in modern technologies, agile methodologies, and staff augmentation, ensuring your project is delivered on time and within budget."
              defaultOpen={true}
            />

            <FAQItem
              number="02"
              question="What separates us from other software development agencies?"
              answer="Our unique approach focuses on staff augmentation and long-term partnerships. We don't just build software—we integrate seamlessly into your team, understand your business goals, and provide ongoing support with rigorous quality assurance. Our developers become an extension of your team."
            />

            <FAQItem
              number="03"
              question="How much does software development cost?"
              answer="Pricing varies based on project scope, team size, and complexity. We offer flexible engagement models including staff augmentation, project-based development, and dedicated teams. Book a free trial onboarding discussion for a customized quote tailored to your specific requirements and budget."
            />

            <FAQItem
              number="04"
              question="What software development services do you offer?"
              answer="We provide comprehensive software development services including full-stack web development, mobile app development, API integrations, cloud solutions, staff augmentation, quality assurance, and ongoing maintenance. Our expertise spans modern frameworks and technologies across the entire software development lifecycle."
            />
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <section className="py-16 bg-[#0a1122]">
        <CTASection />
      </section>
    </div>
  );
}
