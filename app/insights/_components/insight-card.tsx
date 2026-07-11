import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface InsightCardProps {
  title: string;
  category: string;
  image: string;
  date: string;
  author: string;
}

export default function InsightCard({
  title,
  category,
  image,
  date,
  author,
}: InsightCardProps) {
  return (
    <Card className="overflow-hidden pb-0 bg-transparent text-white border border-gray-500 hover:border-blue-600 transition-all rounded-xl hover:shadow-md group">
      <div className="relative p-4">
        <div className="absolute top-6 left-6 z-10">
          <Badge className="bg-blue-600 hover:bg-blue-700 text-white">
            {category}
          </Badge>
        </div>
        <div className="relative w-full aspect-[3/2]">
          <Image
            src={image || "/placeholder.svg?height=300&width=500"}
            alt={title}
            fill
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <CardContent className="p-0">
        <div className="px-4">
          <h2 className="text-xl font-bold mb-4 line-clamp-2 hover:text-blue-600 transition-colors">
            <a href="#">{title}</a>
          </h2>
        </div>
        <div className="flex py-2 px-3 bg-gray-500 text-white items-center text-sm group-hover:bg-blue-600">
          <div className="flex items-center">
            <span>{date}</span>
          </div>
          <div className="flex items-center ml-6">
            <span>{author}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
