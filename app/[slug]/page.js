export const dynamic = "force-dynamic";
import { fetchStory } from "../../lib/api";
import { DynamicComponent } from "../../components/StoryblokComponents";
import FeaturesPageContent from "../../components/FeaturesPageContent";
import RoadmapPageContent from "../../components/RoadmapPageContent";

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

const CUSTOM_PAGES = {
  service: FeaturesPageContent,
  portfolio: RoadmapPageContent,
};

export default async function Page({ params }) {
  const { slug } = await params;
  const story = await fetchStory(slug);
  if (!story) return <div>Page not found</div>;

  const CustomContent = CUSTOM_PAGES[slug];
  if (CustomContent) {
    const c = story.content;
    return (
      <>
        {c.navbar?.map(b => <DynamicComponent key={b._uid} blok={b} />)}
        <CustomContent />
        {c.footer?.map(b => <DynamicComponent key={b._uid} blok={b} />)}
      </>
    );
  }

  return <DynamicComponent blok={story.content} />;
}
