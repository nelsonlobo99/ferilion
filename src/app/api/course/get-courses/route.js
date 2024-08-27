import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(){
    try{
        const data = await prisma.courses.findMany()
        const response_data = data.map(course => {

            return {
                id: course.id,
                courseName: course.name,
                description: course.description,
                coverImage: course.coverImage ? JSON.parse(course.coverImage).url : ""
            }    
        });

        return Response.json({data: response_data}, {status: 200});

    }catch(error){
        console.log(error)
        return Response.json({error: "Error!"}, {status: 500});
    }
}