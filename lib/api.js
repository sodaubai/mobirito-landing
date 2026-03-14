const TOKEN = process.env.NEXT_PUBLIC_STORYBLOK_TOKEN;
const BASE = "https://api.storyblok.com/v2/cdn";

export async function fetchStory(slug) {
  const res = await fetch(
    `${BASE}/stories/${slug}?version=published&token=${TOKEN}`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) return null;
  const data = await res.json();
  return data.story;
}
