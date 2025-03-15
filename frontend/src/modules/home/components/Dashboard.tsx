import { Award, BarChart, Clock, Heart, MessageSquare, Paperclip } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ComparisonCard } from "@/components/ComparisonCard";
import { RedFlagsCard } from "@/components/RedFlagsCard";
import { TopWordsCard } from "@/components/TopWordsCard";
import { MessagesPerMonthChart } from "@/components/MessagesPerMonthChart";
import { useConvStats } from "../hooks/useConvStats";

const icons = [
    <MessageSquare className="w-4 h-4" />,
    <Heart className="w-4 h-4" />,
    <Paperclip className="w-4 h-4" />,
    <Clock className="w-4 h-4" />,
    <Award className="w-4 h-4" />]


export default function Dashboard() {
    const { data } = useConvStats();
    const { comparisons, topWords, messagesPerMonth, redFlags } = data!;
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <div className="flex flex-col">
                <div className="border-b bg-background">
                    <div className="container flex h-16 items-center px-4 sm:px-6 lg:px-8">
                        <h1 className="text-lg font-semibold">Chat Wrapped</h1>
                    </div>
                </div>
                <div className="container grid flex-1 items-start gap-4 px-4 py-6 sm:px-6 sm:py-8 md:gap-8 lg:px-8">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {comparisons.map(({ title, youValue, otherValue, youLabel, otherLabel }, index) => (
                            <ComparisonCard
                                key={index}
                                title={title}
                                icon={icons[index % icons.length]}
                                youValue={youValue}
                                otherValue={otherValue}
                                youLabel={youLabel}
                                otherLabel={otherLabel}
                            />
                        ))}
                        <RedFlagsCard redFlags={redFlags} />
                        <TopWordsCard person="other" words={topWords.other} />
                        <TopWordsCard person="you" words={topWords.you} />
                        <Card className="col-span-full bg-green-50/50">
                            <CardHeader className="pb-2">
                                <div className="flex flex-row items-center justify-center space-x-2">
                                    <div className="flex items-center justify-center">
                                        <BarChart className="h-5 w-5 text-muted-foreground" />
                                    </div>
                                    <CardTitle className="text-base font-medium text-center">Messages per Month</CardTitle>
                                </div>
                                <CardDescription className="text-center">Message frequency over the past year</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <MessagesPerMonthChart data={messagesPerMonth} />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
