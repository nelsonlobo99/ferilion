import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
    const data = await req.formData();
    console.log(data.get("description"));
    try{
        const response_data = await prisma.courses.create({
            data: {
                name: data.get("courseName"),
                description: data.get("description"),
                coverImage: ''
            }
        })
        return Response.json({data: response_data}, {status: 200});
    }catch(error){
        console.log(error)
        return Response.json({error: "Error!"}, {status: 500});
    }
}