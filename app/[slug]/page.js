export const dynamic = "force-dynamic";
import { fetchStory } from "../../lib/api";
import { fetchBlogPosts } from "../../lib/api";
import { DynamicComponent } from "../../components/StoryblokComponents";
import FeaturesPageContent from "../../components/FeaturesPageContent";
import RoadmapPageContent from "../../components/RoadmapPageContent";
import AboutPageContent from "../../components/AboutPageContent";
import ContactPageContent from "../../components/ContactPageContent";
import BlogPageContent from "../../components/BlogPageContent";
import PrivacyPolicyPage from "../../components/PrivacyPolicyPage";
import TermsOfServicePage from "../../components/TermsOfServicePage";

export async function generateStaticParams() {
  return [
    { slug: "about" },
    { slug: "service" },
    { slug: "portfolio" },
    { slug: "portfolio-details" },
    { slug: "blog" },
    { slug: "contact" },
    { slug: "privacy-policy" },
    { slug: "terms-of-service" },
  ];
}

const CUSTOM_PAGES = {
  service: FeaturesPageContent,
  portfolio: RoadmapPageContent,
  about: AboutPageContent,
  contact: ContactPageContent,
  blog: BlogPageContent,
  "privacy-policy": PrivacyPolicyPage,
  "terms-of-service": TermsOfServicePage,
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
    const footerData = homeStory?.content?.footer || [];

    let extraProps = {};
    if (slug === "blog") {
      const blogPosts = await fetchBlogPosts();
      extraProps.posts = blogPosts;
    }

    return (
      <>
        {c.navbar?.map(b => <DynamicComponent key={b._uid} blok={b} />)}
        <CustomContent {...extraProps} />
        {footerData.map(b => <DynamicComponent key={b._uid} blok={b} />)}
      </>
    );
  }

  return <DynamicComponent blok={story.content} />;
}
