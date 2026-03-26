import Image from "next/image";
import Nav from "@/components/layout/Nav";
import DarkFooter from "@/components/layout/DarkFooter";
import ProjectGrid from "@/components/ui/ProjectGrid";
import { projects } from "@/data/projects";

// "Available in Berlin" animated availability tag
function AvailabilityTag() {
  return (
    <div className="bg-white border border-[#e1e1e3] rounded-lg inline-flex items-center shadow-[0px_1px_1px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.09),0px_5px_3px_rgba(0,0,0,0.05)]">
      <div className="flex items-center gap-[6px] px-[10px] py-[6px]">
        <GreenDot />
        <span className="font-sans font-medium text-body text-[14px] whitespace-nowrap leading-[1.4]">
          Available in Berlin
        </span>
      </div>
    </div>
  );
}

function GreenDot() {
  return (
    <span className="relative shrink-0 size-[8px] flex items-center justify-center">
      <span className="absolute inline-flex size-full rounded-full bg-[#12AE04] opacity-40 animate-ping" />
      <span className="relative size-[6px] rounded-full bg-[#12AE04]" />
    </span>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1 w-full max-w-[1220px] mx-auto px-4 md:px-10 pb-20 md:pb-28">
        {/* Hero section */}
        <section
          className="flex flex-col gap-4 py-10 md:py-20"
          aria-label="Introduction"
        >
          {/* Avatar + availability */}
          <div className="flex items-center gap-3">
            <div className="relative size-[64px] rounded-full overflow-hidden shadow-[0px_1px_2px_rgba(0,0,0,0.1),0px_4px_4px_rgba(0,0,0,0.09),0px_8px_5px_rgba(0,0,0,0.05)] shrink-0">
              <Image
                src="/images/profile/hande-avatar.webp"
                alt="Hande Kurtulus Yildiz"
                fill
                sizes="64px"
                className="object-cover"
                priority
              />
            </div>
            <AvailabilityTag />
          </div>

          {/* Heading + Body */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-10 items-start md:items-center">
            <h1 className="font-serif text-[32px] md:text-[40px] text-heading tracking-[-1.04px] leading-[1.2] md:max-w-[600px] shrink-0 basis-0 grow min-w-0">
              I&apos;m Hande, a multidisciplinary designer shaping products,
              brands and experiences.
            </h1>
            <p className="font-sans text-[16px] text-body leading-[1.4] basis-0 grow min-w-0">
              I work across product, brand and visual design with a practical
              mindset. I collaborate with SaaS and e-commerce teams, often
              partnering with C-level stakeholders to shape both products and
              visual identities. I enjoy guiding projects from early ideas to
              launch and bringing clarity to every stage of the process.
            </p>
          </div>
        </section>

        {/* Project grid */}
        <ProjectGrid projects={projects} />
      </main>

      <DarkFooter />
    </>
  );
}
