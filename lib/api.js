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


export async function fetchBlogPosts() {
  const cv = `&cv=${Date.now()}`;
  const res = await fetch(
    `${BASE}/stories?starts_with=blog-posts/&version=published&token=${TOKEN}&sort_by=content.published_date:desc${cv}`,
    { cache: "no-store" }
  );
  if (!res.ok) return [];
  const data = await res.json();
  return data.stories || [];
}
