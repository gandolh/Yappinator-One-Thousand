import { AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function RedFlagsCard() {
    const redFlags = [
        "Takes hours to respond on weekends",
        "Frequently cancels plans last minute",
        "Never initiates conversations",
    ]

    return (
        <Card className="bg-red-50/50">
            <CardHeader className="flex flex-row items-center justify-center space-x-2 pb-2">
                <div className="flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                </div>
                <CardTitle className="text-base font-medium text-center">Red Flags</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-2">
                    {redFlags.map((flag, index) => (
                        <li key={index} className="flex items-start gap-2">
                            <span className="text-destructive">•</span>
                            <span className="text-sm">{flag}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}

