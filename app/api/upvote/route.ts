"use server";
import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { id } = await req.json();
        const updatedMessage = await prisma.messages.update({
            where: { id },
            data: { upvotes: { increment: 1 } },
        });
        return NextResponse.json(updatedMessage);
    } catch (error) {
        return NextResponse.json({ error: "Failed to update upvotes" }, { status: 500 });
    }
}
