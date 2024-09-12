import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const { id } = req.query;  
    try {
      
        const course = await prisma.courses.findUnique({
            where: { id: Number(id) },
        });

       
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }

       
        const response_data = {
            id: course.id,
            courseName: course.name,
            description: course.description,
            coverImage: course.coverImage ? JSON.parse(course.coverImage).url : ""
        };

        res.status(200).json({ data: response_data });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error fetching course details" });
    }
}
