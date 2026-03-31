import Blog from "@/models/Blog";

export async function PUT(req, { params }) {
  const body = await req.json();

  const updated = await Blog.findByIdAndUpdate(
    params.id,
    body,
    { new: true }
  );

  return Response.json(updated);
}