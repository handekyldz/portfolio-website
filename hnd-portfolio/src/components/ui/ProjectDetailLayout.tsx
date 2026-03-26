import Image from "next/image";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import BackButton from "@/components/ui/BackButton";
import ConfettiTrigger from "@/components/ui/ConfettiTrigger";
import SideNav from "@/components/ui/SideNav";
import AISummary from "@/components/ui/AISummary";

interface MetaItem {
  label: string;
  value: string;
}

interface SideNavItem {
  id: string;
  label: string;
}

interface ProjectDetailLayoutProps {
  heroSrc: string;
  heroAlt: string;
  title: string;
  subtitle: string;
  intro: string;
  meta: MetaItem[];
  children: React.ReactNode;
  backHref?: string;
  sideNavItems?: SideNavItem[];
  aiSummary?: string;
}

export default function ProjectDetailLayout({
  heroSrc,
  heroAlt,
  title,
  subtitle,
  intro,
  meta,
  children,
  backHref = "/",
  sideNavItems,
  aiSummary,
}: ProjectDetailLayoutProps) {
  return (
    <>
      <Nav />
      <ConfettiTrigger />
      <main className="flex-1 w-full max-w-[1220px] mx-auto px-4 md:px-10 pb-10">
        {/* Back button */}
        <div className="py-4 md:py-6">
          <BackButton href={backHref} />
        </div>

        {/* Hero image */}
        <div id="overview" className="relative w-full aspect-[1220/640] overflow-hidden rounded-xl mb-10 md:mb-16">
          <Image
            src={heroSrc}
            alt={heroAlt}
            fill
            sizes="(max-width: 768px) 100vw, 1220px"
            className="object-cover"
            priority
          />
        </div>

        {/* Title + intro row */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-16 mb-10 md:mb-16">
          <div className="md:flex-1">
            <p className="font-sans text-[12px] uppercase text-body tracking-widest mb-3">
              {subtitle}
            </p>
            <h1 className="font-serif text-[28px] md:text-[36px] text-heading tracking-[-1.04px] leading-[1.2]">
              {title}
            </h1>
            {/* Meta */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-6">
              {meta.map((item) => (
                <div key={item.label}>
                  <p className="font-sans text-[11px] uppercase text-body tracking-widest mb-1">
                    {item.label}
                  </p>
                  <p className="font-sans text-[14px] text-heading">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:flex-1">
            <p className="font-sans text-[16px] text-body leading-[1.6]">{intro}</p>
          </div>
        </div>

        {/* AI Summary */}
        {aiSummary && <AISummary summary={aiSummary} />}

        {/* Page-specific content — with optional side nav */}
        {sideNavItems && sideNavItems.length > 0 ? (
          <div className="flex gap-12 items-start">
            <SideNav items={sideNavItems} />
            <div className="flex-1 min-w-0">{children}</div>
          </div>
        ) : (
          children
        )}
      </main>

      <div className="mt-10 md:mt-20">
        <Footer />
      </div>
    </>
  );
}
