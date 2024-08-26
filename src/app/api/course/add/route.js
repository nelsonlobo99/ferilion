import { PrismaClient } from "@prisma/client";
import { put } from '@vercel/blob';

const prisma = new PrismaClient();

export async function POST(req) {
    const data = await req.formData();
    try{
        const file = data.get("file");
        const fileName = file.name

        const blob = await put(fileName, file, {
            access: 'public',
        });

        const db_response = await prisma.courses.create({
            data: {
                name: data.get("courseName"),
                description: data.get("description"),
                coverImage: JSON.stringify(blob)
            }
        })

        const response_data = {
            courseId: db_response.id,
            courseName: db_response.name,
            description: db_response.description,
            coverImage: JSON.parse(db_response.coverImage).url
        }
        return Response.json({data: response_data}, {status: 200});
    }catch(error){
        console.log(error)
        return Response.json({error: "Error!"}, {status: 500});
    }
}