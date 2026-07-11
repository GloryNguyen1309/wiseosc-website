import { NextResponse } from "next/server";
import { deleteBlog, updateBlog } from "@/lib/blogs";

type Params = {
  params: {
    id: string;
  };
};

export async function PUT(request: Request, { params }: Params) {
  try {
    const id = Number(params.id);
    if (Number.isNaN(id)) {
      return NextResponse.json({ error: "Invalid id" }, { status: 400 });
    }

    const body = await request.json();

    const blog = await updateBlog(id, body);

    return NextResponse.json(blog);
  } catch (error) {
    console.error("Error updating blog", error);
    return NextResponse.json(
      { error: "Failed to update blog" },
      { status: 500 },
    );
  }
}

export async function DELETE(_request: Request, { params }: Params) {
  try {
    const id = Number(params.id);
    if (Number.isNaN(id)) {
      return NextResponse.json({ error: "Invalid id" }, { status: 400 });
    }

    await deleteBlog(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting blog", error);
    return NextResponse.json(
      { error: "Failed to delete blog" },
      { status: 500 },
    );
  }
}

