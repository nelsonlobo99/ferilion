import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function GET(req, {params}){
    try{
        const course = await prisma.courses.findFirst({
            where: {
                id: Number(params.courseId)
            }
        });

        console.log(course)

        if(!course) return Response.json({error: 'No Data Found'}, {status: 400});
        
        course.coverImage = JSON.parse(course.coverImage).url
        return Response.json({data: course}, {status: 200});
    }catch(error){
        return Response.json({error: error}, {status: 500});
    }
}