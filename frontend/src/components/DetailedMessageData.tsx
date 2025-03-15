import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ComparisonCardProps {
    title: string
    icon: React.ReactNode
    youValue: string
    otherValue: string
    youLabel?: string
    otherLabel?: string
}

export function ComparisonCard({
    title,
    icon,
    youValue,
    otherValue,
    youLabel = "You",
    otherLabel = "Other",
}: ComparisonCardProps) {
    return (
        <Card className="bg-blue-50/50">
            <CardHeader className="flex flex-row items-center justify-center space-x-2 pb-2">
                <div className="flex items-center justify-center h-5 w-5 text-muted-foreground">{icon}</div>
                <CardTitle className="text-base font-medium text-center">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-between">
                    <div className="text-center">
                        <div className="text-2xl font-bold">{youValue}</div>
                        <p className="text-xs text-muted-foreground">{youLabel}</p>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold">{otherValue}</div>
                        <p className="text-xs text-muted-foreground">{otherLabel}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

