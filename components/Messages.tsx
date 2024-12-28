"use server";
import React from "react";
import prisma from "@/lib/prisma";
import { format } from "date-fns";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import NoImage from "./NoImage";
import { Button } from "./ui/button";
import UpvoteButton from "./UpvoteButton";

const Messages = async () => {
    const messages = await prisma?.messages.findMany({
        include: {
            user: true
        }
    });

    messages.reverse()

    if (!messages || messages.length === 0) {
        return <div><NoImage /></div>;
    }

    return (
        <div className="overflow-y-scroll scroll-m-2">
            {messages.map((message) => (
                <article
                    key={message.id}
                    className="p-3 bg-muted m-2 rounded-xl flex flex-col mt-5"
                >
                    <header className="flex justify-between items-center text-sm">
                        <div className="flex items-center justify-center">
                        <Avatar className="size-7">
                            <AvatarImage src={message.user?.image as string} alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span className="font-semibold ml-4">{message.user?.username || "Anonymous"}</span>
                        </div>
                        <time dateTime={message.createdAt as any}>
                            {format(new Date(message.createdAt), "PPpp")}
                        </time>
                    </header>
                    <p className="text-xl mt-2">{message.text || "No content available"}</p>
                    <UpvoteButton id={message.id} />
                </article>
            ))}
        </div>
    );
};

export default Messages;
