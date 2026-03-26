import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/layout/Nav";
import DarkFooter from "@/components/layout/DarkFooter";
import BackButton from "@/components/ui/BackButton";
import DetailSection from "@/components/ui/DetailSection";
import ConfettiTrigger from "@/components/ui/ConfettiTrigger";
import SideNav from "@/components/ui/SideNav";

export const metadata: Metadata = {
  title: "Amazon K-Beauty Week — Marketing Design",
  description:
    "A week-long celebration of Korean skincare and beauty culture at Bikini Berlin — event design, illustrations and marketing materials.",
};

const sideNavItems = [
  { id: "overview", label: "Overview" },
  { id: "design-direction", label: "Design Direction" },
  { id: "illustrations", label: "Illustrations" },
  { id: "role", label: "My Role" },
  { id: "banners", label: "Banners" },
  { id: "social", label: "Social Media" },
  { id: "print", label: "Print & Merch" },
  { id: "video", label: "Event Video" },
];

export default function AmazonKBeautyPage() {
  return (
    <>
      <Nav />
      <ConfettiTrigger />
      <main className="flex-1 w-full max-w-[1220px] mx-auto px-4 md:px-10 pb-10">
        {/* Back button → Marketing Design */}
        <div className="py-4 md:py-6">
          <BackButton href="/marketing-design" />
        </div>

        {/* Hero image */}
        <div id="overview" className="relative w-full aspect-[1220/640] overflow-hidden rounded-xl mb-10 md:mb-16">
          <Image
            src="/images/projects/kbeauty-thumb.webp"
            alt="Amazon K-Beauty Week at Bikini Berlin — event hero image"
            fill
            sizes="(max-width: 768px) 100vw, 1220px"
            className="object-cover"
            priority
          />
        </div>

        {/* Title + intro */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-16 mb-10 md:mb-16">
          <div className="md:flex-1">
            <p className="font-sans text-[12px] uppercase text-body tracking-widest mb-3">
              Amazon K-Beauty
            </p>
            <h1 className="font-serif text-[28px] md:text-[36px] text-heading tracking-[-1.04px] leading-[1.2]">
              Amazon K-Beauty Week
            </h1>
            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-6">
              <div>
                <p className="font-sans text-[11px] uppercase text-body tracking-widest mb-1">Role</p>
                <p className="font-sans text-[14px] text-heading">Visual Designer, Marketing Designer</p>
              </div>
              <div>
                <p className="font-sans text-[11px] uppercase text-body tracking-widest mb-1">Deliverables</p>
                <p className="font-sans text-[14px] text-heading">Event Banners, Brochures, Stickers, Tote Bags, Social Media</p>
              </div>
            </div>
          </div>
          <div className="md:flex-1">
            <p className="font-sans text-[16px] text-body leading-[1.6]">
              Avocado Communications collaborated with Amazon and leading K Beauty brands to bring Amazon K Beauty Week to life at Bikini Berlin. The event was a week long celebration focused on Korean skincare, beauty culture, and creative expression. The experience attracted a high number of visitors throughout the week and gained strong visibility on TikTok, where event content spread organically and reached a wide audience both online and on site.
            </p>
          </div>
        </div>

        {/* Content with SideNav */}
        <div className="flex gap-12 items-start">
          <SideNav items={sideNavItems} />

          <div className="flex-1 min-w-0">
            {/* Illustration sketch */}
            <div className="relative w-full aspect-[20/13] overflow-hidden rounded-xl mb-10 md:mb-14">
              <Image
                src="/images/projects/kbeauty-detail-1.webp"
                alt="Amazon K-Beauty Week custom illustration character sketches"
                fill
                sizes="(max-width: 768px) 100vw, 1220px"
                className="object-cover"
              />
            </div>

            <DetailSection
              id="design-direction"
              heading="Design Direction and Visual Language"
              body="At the start of the project, I worked closely with the marketing team to define the overall design direction for the event. We aimed to create a visual language that felt soft, playful, and approachable, while still aligning with the world of K Beauty. We decided on a gentle pink focused color palette and a cute, friendly visual style to reflect skincare, self care, and beauty rituals. To make the event more memorable and distinctive, we chose to build the entire visual identity around custom illustrations."
            />

            <DetailSection
              id="illustrations"
              heading="Custom Illustrations and Character Design"
              body="Because the event centered around makeup and skincare, I designed a set of charming characters inspired by everyday skincare routines. These characters were shown applying products, relaxing, and enjoying self care moments, creating a warm and relatable atmosphere. I first illustrated the characters in Procreate, then refined and converted them into print ready vector assets using Figma and Adobe Illustrator. Over time, these illustrations became the core visual elements of the event and were reused consistently across different design materials, helping the event feel cohesive and recognizable."
              imageSrc="/images/projects/kbeauty-detail-12.webp"
              imageAlt="Amazon K-Beauty Week first illustration sketches in Procreate"
              imageAspect="4/3"
            />

            <DetailSection
              id="role"
              heading="My Role and Scope"
              body="I worked as the sole designer throughout the entire process. My responsibilities covered every stage of the physical event design, from measuring banner sizes at the venue to designing large scale banners, brochures, and price tags. This end to end ownership allowed me to ensure visual consistency across all touchpoints and adapt designs precisely to the spatial and technical requirements of the venue."
            />

            {/* Banners group */}
            <section id="banners" className="mb-10 md:mb-14">
              <div className="relative w-full aspect-[1557/1010] overflow-hidden rounded-xl mb-6">
                <Image
                  src="/images/projects/kbeauty-detail-13.webp"
                  alt="Amazon K-Beauty Week — all event banners overview"
                  fill
                  sizes="(max-width: 768px) 100vw, 1220px"
                  className="object-cover"
                />
              </div>

              {/* Individual banners — portrait format */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="relative w-full aspect-[1503/4096] overflow-hidden rounded-xl">
                  <Image
                    src="/images/projects/kbeauty-detail-2.webp"
                    alt="Amazon K-Beauty Week event banner — inside wooden panel"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full aspect-[1503/4096] overflow-hidden rounded-xl">
                  <Image
                    src="/images/projects/kbeauty-detail-3.webp"
                    alt="Amazon K-Beauty Week event banner — large format"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Product banner — portrait format */}
              <div className="relative w-full max-w-[480px] mx-auto aspect-[1229/4096] overflow-hidden rounded-xl mb-6">
                <Image
                  src="/images/projects/kbeauty-detail-4.webp"
                  alt="Amazon K-Beauty Week product banner design"
                  fill
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="object-cover"
                />
              </div>

              {/* Press wall */}
              <div className="relative w-full aspect-[20/13] overflow-hidden rounded-xl">
                <Image
                  src="/images/projects/kbeauty-detail-5.webp"
                  alt="Amazon K-Beauty Week press wall for influencers and visitors"
                  fill
                  sizes="(max-width: 768px) 100vw, 1220px"
                  className="object-cover"
                />
              </div>
            </section>

            {/* Instagram posts — 4:5 portrait */}
            <section id="social" className="mb-10 md:mb-14">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl">
                  <Image
                    src="/images/projects/kbeauty-detail-6.webp"
                    alt="Amazon K-Beauty Week Instagram post design 1"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl">
                  <Image
                    src="/images/projects/kbeauty-detail-7.webp"
                    alt="Amazon K-Beauty Week Instagram post design 2"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Print & Merch: spin wheel, brochures, tote bags */}
            <section id="print" className="mb-10 md:mb-14">
              {/* Spin the wheel + brochures */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="relative w-full aspect-[1557/1010] overflow-hidden rounded-xl">
                  <Image
                    src="/images/projects/kbeauty-detail-8.webp"
                    alt="Amazon K-Beauty Week spin the wheel interactive game design"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full aspect-[1570/1123] overflow-hidden rounded-xl">
                  <Image
                    src="/images/projects/kbeauty-detail-9.webp"
                    alt="Amazon K-Beauty Week brochures and printed materials"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Tote bags */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl">
                  <Image
                    src="/images/projects/kbeauty-detail-10.webp"
                    alt="Amazon K-Beauty Week tote bag design photo 1"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl">
                  <Image
                    src="/images/projects/kbeauty-detail-11.webp"
                    alt="Amazon K-Beauty Week tote bag design photo 2"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </section>

            <DetailSection
              id="video"
              heading="Event Video"
              body="To learn more about the event and see how the designs came to life in the physical space, you can watch the event video below:"
            />

            {/* YouTube embed */}
            <div className="relative w-full aspect-video overflow-hidden rounded-xl mb-10 md:mb-14">
              <iframe
                src="https://www.youtube-nocookie.com/embed/pMo01UhQu6E"
                title="Amazon K-Beauty Week at Bikini Berlin event video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </main>

      <DarkFooter />
    </>
  );
}
