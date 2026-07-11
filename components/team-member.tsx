import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface TeamMemberProps {
  image: string
  name: string
  position: string
}

export function TeamMember({ image, name, position }: TeamMemberProps) {
  return (
    <Card className="bg-transparent border-0 overflow-hidden">
      <CardContent className="p-0">
        <div className="aspect-square relative overflow-hidden rounded-lg mb-4">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-blue-300">{position}</p>
      </CardContent>
    </Card>
  )
}

