import Hero from "@/components/landing/hero/Hero";
import Services from "@/components/landing/services/Services";
import Features from "@/components/landing/features/Features";
import Projects from "@/components/landing/projects/Projects";
import Client from "@/components/landing/client/Client";
import Testimonial from "@/components/landing/testimonial/Testimonial";
import Blog from "@/components/landing/blog/Blog";

export default async function Home({ searchParams }) {
  const projCategory = (await searchParams)?.ProjCategory;

  return (
    <>
      <Hero />

      <Services />
      <Features />
      <Projects category={projCategory} />
      <Client />
      <Testimonial />
      <Blog />
    </>
  );
}
