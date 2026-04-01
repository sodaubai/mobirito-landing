export const dynamic = "force-dynamic";
import { fetchStory } from "../../lib/api";
import { DynamicComponent } from "../../components/StoryblokComponents";
import FeaturesPageContent from "../../components/FeaturesPageContent";
import RoadmapPageContent from "../../components/RoadmapPageContent";
import AboutPageContent from "../../components/AboutPageContent";
import ContactPageContent from "../../components/ContactPageContent";
import BlogPageContent from "../../components/BlogPageContent";

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
  about: AboutPageContent,
  contact: ContactPageContent,
  blog: BlogPageContent,
};

export default async function Page({ params }) {
  const { slug } = await params;
  const [story, homeStory] = await Promise.all([
    fetchStory(slug),
    fetchStory("home"),
  ]);
  if (!story) return <div>Page not found</div>;

  const CustomContent = CUSTOM_PAGES[slug];
  if (CustomContent) {
    const c = story.content;
    const footerData = c.footer?.length ? c.footer : homeStory?.content?.footer || [];
    return (
      <>
        {c.navbar?.map(b => <DynamicComponent key={b._uid} blok={b} />)}
        <CustomContent />
        {footerData.map(b => <DynamicComponent key={b._uid} blok={b} />)}
      </>
    );
  }

  return <DynamicComponent blok={story.content} />;
}
