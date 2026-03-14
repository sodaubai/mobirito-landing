import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const slug = body.slug || body.story?.slug || "";
    
    if (slug === "home" || slug === "") {
      revalidatePath("/");
    } else {
      revalidatePath(`/${slug}`);
    }
    
    return NextResponse.json({ revalidated: true, slug });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug") || "";
  
  if (slug === "home" || slug === "") {
    revalidatePath("/");
  }
  revalidatePath(`/${slug}`);
  revalidatePath("/");
  
  return NextResponse.json({ revalidated: true, slug });
}
