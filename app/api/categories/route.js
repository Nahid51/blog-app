import prisma from "@/utils/prismaConnect";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const categories = await prisma?.category?.findMany();
        return new NextResponse(JSON.stringify(categories, { status: 200 }));

    } catch (error) {
        return new NextResponse(JSON.stringify({ message: "Something went wrong!" }, { status: 500 }));
    }
};