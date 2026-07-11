import { notFound } from "next/navigation";

type PageProps = {
  params: {
    slug: string;
  };
};

export default function BlogDetailPage(_props: PageProps) {
  notFound();
}
