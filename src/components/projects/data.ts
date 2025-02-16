import type { ProjectTimelineEntry } from "./ui/timeline";

export const sectionHeading = {
  title: "My projects",
  subTitle: "Here’s a look at what I’ve been working on",
};

export const timelineData: ProjectTimelineEntry[] = [
  {
    title: "Host Haven",
    projectUrls: {
      site: {
        url: "TBD",
      },
      github: {
        url: "https://github.com/GautierE/host-haven",
      },
      details: {
        url: "/host-haven",
      },
    },
    imageUrl: "/images/host-haven-picture.png",
    tech: [
      "TypeScript",
      "NestJS",
      "Express.js",
      "MongoDB",
      "Docker",
      "Kubernetes",
      "Helm",
      "Microservices architecture",
    ],
    card: {
      title: "Airbnb like API",
      text: "A web API for room reservations with JWT auth, payments, and notifications. Built to practice NestJS microservices and create a scalable infrastructure with Kubernetes.",
    },
  },
  {
    title: "CloudMate",
    projectUrls: {
      site: {
        url: "https://cloudmate.gautieredel.dev/",
      },
      details: {
        url: "/cloudmate",
      },
    },
    imageUrl: "/projects/cloudmate.png",
    tech: [
      "JavaScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Discord OAuth",
      "Chrome extension",
      "Vercel",
    ],
    card: {
      title: "SaaS automating Paypal payments",
      text: "A web app paired with a Chrome extension that automated PayPal payments for sneaker resellers. Helped 100+ paying customers before closing it.",
    },
  },
  {
    title: "Yanclone",
    projectUrls: {
      site: {
        url: "https://real-estate.gautieredel.dev/",
      },
      github: {
        url: "https://github.com/GautierE/saas-real-estate",
      },
      details: {
        url: "/saas-real-estate",
      },
    },
    imageUrl: "/projects/yanclone.png",
    tech: [
      "TypeScript",
      "Angular",
      "Jasmine",
      "Tailwind CSS",
      "Java",
      "Cassandra",
      "FireStore",
      "Docker",
      "Google Cloud Platform",
    ],
    card: {
      title: "Clone of a SaaS exploiting real estate data",
      text: "A learning project replicating Yanport, focused on the frontend at first and later expanded with authentication and an interactive property map.",
    },
  },
  {
    title: "2022 Portfolio",
    projectUrls: {
      site: {
        url: "https://gautieredel.dev",
      },
      github: {
        url: "https://github.com/GautierE/portfolio",
      },
    },
    imageUrl: "/projects/previous_portfolio.png",
    tech: [
      "JavaScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer motion",
      "Vercel",
    ],
    card: {
      title: "Previous portfolio before this one",
      text: "Just because I still like this previous design. There is also a bit more information about my sneaker reselling hustle.",
    },
  },
];
