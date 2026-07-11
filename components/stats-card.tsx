import { Card, CardContent } from "@/components/ui/card"

interface StatsCardProps {
  number: string
  label: string
}

export function StatsCard({ number, label }: StatsCardProps) {
  return (
    <Card className="bg-blue-800/50 border-blue-700 text-center">
      <CardContent className="p-6">
        <div className="text-4xl font-bold text-blue-300 mb-2">{number}</div>
        <div className="text-white">{label}</div>
      </CardContent>
    </Card>
  )
}

