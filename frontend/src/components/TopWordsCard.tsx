import { BarChart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface TopWordsCardProps {
    person: "you" | "other"
    words: { word: string; count: number }[]
}

export function TopWordsCard({ person, words }: TopWordsCardProps) {

    return (
        <Card className={person === "you" ? "bg-blue-50/50" : "bg-purple-50/50"}>
            <CardHeader className="flex flex-row items-center justify-center space-x-2 pb-2">
                <div className="flex items-center justify-center">
                    <BarChart className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardTitle className="text-base font-medium text-center">
                    Top Used Words ({person === "you" ? "You" : "Other"})
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-3">
                    {words.map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                            <span className="text-sm font-medium">{item.word}</span>
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-24 rounded-full bg-muted overflow-hidden">
                                    <div
                                        className={`h-full ${person === "you" ? "bg-blue-500" : "bg-purple-500"}`}
                                        style={{ width: `${(item.count / words[0].count) * 100}%` }}
                                    />
                                </div>
                                <span className="text-xs text-muted-foreground">{item.count}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

