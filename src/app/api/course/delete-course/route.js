// pages/api/course/[id].js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const { id } = req.query;  // Extract ID from query parameters

    if (req.method === 'GET') {
        try {
            // Fetch the course by ID
            const course = await prisma.courses.findUnique({
                where: { id: Number(id) },
            });

            // If no course found, return 404
            if (!course) {
                return res.status(404).json({ error: 'Course not found' });
            }

            // Map the course data to the desired format
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
    } else {
        // Method not allowed
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
