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
    company: "Company Name",
    role: "Senior Product Designer",
    period: "2022 – Present",
  },
  {
    company: "Company Name",
    role: "Product Designer",
    period: "2020 – 2022",
  },
  {
    company: "Company Name",
    role: "UI/UX Designer",
    period: "2018 – 2020",
  },
  {
    company: "Company Name",
    role: "Junior Designer",
    period: "2017 – 2018",
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

function CompanyLogoPlaceholder() {
  return (
    <div className="size-[40px] rounded-lg bg-[#f0f0f2] border border-[#e1e1e3] shrink-0 flex items-center justify-center">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="12" height="12" rx="2" fill="#c8c8cc" />
      </svg>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 w-full max-w-[1220px] mx-auto px-4 md:px-10">
        {/* Page heading */}
        <section className="flex flex-col gap-4 py-10 md:py-20" aria-label="About introduction">
          <div className="flex flex-col md:flex-row gap-3 md:gap-10 items-start md:items-start">
            <h1 className="font-serif text-[32px] md:text-[40px] text-heading tracking-[-1.04px] leading-[1.2] md:max-w-[500px] shrink-0 basis-0 grow min-w-0">
              About me
            </h1>
            <p className="font-sans text-[16px] text-body leading-[1.4] basis-0 grow min-w-0">
              Multidisciplinary designer based in Berlin, working across product,
              brand and visual design. I bring clarity to complex problems and
              enjoy partnering with teams from early concept through to launch.
            </p>
          </div>
        </section>

        {/* Two-column section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 pb-20 md:pb-28">

          {/* Left column — Experience */}
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
                  <div className="flex gap-3 pb-8 min-w-0">
                    <CompanyLogoPlaceholder />
                    <div className="flex flex-col gap-[2px]">
                      <span className="font-sans font-medium text-[14px] text-heading leading-[1.4]">
                        {exp.company}
                      </span>
                      <span className="font-sans text-[13px] text-body leading-[1.4]">
                        {exp.role}
                      </span>
                      <span className="font-sans text-[12px] text-[#9999a1] leading-[1.4]">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — Tools + Passion Projects */}
          <div className="flex flex-col gap-10">

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

            {/* Passion Projects */}
            <div className="flex flex-col gap-4">
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
