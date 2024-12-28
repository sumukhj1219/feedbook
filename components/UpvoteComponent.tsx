"use server"
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { TrendingUp, Triangle } from 'lucide-react'

const UpvoteComponent = async () => {
    const messages = await prisma?.messages.findMany({
        orderBy: {
            upvotes: 'desc'
        }
    });

    return (
        <div className="flex items-center justify-center">
            <Card className="w-[300px] m-2">
                <CardHeader>
                    <CardTitle className="flex items-center justify-center gap-2 text-lg font-bold">
                        Most Upvoted Messages <TrendingUp className="text-green-500" />
                    </CardTitle>
                    <CardDescription className="text-center text-gray-500">
                        The top messages voted by our users.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {messages?.map((message) => (
                        <div
                            key={message.id}
                            className="flex justify-between items-center p-3 bg-secondary rounded-lg shadow-sm"
                        >
                            <p className="flex-1 text-sm font-medium text-gray-800 truncate">
                                {message.text}
                            </p>
                            <div className="flex items-center gap-1 ml-4 text-sky-500">
                                <Triangle size={15} fill="currentColor" />
                                <span className="text-sm font-semibold">{message.upvotes}</span>
                            </div>
                        </div>
                    ))}
                </CardContent>
                <CardFooter className="flex justify-center text-sm text-gray-500">
                    Powered by your votes ❤️
                </CardFooter>
            </Card>
        </div>
    );
}

export default UpvoteComponent;
