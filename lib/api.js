const TOKEN = process.env.NEXT_PUBLIC_STORYBLOK_TOKEN;
const BASE = "https://api.storyblok.com/v2/cdn";

export async function fetchStory(slug, preview = false) {
  const version = preview ? "draft" : "published";
  const cv = `&cv=${Date.now()}`;
  const res = await fetch(
    `${BASE}/stories/${slug}?version=${version}&token=${TOKEN}${cv}`,
    preview ? { cache: "no-store" } : { cache: "no-store" }
  );
  if (!res.ok) return null;
  const data = await res.json();
  return data.story;
}
