export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  thumbnail: string;
  thumbnailAlt: string;
  href: string;
  isConfidential?: boolean;
  isComingSoon?: boolean;
  isExternal?: boolean;
}

export const projects: Project[] = [
  {
    id: "avocado",
    slug: "avocado",
    title: "A Fresh Identity for a Complex Service Model",
    subtitle: "Avocado",
    category: "BRAND & WEB DESIGN",
    year: "2025",
    thumbnail: "/images/projects/avocado-thumb.webp",
    thumbnailAlt: "Avocado brand identity and web design project",
    href: "/projects/avocado",
  },
  {
    id: "glacis",
    slug: "glacis",
    title: "Designing a Bold Identity with Practical Clarity",
    subtitle: "Glacis",
    category: "BRAND DESIGN",
    year: "2025",
    thumbnail: "/images/projects/dashboard-thumb.webp",
    thumbnailAlt: "Procurement dashboard interface design",
    href: "/projects/glacis",
  },
  {
    id: "dashboard",
    slug: "dashboard",
    title: "Procurement Dashboard Design",
    subtitle: "Dashboard",
    category: "PRODUCT DESIGN",
    year: "2025",
    thumbnail: "/images/projects/glacis-thumb.webp",
    thumbnailAlt: "Glacis brand design project",
    href: "/projects/dashboard",
  },
  {
    id: "ikea",
    slug: "ikea",
    title: "IKEA High Friction Interaction Study",
    subtitle: "IKEA UX Study",
    category: "PRODUCT DESIGN",
    year: "2025",
    thumbnail: "/images/projects/ikea-thumb.webp",
    thumbnailAlt: "IKEA high friction interaction UX study",
    href: "#",
    isConfidential: true,
  },
  {
    id: "newrequest",
    slug: "new-request",
    title: "Request Creation Flow Redesign",
    subtitle: "New Request",
    category: "PRODUCT DESIGN",
    year: "2025",
    thumbnail: "/images/projects/newrequest-thumb.webp",
    thumbnailAlt: "Request creation flow redesign project",
    href: "/projects/new-request",
  },
];

export const marketingProjects: Project[] = [
  {
    id: "kbeauty",
    slug: "amazon-kbeauty",
    title: "Amazon K-Beauty Week",
    subtitle: "Amazon K-Beauty",
    category: "MARKETING DESIGN",
    year: "2025",
    thumbnail: "/images/projects/kbeauty-thumb.webp",
    thumbnailAlt: "Amazon K-Beauty Week marketing design",
    href: "/marketing-design/amazon-kbeauty",
  },
  {
    id: "flowfacture",
    slug: "flowfacture",
    title: "Flowfacture Social Media Design",
    subtitle: "Flowfacture",
    category: "MARKETING DESIGN",
    year: "2025",
    thumbnail: "/images/projects/marketing-thumb-2.webp",
    thumbnailAlt: "Flowfacture social media design case study",
    href: "#",
    isComingSoon: true,
  },
];
