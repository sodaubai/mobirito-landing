import { fetchStory } from "../lib/api";
import { DynamicComponent } from "../components/StoryblokComponents";

export default async function Home() {
  const story = await fetchStory("home");
  if (!story) return <div>Story not found</div>;
  return <DynamicComponent blok={story.content} />;
}
