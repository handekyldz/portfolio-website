import type { Metadata } from "next";
import Image from "next/image";
import ProjectDetailLayout from "@/components/ui/ProjectDetailLayout";
import DetailSection from "@/components/ui/DetailSection";

export const metadata: Metadata = {
  title: "Avocado — Brand & Web Design",
  description:
    "A fresh identity for a complex service model. Brand and web design case study for Avocado Communications.",
};

const sideNavItems = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "The Challenge" },
  { id: "problem", label: "The Problem" },
  { id: "insights", label: "Insights" },
  { id: "logo", label: "Logo Design" },
  { id: "branding", label: "Branding Direction" },
  { id: "visual", label: "Visual Design" },
  { id: "web", label: "Web Experience" },
  { id: "results", label: "Results" },
];

export default function AvocadoPage() {
  return (
    <ProjectDetailLayout
      heroSrc="/images/projects/avocado-hero.webp"
      heroAlt="Avocado Communications brand identity hero image"
      subtitle="Avocado"
      title="A Fresh Identity for a Complex Service Model"
      intro="Avocado Communications supports brands entering the European market with compliance, logistics and marketing services. The company offered a strong set of solutions but the services appeared disconnected and the brand had no unified visual identity. The goal of the project was to create a clear and modern brand system and design a website that presents these services as one connected journey."
      meta={[
        { label: "Role", value: "Brand Designer, Visual Designer, Web Designer" },
        { label: "Deliverables", value: "Brand Design, Visual Designs, Web Design" },
      ]}
      sideNavItems={sideNavItems}
      aiSummary="Avocado Communications needed a unified brand and website to present their compliance, logistics, and marketing services as one connected solution. The challenge was standing out in an industry dominated by outdated, heavy-handed design. The project delivered a clean geometric logo, a professional blue-toned identity system, a custom illustration library, and an 11-page website across 4 breakpoints — giving the company a modern, trustworthy presence that clearly communicates their end-to-end value."
    >
      {/* Benchmark image */}
      <div className="relative w-full aspect-[1704/1356] overflow-hidden rounded-xl mb-10 md:mb-14">
        <Image
          src="/images/projects/avocado-screenshot-1.webp"
          alt="Avocado Communications competitor benchmark analysis"
          fill
          sizes="(max-width: 768px) 100vw, 1220px"
          className="object-cover"
        />
      </div>

      <DetailSection
        id="challenge"
        heading="The Challenge"
        body="The biggest challenge came from the industry context. Many companies working in compliance and logistics have outdated websites, unclear messaging and heavy visual styles. Competitor analysis was difficult because most examples did not represent good design standards. Our aim was to create a site that looked professional but not boring. It needed to explain complex services in a simple way and stand out in a market where many brands still use old design patterns. This required a fresh visual approach and a content structure that communicated clarity and trust."
      />

      <DetailSection
        id="problem"
        heading="The Problem"
        bullets={[
          "Each service had limited and scattered information",
          "The company provided an end to end solution but this was not visible on the website",
          "There was no consistent visual identity to support a modern and reliable brand image",
          "The content structure made it difficult for users to understand how the services were connected",
          "The value proposition was not easy to grasp, especially for compliance related topics",
        ]}
      />

      <DetailSection
        id="insights"
        heading="Insights"
        body="After analysing the market and reviewing the company's content two insights shaped the direction: The strength of Avocado Communications came from offering all services under one roof. The market lacked clear and modern communication, which created an opportunity to differentiate with a fresh and structured approach. The new concept focused on showing the services as connected steps in a single process."
      />

      <DetailSection
        id="logo"
        heading="Logo Design"
        body="Creating a new logo was an essential part of building a modern identity. The previous version did not reflect the company's structured and solution oriented approach. The final logo uses geometric shapes to represent structure and precision, symbolises multiple services coming together into one complete solution, works effectively at different sizes due to its clean form, and adapts well to different backgrounds and color variations. This logo became the foundation for the entire visual identity."
        imageSrc="/images/projects/avocado-detail-1.webp"
        imageAlt="Avocado Communications new logo and brandmark design"
        imageAspect="2400/2007"
      />

      <DetailSection
        id="branding"
        heading="Branding Direction"
        body="I designed two visual directions: A warm palette with green and beige; A cooler and more professional palette built on blue tones. The client selected the blue palette because it communicated clarity, trust and a modern tone. This palette, together with the new logo and illustration system, created a cohesive and structured visual identity."
        imageSrc="/images/projects/avocado-detail-2.webp"
        imageAlt="Avocado Communications branding direction and color palette"
        imageAspect="2400/1910"
      />

      <DetailSection
        id="visual"
        heading="Visual Design and Illustration System"
        body="To avoid the heavy and outdated visuals commonly found in this industry I created a custom illustration direction. The goal was to support complex topics with simple, friendly and modern visuals. The illustration system was built around clean lines and simple shapes that match the brand's minimal visual style, a consistent rhythm that links all service pages, light and approachable elements that avoid the typical overwhelming style of compliance brands, and modular components that can be reused for marketing or educational materials."
        imageSrc="/images/projects/avocado-detail-3.webp"
        imageAlt="Avocado Communications custom illustration system"
        imageAspect="2400/1910"
      />

      <DetailSection
        imageSrc="/images/projects/avocado-detail-4.webp"
        imageAlt="Avocado Communications visual library and component overview"
        imageAspect="2072/1822"
      />

      <DetailSection
        id="web"
        heading="Web Experience and Content Structure"
        body="The main goal of the website was to explain the service journey in a clear and simple way. Each service received its own section with short and structured explanations. The hero area introduced the idea of an all in one solution. Content blocks were designed for quick scanning and easy reading. A clean grid and simple typography improved readability and strengthened the modern visual tone. In total I delivered a full website consisting of 11 pages. Each page was designed across 4 breakpoints to ensure a clear and consistent experience on desktop, tablet and mobile."
        imageSrc="/images/projects/avocado-detail-5.webp"
        imageAlt="Avocado Communications website pages overview in Figma"
        imageAspect="2400/1545"
      />

      <DetailSection
        id="results"
        heading="Results"
        bullets={[
          "Built a professional and modern identity",
          "Showed all services as part of one complete solution",
          "Stood out in a market filled with outdated design patterns",
          "Improved clarity through structured content and simple messaging",
          "Gained a consistent visual system supported by a custom illustration library",
          "Presented a clean and focused website without distracting template elements",
        ]}
      />
    </ProjectDetailLayout>
  );
}
