import Image from "next/image";

interface DetailSectionProps {
  id?: string;
  heading?: string;
  body?: string | string[];
  bullets?: string[];
  imageSrc?: string;
  imageAlt?: string;
  imageAspect?: string; // e.g. "16/9" or "4/3"
  quote?: { text: string; author: string; role?: string };
  className?: string;
}

export default function DetailSection({
  id,
  heading,
  body,
  bullets,
  imageSrc,
  imageAlt,
  imageAspect = "16/9",
  quote,
  className = "",
}: DetailSectionProps) {
  const bodies = Array.isArray(body) ? body : body ? [body] : [];

  return (
    <section id={id} className={`mb-10 md:mb-14 ${className}`}>
      {heading && (
        <h2 className="font-serif text-[22px] md:text-[26px] text-heading tracking-[-0.5px] leading-[1.2] mb-4">
          {heading}
        </h2>
      )}

      {bodies.map((p, i) => (
        <p key={i} className="font-sans text-[16px] text-body leading-[1.6] mb-3 last:mb-0">
          {p}
        </p>
      ))}

      {bullets && bullets.length > 0 && (
        <ul className="mt-3 space-y-2">
          {bullets.map((b, i) => (
            <li key={i} className="font-sans text-[16px] text-body leading-[1.6] flex gap-3">
              <span className="mt-[6px] shrink-0 size-[6px] rounded-full bg-body" aria-hidden="true" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}

      {imageSrc && (
        <div
          className="relative w-full overflow-hidden rounded-xl mt-6"
          style={{ aspectRatio: imageAspect }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt ?? ""}
            fill
            sizes="(max-width: 768px) 100vw, 1220px"
            className="object-cover"
          />
        </div>
      )}

      {quote && (
        <blockquote className="mt-6 border-l-2 border-lavender pl-5">
          <p className="font-serif text-[18px] text-heading leading-[1.5] italic mb-2">
            &ldquo;{quote.text}&rdquo;
          </p>
          <footer className="font-sans text-[14px] text-body">
            — {quote.author}{quote.role ? `, ${quote.role}` : ""}
          </footer>
        </blockquote>
      )}
    </section>
  );
}
