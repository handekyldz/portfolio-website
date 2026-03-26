import type { Metadata } from "next";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import ProjectGrid from "@/components/ui/ProjectGrid";
import { marketingProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Marketing Design",
  description:
    "Marketing design projects by Hande Kurtulus Yildiz — visual experiences connecting brands with people across physical and digital touchpoints.",
};

export default function MarketingDesignPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 w-full max-w-[1220px] mx-auto px-4 md:px-10">
        {/* Hero section */}
        <section className="flex flex-col gap-4 py-10 md:py-20" aria-label="Marketing Design introduction">
          <div className="flex flex-col md:flex-row gap-3 md:gap-10 items-start md:items-start">
            <h1 className="font-serif text-[32px] md:text-[40px] text-heading tracking-[-1.04px] leading-[1.2] md:max-w-[500px] shrink-0 basis-0 grow min-w-0">
              Marketing Design Projects
            </h1>
            <p className="font-sans text-[16px] text-body leading-[1.4] basis-0 grow min-w-0">
              I enjoy working across disciplines and exploring new design spaces.
              Collaborating on marketing projects allowed me to step outside
              product focused work and create visual experiences that connect
              brands with people across both physical and digital touchpoints.
            </p>
          </div>
        </section>

        {/* Project grid */}
        <ProjectGrid projects={marketingProjects} />
      </main>

      <div className="mt-10 md:mt-20">
        <Footer />
      </div>
    </>
  );
}
