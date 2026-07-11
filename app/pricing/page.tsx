import { Check, ArrowRight } from "lucide-react";
import { TestimonialsSection } from "../(main)/sections/testimonials-section";
import { CTASection } from "../(main)/sections/cta-section";
import Container from "@/components/container";

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-80 bg-[#050A18] text-white px-4 py-12 md:px-8 lg:px-16">
      <Container>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-center items-center mb-6">
              <div className="bg-[#1E3A8A] px-3 py-1 rounded-md text-sm flex items-center">
                <span className="mr-1">🤝</span> ABOUT US
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Digital Product
              <span className="text-[#3B82F6]">Studio</span>.
            </h1>
          </div>
        </div>
      </Container>
      <Container className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <PricingCard
            title="Starter"
            description="Lorem ipsum dolor sit amet"
            price="$1999"
            deliveryTime="1 week delivery"
            features={[
              "Responsive Web Design",
              "Custom Design",
              "Free Logo Design",
              "CMS - WordPress",
              "On-website SEO",
            ]}
          />

          <PricingCard
            title="Growth"
            description="Lorem ipsum dolor sit amet"
            price="$2999"
            deliveryTime="2 week delivery"
            features={[
              "Responsive Web Design",
              "Custom Design",
              "Free Logo Design",
              "CMS - WordPress",
              "On-website SEO",
            ]}
            recommended={true}
          />

          <PricingCard
            title="Expansion"
            description="Lorem ipsum dolor sit amet"
            price="$3999"
            deliveryTime="3 week delivery"
            features={[
              "Responsive Web Design",
              "Custom Design",
              "Free Logo Design",
              "CMS - WordPress",
              "On-website SEO",
            ]}
          />
        </div>

        <div className="bg-[#0A1428] rounded-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-medium">
                Looking for a{" "}
                <span className="text-[#7ECBF7]">customized package?</span>
              </h2>
              <p className="text-gray-400 max-w-2xl">
                If our plans don't match your project or you want to talk it
                over first, let's have a call or lets talk while having a
                coffee.
              </p>
            </div>
            <SelectPackageButton />
          </div>
        </div>
      </Container>
      <TestimonialsSection />
      <Container className="w-full max-w-[1400px]">
        <CTASection className="h-[700px]" />
      </Container>
    </div>
  );
}

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  deliveryTime: string;
  features: string[];
  recommended?: boolean;
}

function PricingCard({
  title,
  description,
  price,
  deliveryTime,
  features,
  recommended = false,
}: PricingCardProps) {
  return (
    <div
      className={`bg-[#0A1428] border border-[#1A2A40] rounded-lg overflow-hidden relative ${
        recommended ? "bg-[#1A65D6]" : ""
      }`}
    >
      {recommended && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-[#A3F55B] text-[#050A18] text-xs font-bold px-4 py-1 rounded-full">
            RECOMMENDED
          </div>
        </div>
      )}

      <div className="p-6 text-center">
        <h3 className="text-2xl font-medium mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-6">{description}</p>

        <div
          className={`${
            recommended ? "bg-[#7ECBF7]/20" : "bg-[#7ECBF7]/30"
          } rounded-lg p-6 mb-6`}
        >
          <div className="text-4xl md:text-5xl font-bold mb-2">{price}</div>
          <div className="text-sm text-gray-300">{deliveryTime}</div>
        </div>

        <div className="space-y-4 text-left mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="mr-3 mt-1">
                <Check className="h-4 w-4 text-[#7ECBF7]" />
              </div>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <SelectPackageButton />
      </div>
    </div>
  );
}

function SelectPackageButton() {
  return (
    <button className="w-full bg-[#7ECBF7]/30 hover:bg-[#7ECBF7]/40 text-white rounded-lg py-3 px-4 flex items-center justify-center transition-colors">
      <span className="mr-2">Select package</span>
      <ArrowRight className="h-4 w-4" />
    </button>
  );
}
