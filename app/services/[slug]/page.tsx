import type { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
import Banner from "@/components/global/banner";
import { Servicedata } from "@/components/serviceData";
import { globalbanner } from "@/assets";
import Visadetails from "@/components/global/servicedetail";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const SITE_URL = "https://careercoachpradeep.com";
const SITE_NAME = "Career Coach Pradeep";

// Helper function to create consistent slugs
const createSlug = (title: string): string => {
  if (!title) return "";
  return title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

// Helper function to find a service from the array
const getService = (slug: string) => {
  if (!Array.isArray(Servicedata)) return null;
  const decodedSlug = createSlug(slug);
  return Servicedata.find(
    (item: any) => createSlug(item.title) === decodedSlug
  );
};

// Only pre-rendered static params are allowed
export const dynamicParams = false;

export function generateStaticParams() {
  if (!Array.isArray(Servicedata)) return [];
  return Servicedata.map((item: any) => ({
    slug: createSlug(item.title),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service: any = getService(resolvedParams?.slug);

  if (!service) {
    return {
      title: `Page Not Found | ${SITE_NAME}`,
      robots: { index: false, follow: false },
    };
  }

  const slug = createSlug(service.title);
  const url = `${SITE_URL}/services/${slug}`;
  const title = service.metatitle || `${service.title} | ${SITE_NAME}`;
  const description = service.metadesc;
  const ogImage = service.img?.src ?? globalbanner;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: service.metakey
      ? service.metakey.split(",").map((k: string) => k.trim())
      : undefined,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: SITE_NAME,
      images: [{ url: ogImage, alt: service.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}

export default async function Servicepage({ params }: PageProps) {
  const resolvedParams = await params;
  const singleservice: any = getService(resolvedParams?.slug);

  if (!singleservice) {
    notFound();
  }

  const slug = createSlug(singleservice.title);
  const url = `${SITE_URL}/services/${slug}`;

  // Structured data: BreadcrumbList + Service (+ FAQPage)
  const jsonLd: any[] = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: singleservice.title, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: singleservice.title,
      description: singleservice.metadesc,
      url,
      provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    },
  ];

  if (Array.isArray(singleservice.faq) && singleservice.faq.length > 0) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: singleservice.faq.map((f: any) => ({
        "@type": "Question",
        name: f.que.replace(/^\d+\.\s*/, ""), // Removes leading numbers like "1. "
        acceptedAnswer: { "@type": "Answer", text: f.ans },
      })),
    });
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Banner
        title={singleservice.title}
        para={singleservice.metadesc}
        slug={`services/${slug}`}
      />
      <Visadetails data={singleservice} />
    </main>
  );
}