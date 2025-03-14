import { BarChart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface TopWordsCardProps {
    person: "you" | "other"
}

export function TopWordsCard({ person }: TopWordsCardProps) {
    // Mock data for top words
    const topWords =
        person === "you"
            ? [
                { word: "definitely", count: 87 },
                { word: "awesome", count: 65 },
                { word: "thanks", count: 54 },
                { word: "cool", count: 43 },
                { word: "sure", count: 38 },
            ]
            : [
                { word: "like", count: 112 },
                { word: "maybe", count: 78 },
                { word: "yeah", count: 67 },
                { word: "okay", count: 52 },
                { word: "haha", count: 49 },
            ]

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
                    {topWords.map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                            <span className="text-sm font-medium">{item.word}</span>
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-24 rounded-full bg-muted overflow-hidden">
                                    <div
                                        className={`h-full ${person === "you" ? "bg-blue-500" : "bg-purple-500"}`}
                                        style={{ width: `${(item.count / topWords[0].count) * 100}%` }}
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

