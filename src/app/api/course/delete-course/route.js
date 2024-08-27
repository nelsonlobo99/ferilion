import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(req) {
  // Extract course ID from URL params
  const data = await req.formData();

  const courseId = data.get("courseId");

  console.log(courseId)

  try {
    await prisma.courses.delete({
      where: { id: Number(courseId) },
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error deleting course:', error);
    return new Response(JSON.stringify({ error: 'Error deleting course' }), {
      status: 500,
    });
  }
}
