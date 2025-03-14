import { MessageSquare, Clock, Heart, Paperclip, Award, BarChart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ComparisonCard } from "@/components/ComparisonCard"
import { RedFlagsCard } from "@/components/RedFlagsCard"
import { TopWordsCard } from "@/components/TopWordsCard"
import { MessagesPerMonthChart } from "@/components/MessagesPerMonthChart"
// import { DetailedMessageData } from "@/components/detailed-message-data" // Uncomment to use the detailed version

export default function Dashboard() {
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
                        <ComparisonCard
                            title="Message Count"
                            icon={<MessageSquare className="h-4 w-4" />}
                            youValue="1,245"
                            otherValue="1,387"
                            youLabel="You"
                            otherLabel="Other"
                        />
                        <ComparisonCard
                            title="Interest Level"
                            icon={<Heart className="h-4 w-4" />}
                            youValue="High"
                            otherValue="Medium"
                            youLabel="You"
                            otherLabel="Other"
                        />
                        <RedFlagsCard />
                        <ComparisonCard
                            title="Attachment Style"
                            icon={<Paperclip className="h-4 w-4" />}
                            youValue="Secure"
                            otherValue="Anxious"
                            youLabel="You"
                            otherLabel="Other"
                        />
                        <ComparisonCard
                            title="Average Response Time"
                            icon={<Clock className="h-4 w-4" />}
                            youValue="5 min"
                            otherValue="12 min"
                            youLabel="You"
                            otherLabel="Other"
                        />
                        <ComparisonCard
                            title="Compliment Count"
                            icon={<Award className="h-4 w-4" />}
                            youValue="37"
                            otherValue="24"
                            youLabel="You"
                            otherLabel="Other"
                        />
                        <TopWordsCard person="other" />
                        <TopWordsCard person="you" />
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
                                <MessagesPerMonthChart />
                                {/* Alternatively, you can use the detailed version with tabs: */}
                                {/* <DetailedMessageData /> */}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

