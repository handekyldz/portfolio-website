"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";
import TagBadge from "./TagBadge";
import ConfidentialModal from "./ConfidentialModal";
import ComingSoonModal from "./ComingSoonModal";
import { useCursor } from "./CustomCursor";

interface ProjectCardProps {
  project: Project;
}

function CardInner({
  project,
  isPointerDevice,
  mouseHandlers,
}: {
  project: Project;
  isPointerDevice: boolean;
  mouseHandlers: object;
}) {
  return (
    <div
      className={`bg-white flex flex-col gap-[10px] items-start w-full group${isPointerDevice ? " cursor-none" : ""}`}
      {...mouseHandlers}
    >
      <div className="aspect-[574/320] relative w-full overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.thumbnailAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          priority={project.id === "avocado"}
        />
      </div>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full gap-2 lg:gap-0">
        <p className="font-serif text-[16px] text-heading tracking-[-0.34px] leading-[1.2] lg:max-w-[346px]">
          {project.title}
        </p>
        <TagBadge category={project.category} year={project.year} />
      </div>
    </div>
  );
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { showCursor, hideCursor, isPointerDevice } = useCursor();

  const mouseHandlers = isPointerDevice
    ? { onMouseEnter: showCursor, onMouseLeave: hideCursor }
    : {};

  if (project.isConfidential) {
    return (
      <>
        <div
          className="cursor-pointer"
          onClick={() => setIsModalOpen(true)}
          role="button"
          tabIndex={0}
          aria-label={`View confidential project: ${project.title}`}
          onKeyDown={(e) => e.key === "Enter" && setIsModalOpen(true)}
        >
          <CardInner
            project={project}
            isPointerDevice={isPointerDevice}
            mouseHandlers={mouseHandlers}
          />
        </div>
        <ConfidentialModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </>
    );
  }

  if (project.isComingSoon) {
    return (
      <>
        <div
          className="cursor-pointer"
          onClick={() => setIsModalOpen(true)}
          role="button"
          tabIndex={0}
          aria-label={`${project.title} — coming soon`}
          onKeyDown={(e) => e.key === "Enter" && setIsModalOpen(true)}
        >
          <CardInner
            project={project}
            isPointerDevice={isPointerDevice}
            mouseHandlers={mouseHandlers}
          />
        </div>
        <ComingSoonModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </>
    );
  }

  return (
    <Link href={project.href} className="block">
      <CardInner
        project={project}
        isPointerDevice={isPointerDevice}
        mouseHandlers={mouseHandlers}
      />
    </Link>
  );
}
