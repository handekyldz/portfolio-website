import type { Metadata } from "next";
import Image from "next/image";
import ProjectDetailLayout from "@/components/ui/ProjectDetailLayout";
import DetailSection from "@/components/ui/DetailSection";

export const metadata: Metadata = {
  title: "Glacis — Brand Design",
  description:
    "Building a bold and smart identity for an AI driven logistics startup. Brand design case study for Glacis.",
};

const sideNavItems = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "The Challenge" },
  { id: "insights", label: "Insights" },
  { id: "visual", label: "Visual Design" },
  { id: "branding", label: "Branding Direction" },
  { id: "logo", label: "Logo Enhancement" },
  { id: "results", label: "Results" },
];

export default function GlacisPage() {
  return (
    <ProjectDetailLayout
      heroSrc="/images/projects/glacis-hero.webp"
      heroAlt="Glacis brand identity hero image"
      subtitle="Glacis"
      title="Building a Bold and Smart Identity for an AI Driven Logistics Startup"
      intro="Glacis is a new B2B company aiming to simplify complex logistics and supply chain operations through a unified platform supported by AI agents. Before entering the market the founders needed a complete brand identity and a website that could communicate their vision clearly. I joined the team at the earliest stage and helped shape the brand from the ground up."
      meta={[
        { label: "Role", value: "Brand Designer, Visual Designer, Web Designer" },
        { label: "Deliverables", value: "Brand Book, Visual Designs, Web Design" },
      ]}
      sideNavItems={sideNavItems}
      aiSummary="Glacis needed a bold, modern brand identity to launch an AI-powered logistics platform. Starting from scratch with no prior visual direction, the project explored 6–7 distinct concepts before landing on a high-contrast, clean design language that balances ambition with accessibility. The deliverables included a complete brand book, typography system, color palette, logo refinement (joining the s and i letterforms), and web design — all validated by the founders as a strong foundation for market entry."
    >
      {/* Branding concepts */}
      <div className="relative w-full aspect-[2400/1368] overflow-hidden rounded-xl mb-10 md:mb-14">
        <Image
          src="/images/projects/glacis-screenshot-1.webp"
          alt="Glacis branding concept explorations"
          fill
          sizes="(max-width: 768px) 100vw, 1220px"
          className="object-cover"
        />
      </div>

      <DetailSection
        id="challenge"
        heading="The Challenge"
        body="Since Glacis was preparing to enter the market without an existing identity the first challenge was defining what the brand should feel like. Many companies in the logistics sector rely on outdated visual styles and heavy corporate tones which made competitor analysis difficult. These references did not represent the direction the founders wanted for Glacis. The task was to create a visual direction that felt both modern and trustworthy without relying on common industry conventions. This required building the brand from the ground up and testing multiple directions before finding the right balance between ambition and accessibility."
      />

      <DetailSection
        id="insights"
        heading="Insights"
        body="Through early workshops we defined the character of the brand using a brand personality slider. This helped establish a shared understanding of how Glacis should feel and what visual direction could support that. Two key insights shaped the design: The brand should communicate both ambition and practicality since Glacis combines AI forward technology with real world operational needs. Clear structure and modern simplicity would help users understand a complex problem space quickly. These insights guided the development of a bold yet accessible design language."
      />

      <DetailSection
        id="visual"
        heading="Visual Design and Concept Exploration"
        body="Because the client did not have a clear direction initially I explored 6 to 7 different concepts. Each direction tested different degrees of boldness, accessibility and personality. The final visual direction combined high contrast but balanced color choices, clean and modern typography, confident layouts that communicate clarity, and simple but strong visual elements that support the AI driven narrative. The aim was to make the brand feel smart and dynamic while staying readable and practical."
        imageSrc="/images/projects/glacis-detail-1.webp"
        imageAlt="Glacis selected branding direction and visual identity"
        imageAspect="2400/1368"
      />

      <DetailSection
        id="branding"
        heading="Branding Direction"
        body="After finalizing the direction I built a full identity system that included: Color palette with accessible combinations; Typography rules for headings, body text and UI labels; Layout and spacing guidelines; Iconography and reusable shapes; A complete brand book for internal and external use. This system ensures that Glacis can remain visually consistent as it expands."
        imageSrc="/images/projects/glacis-detail-2.webp"
        imageAlt="Glacis complete brand guidelines document"
        imageAspect="16/9"
      />

      <DetailSection
        id="logo"
        heading="Logo Enhancement"
        body="The client was already happy with the existing logo and brandmark, so the goal was not to redesign it. Instead I focused on a small refinement that improved balance and clarity. The letters s and i were joined together to create a cleaner look and a stronger visual connection inside the wordmark. This subtle update helped the logo feel more cohesive while staying true to the original idea."
        imageSrc="/images/projects/glacis-detail-3.webp"
        imageAlt="Glacis logo refinement — s and i letterform adjustment"
        imageAspect="16/9"
      />

      {/* Additional brand images */}
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl mb-10 md:mb-14">
        <Image
          src="/images/projects/glacis-detail-4.webp"
          alt="Glacis brand identity applied to marketing materials"
          fill
          sizes="(max-width: 768px) 100vw, 1220px"
          className="object-cover"
        />
      </div>

      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl mb-10 md:mb-14">
        <Image
          src="/images/projects/glacis-detail-5.webp"
          alt="Glacis brand identity digital applications"
          fill
          sizes="(max-width: 768px) 100vw, 1220px"
          className="object-cover"
        />
      </div>

      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl mb-10 md:mb-14">
        <Image
          src="/images/projects/glacis-detail-6.webp"
          alt="Glacis brand identity overview and system"
          fill
          sizes="(max-width: 768px) 100vw, 1220px"
          className="object-cover"
        />
      </div>

      <DetailSection
        id="results"
        heading="Results"
        body="The final identity gave Glacis a strong foundation for its entry into the market. The brand now reflects the ambition of an AI powered logistics solution while staying clear, modern and approachable. The founders shared that the direction fully matched their vision and provided a scalable system for future product and communication needs."
        quote={{
          text: "It was a real pleasure working with Hande! She led the design of our website and built our brand from the ground up from the visual identity to the creative assets. What stood out most was her ability to intuitively understand the intent behind our feedback and translate it into well executed design. Super collaborative, responsive, and always open to iteration.",
          author: "Yash T.",
          role: "Co-founder, Glacis",
        }}
      />
    </ProjectDetailLayout>
  );
}
