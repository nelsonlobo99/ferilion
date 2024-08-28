import { PrismaClient } from "@prisma/client";

import { del, put} from '@vercel/blob';

const prisma = new PrismaClient();

export async function UPDATE(req){
    const data = await req.formData();
    const courseId = data.get("id");


    const updated_data = {
        courseName: data.get("courseName"),
        description: data.get("description"),
        coverImage: "",
    }
    try{
        const file = data.get("file");

        if(file){
            const fileName = file.name
            await del(data.get("coverImage"))

            
            const blob = await put(fileName, file, {
                access: 'public',
            });


            updated_data.coverImage(JSON.stringify(blob));
        }

        const course = await prisma.courses.findFirst({id: courseId});

        const updated_course = await prisma.courses.update({
            where: {
                id: courseId
            },
            data: {
                name: updated_data.courseName !== course.name || updated_data.courseName !== "" ? updated_data.courseName : course.name,
                description: updated_data.description !== course.description || updated_data.description !== "" ? updated_data.description : course.description,
                coverImage: updated_data.coverImage !== "" ? updated_data.coverImage : course.coverImage
            }
        });

        return Response({data: updated_course}, {status: 200});
    }catch(error){
        console.log(error);
        return Response({error}, {status: 500});
    }
}