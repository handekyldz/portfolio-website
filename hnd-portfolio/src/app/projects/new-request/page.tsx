import type { Metadata } from "next";
import Image from "next/image";
import ProjectDetailLayout from "@/components/ui/ProjectDetailLayout";
import DetailSection from "@/components/ui/DetailSection";

export const metadata: Metadata = {
  title: "New Request — Product Design",
  description:
    "Redesigning the request creation flow for Hivebuy — reducing complexity and improving clarity.",
};

const sideNavItems = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "The Challenge" },
  { id: "problem", label: "The Problem" },
  { id: "research", label: "Research" },
  { id: "solution", label: "Solution" },
];

export default function NewRequestPage() {
  return (
    <ProjectDetailLayout
      heroSrc="/images/projects/newrequest-thumb.webp"
      heroAlt="Request creation flow redesign hero image"
      subtitle="New Request"
      title="Request Creation Flow Redesign"
      intro="Hivebuy is an early stage B2B procurement platform used by purchasing, finance and operations teams. I worked on redesigning the request creation flow of a procurement product to reduce complexity, remove unnecessary steps, and improve clarity around critical actions. The previous experience forced all users through multiple pages and advanced fields, even when those fields were not relevant. The new solution brings the entire flow into a single page, prioritizes essential information, and makes advanced inputs optional."
      meta={[
        { label: "Role", value: "Product Designer" },
        { label: "Deliverables", value: "Flow Redesign, UX Audit, Interaction Design" },
      ]}
      sideNavItems={sideNavItems}
      aiSummary="The request creation flow for Hivebuy's procurement platform was spread across multiple pages, forcing every user through advanced fields regardless of relevance. A heuristic UX audit combined with direct product usage and stakeholder feedback identified three key issues: unnecessary multi-step navigation, misleading field affordances for modal-based selections, and a dangerously placed delete button. The redesign collapsed the entire flow into a single page, separated basic from advanced fields, clarified interactive affordances, relocated destructive actions, and added supplier price comparison at the first step."
    >
      <DetailSection
        id="challenge"
        heading="The Challenge"
        body="Creating a request in a procurement product involves multiple stakeholders, approval rules, suppliers, and budget constraints. The challenge was to design a request creation flow that could support this complexity without overwhelming users or forcing them through unnecessary steps. At the same time, the project took place in a fast paced startup environment with limited time for formal usability testing. Design decisions had to balance speed, clarity, and real daily workflows. The goal was to simplify a complex form experience while keeping all required functionality intact."
      />

      <DetailSection
        id="problem"
        heading="The Problem"
        bullets={[
          "The existing request creation flow was split into multiple pages. Even though not all users needed to fill out the second and third pages, everyone was required to go through them. This increased cognitive load and made the process feel longer and more complicated than necessary.",
          "Critical fields such as Requested for, Category, and Supplier opened modal based selection flows but visually appeared as standard input fields. This mismatch between appearance and behavior caused confusion and hesitation.",
          "The delete button was positioned at the top of the form, leading to frequent accidental deletions. Price comparison between suppliers was also only possible later in the process, despite being a key decision factor during product creation.",
        ]}
      />

      <DetailSection
        id="research"
        heading="Research"
        body="Research was conducted through close collaboration with customer facing teams and co founders who were in regular contact with customers. Their input was based on real conversations, reported pain points, and recurring questions. I also reviewed customer feedback and support tickets to identify repeated issues in the request creation flow. In parallel, I conducted a heuristic based UX audit focused on cognitive load, error prevention, and clarity of interactions. In addition, I used the product myself to create requests and add products. This hands on usage helped uncover usability issues that were not always explicitly mentioned by users."
      />

      {/* New request form screenshot */}
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl mb-10 md:mb-14">
        <Image
          src="/images/projects/newrequest-detail-1.webp"
          alt="Redesigned request creation form — single page layout"
          fill
          sizes="(max-width: 768px) 100vw, 1220px"
          className="object-cover"
        />
      </div>

      <DetailSection
        id="solution"
        heading="Solution"
        bullets={[
          "Moved all required fields into a single page to remove unnecessary steps.",
          "Grouped short inputs like quantity and unit, recurring and date to save space and reduce form length.",
          "Separated basic and advanced information to help users focus on what they actually need.",
          "Placed advanced fields inside an \u201cAdvanced Information\u201d section that stays collapsed by default.",
          "Redesigned Requested for, Category, and Supplier as clear selection fields that open a modal.",
          "Moved the delete action to the bottom of the form to prevent accidental deletion.",
          "Added supplier price comparison directly to the first step of product creation.",
        ]}
      />
    </ProjectDetailLayout>
  );
}
