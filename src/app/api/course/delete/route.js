import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(req, { params }) {
  // Extract course ID from URL params
  const { id } = params;

  try {
    // Check if the ID is valid
    if (!id || isNaN(Number(id))) {
      return new Response(JSON.stringify({ error: 'Invalid course ID' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    // Check if the course exists
    const course = await prisma.courses.findUnique({
      where: { id: Number(id) },
    });

    if (!course) {
      return new Response(JSON.stringify({ error: 'Course not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    // Delete the course
    await prisma.courses.delete({
      where: { id: Number(id) },
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error deleting course:', error);
    return new Response(JSON.stringify({ error: 'Error deleting course' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
