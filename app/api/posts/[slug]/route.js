import prisma from "@/utils/prismaConnect";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    const { slug } = await params;
    
    try {
        const post = await prisma?.post?.findUnique({
            where: { slug },
            include: { user: true }
        })
        return new NextResponse(JSON.stringify(post, { status: 200 }));

    } catch (error) {
        return new NextResponse(JSON.stringify({ message: "Something went wrong!" }, { status: 500 }));
    }
};