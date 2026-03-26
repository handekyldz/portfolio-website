import type { Metadata } from "next";
import Nav from "@/components/layout/Nav";
import DarkFooter from "@/components/layout/DarkFooter";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Hande Kurtulus Yildiz — multidisciplinary designer based in Berlin. Experience, tools, and passion projects.",
};

const experiences = [
  {
    company: "Future Demand",
    role: "Product Designer",
    type: "Freelance",
    period: "Feb 2026 – Present",
    location: "Berlin, Germany",
  },
  {
    company: "Avocado Communications GmbH",
    role: "Brand & UX/UI Designer",
    type: "Freelance",
    period: "Aug 2025 – Jan 2026",
    location: "Berlin, Germany, On-site",
  },
  {
    company: "Glacis",
    role: "Brand & UI Designer",
    type: "Freelance",
    period: "Jun 2025 – Jul 2025",
    location: "Remote",
  },
  {
    company: "Hivebuy",
    role: "Product Designer",
    type: "",
    period: "Jun 2024 – Jun 2025",
    location: "Berlin, Germany, On-site",
  },
  {
    company: "IKEA",
    role: "Product Designer",
    type: "Full-time",
    period: "May 2022 – Mar 2024",
    location: "Istanbul, Turkey",
  },
];

const tools = [
  "Figma",
  "Claude",
  "Cursor",
  "Framer",
  "v0",
  "Webflow",
  "Midjourney",
  "ChatGPT",
];

const passionProjects = [
  {
    name: "Design System Kit",
    description: "A modular component library built for rapid product prototyping.",
    tag: "Side project",
  },
  {
    name: "AI Brand Generator",
    description: "Experiments with generative AI to create cohesive brand identities.",
    tag: "AI",
  },
  {
    name: "Type Study",
    description: "An ongoing exploration of typographic systems and editorial layouts.",
    tag: "Side project",
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 w-full max-w-[1220px] mx-auto px-4 md:px-10">

        {/* Unified two-column grid — aligns all sections across both columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 py-10 md:py-20 pb-20 md:pb-28">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-10 md:gap-12">

            {/* Page heading */}
            <h1 className="font-serif text-[32px] md:text-[40px] text-heading tracking-[-1.04px] leading-[1.2]">
              About me
            </h1>

            {/* Experience */}
            <div className="flex flex-col gap-6">
              <h2 className="font-sans font-medium text-[11px] uppercase tracking-[0.1em] text-body">
                Experience
              </h2>
              <div className="flex flex-col">
                {experiences.map((exp, i) => (
                  <div key={i} className="flex gap-4 group">
                    {/* Timeline line + dot */}
                    <div className="flex flex-col items-center pt-[10px]">
                      <div className="size-[7px] rounded-full bg-[#e1e1e3] shrink-0 group-first:bg-heading" />
                      {i < experiences.length - 1 && (
                        <div className="w-[1px] flex-1 bg-[#e1e1e3] mt-1 min-h-[32px]" />
                      )}
                    </div>
                    {/* Content */}
                    <div className="flex flex-col gap-[2px] pb-8 min-w-0">
                      <span className="font-sans font-medium text-[14px] text-heading leading-[1.4]">
                        {exp.company}
                      </span>
                      <span className="font-sans text-[13px] text-body leading-[1.4]">
                        {exp.role}{exp.type ? `, ${exp.type}` : ""}
                      </span>
                      <span className="font-sans text-[12px] text-[#9999a1] leading-[1.4]">
                        {exp.period} · {exp.location}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-10">

            {/* Bio text — aligns with heading row on desktop */}
            <p className="font-sans text-[16px] text-body leading-[1.6]">
              I&apos;m a multidisciplinary designer with around 4 years of experience, mostly in product design but also across brand and visual design. I studied Visual Experience &amp; Design at master&apos;s level in Berlin, fell in love with the city, and never left.
              <br /><br />
              Design has been a big part of my life for as long as I can remember. In my spare time I follow designers I admire on X and LinkedIn, try out new tools, and get inspired by what&apos;s happening around me. Lately I&apos;ve been building a bridge between design and engineering, learning the technical side of things and finding ways to bring AI into my daily workflow.
            </p>

            {/* Tools & Stack */}
            <div className="flex flex-col gap-4">
              <h2 className="font-sans font-medium text-[11px] uppercase tracking-[0.1em] text-body">
                Tools &amp; Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="font-sans text-[13px] text-body bg-[#f4f4f6] border border-[#e1e1e3] rounded-full px-3 py-[5px] leading-[1.4] whitespace-nowrap"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Passion Projects — hidden until projects are ready */}
            <div className="hidden flex flex-col gap-4">
              <h2 className="font-sans font-medium text-[11px] uppercase tracking-[0.1em] text-body">
                Passion Projects
              </h2>
              <div className="flex flex-col gap-3">
                {passionProjects.map((project) => (
                  <div
                    key={project.name}
                    className="flex flex-col gap-[6px] p-4 rounded-xl border border-[#e1e1e3] bg-white"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-sans font-medium text-[14px] text-heading leading-[1.4]">
                        {project.name}
                      </span>
                      <span className="font-sans text-[11px] text-body bg-[#f4f4f6] border border-[#e1e1e3] rounded-full px-2 py-[3px] whitespace-nowrap shrink-0">
                        {project.tag}
                      </span>
                    </div>
                    <p className="font-sans text-[13px] text-body leading-[1.4]">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>

      <DarkFooter />
    </>
  );
}
