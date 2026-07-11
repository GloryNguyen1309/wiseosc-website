import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { X, ChevronDown } from "lucide-react";

interface FAQItemProps {
  number: string;
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export function FAQItem({
  number,
  question,
  answer,
  defaultOpen = false,
}: FAQItemProps) {
  return (
    <>
      <div className="bg-[#0A1428] rounded-lg overflow-hidden">
        <Accordion
          type="single"
          collapsible
          defaultValue={defaultOpen ? number : undefined}
        >
          <AccordionItem value={number} className="border-0">
            <div className="flex items-center justify-between p-6">
              <div className="flex items-center gap-6">
                <span className="text-gray-400 text-xl">{number}</span>
                <AccordionTrigger className="hover:no-underline p-0 m-0">
                  <h3 className="text-xl font-medium text-left">{question}</h3>
                </AccordionTrigger>
              </div>
              <div className="flex items-center">
                {defaultOpen ? (
                  <div className="bg-[#111E32] p-2 rounded-full">
                    <X className="h-5 w-5 text-white" />
                  </div>
                ) : (
                  <div className="bg-[#111E32] p-2 rounded-full">
                    <ChevronDown className="h-5 w-5 text-white" />
                  </div>
                )}
              </div>
            </div>
            <AccordionContent className="px-6 pb-6 pt-0 ml-12">
              <p className="text-gray-400">{answer}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
