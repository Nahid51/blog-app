import prisma from "@/utils/prismaConnect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const POST_PER_PAGE = 2;
    const { searchParams } = new URL(req?.url);
    const page = searchParams?.get("page");

    try {
        const [posts, count] = await prisma?.$transaction([
            prisma.post.findMany({
                take: POST_PER_PAGE,
                skip: POST_PER_PAGE * (page - 1)
            }),
            prisma.post.count()

        ]);
        return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));

    } catch (error) {
        return new NextResponse(JSON.stringify({ message: "Something went wrong!" }, { status: 500 }));
    }
};