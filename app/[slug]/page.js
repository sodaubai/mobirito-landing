import { fetchStory } from "../../lib/api";
import { DynamicComponent } from "../../components/StoryblokComponents";

export async function generateStaticParams() {
  return [
    { slug: "about" },
    { slug: "service" },
    { slug: "portfolio" },
    { slug: "portfolio-details" },
    { slug: "blog" },
    { slug: "contact" },
  ];
}

export default async function Page({ params }) {
  const { slug } = await params;
  const story = await fetchStory(slug);
  if (!story) return <div>Page not found</div>;
  return <DynamicComponent blok={story.content} />;
}
