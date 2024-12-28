import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@/auth";

export async function POST(request: NextRequest) {
  try {
    const values = await request.json();
    const { text } = values;
    const session = await auth();

    if (!session?.user?.name) {
      return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
    }

    if (text === "") {
      return NextResponse.json({ message: "Please enter some text" }, { status: 400 });
    }

    let existingUser = await prisma.user.findUnique({
      where: {
        username: session.user.name,
      },
    });

    if (!existingUser) {
      existingUser = await prisma.user.create({
        data: {
          username: session.user.name,
          email: session.user.email,
          image: session.user.image
        },
      });
    }

    await prisma.messages.create({
      data: {
        text,
        userId: existingUser.id,
      },
    });

    return NextResponse.json({ message: "Message added successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error handling POST request:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
