import type { CourseTimelineEntry } from "./ui/timeline";

export const sectionHeading = {
    title: "Courses",
    subTitle: "A look at my learning journey",
};

export const timelineData: CourseTimelineEntry[] = [
    {
        title: "host-haven",
        certificateUrl: "https://google.com",
        imageUrl: "/images/host-haven-picture.png",
        tech: [
            "TypeScript",
            "NestJS",
            "Express.js",
            "Kubernetes",
            "Microservices architecture",
            "...",
        ],
        card: {
            title: "Airbnb like API",
            text: "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ul",
        },
    },
    {
        title: "host-haven",
        certificateUrl: "https://google.com",
        imageUrl: "/images/host-haven-picture.png",
        tech: [
            "TypeScript",
            "NestJS",
            "Express.js",
            "Kubernetes",
            "Microservices architecture",
            "...",
        ],
        card: {
            title: "Airbnb like API",
            text: "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ul",
        },
    }
];
