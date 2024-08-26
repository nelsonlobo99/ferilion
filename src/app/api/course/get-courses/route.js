import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(){
    try{
        const data = await prisma.courses.findMany()
        return Response.json({data: data}, {status: 200});

    }catch{
        return Response.json({error: "Error!"}, {status: 500});
    }
}