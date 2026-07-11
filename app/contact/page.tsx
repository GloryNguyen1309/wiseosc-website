import Container from "@/components/container";
import ContactForm from "./_components/contact-form";

export default function ContactPage() {
  return (
    <div className="min-h-[100dvh] bg-transparent bg-[radial-gradient(at_calc(75%)_0%,#004BAD_0%,#01071A_71%)]">
      <Container className="max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </Container>
    </div>
  );
}
