import { NextResponse } from "next/server";

const MGMT_TOKEN = process.env.STORYBLOK_MGMT_TOKEN || "1bArUc1nKEZ1sABFX6RtcQtt-150877308433651-C_h4hKk6YXSa5X566_Nc";
const SPACE_ID = process.env.STORYBLOK_SPACE_ID || "290479562535549";
const FOLDER_ID = "161155480649513";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, vehicle_type, issue, message } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    const now = new Date();
    const slug = `submission-${now.getTime()}`;
    const storyName = `${name} - ${now.toISOString().slice(0, 16).replace("T", " ")}`;

    const res = await fetch(`https://mapi.storyblok.com/v1/spaces/${SPACE_ID}/stories`, {
      method: "POST",
      headers: {
        Authorization: MGMT_TOKEN,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        story: {
          name: storyName,
          slug,
          parent_id: FOLDER_ID,
          content: {
            component: "contact_submission",
            name: name || "",
            email: email || "",
            phone: phone || "",
            vehicle_type: vehicle_type || "",
            issue: issue || "",
            message: message || "",
            submitted_at: now.toISOString(),
            status: "new",
          },
        },
        publish: 1,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Storyblok error:", data);
      return NextResponse.json({ error: "Failed to save submission" }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data.story?.id });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
