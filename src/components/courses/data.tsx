import type { CourseTimelineEntry } from "./ui/timeline";

export const sectionHeading = {
    title: "Courses",
    subTitle: "A look at my learning journey",
};

export const timelineData: CourseTimelineEntry[] = [
    {
        title: "Docker Mastery",
        certificateUrl: "https://www.udemy.com/certificate/UC-3ef0ee79-14b7-4383-8b49-592b95cd286c/",
        cardColor: "",
        tech: [
            "Docker",
            "Docker Swarm",
            "Kubernetes",
            "Github Actions",
        ],
        card: {
            title: "Devops course from a Docker Captain",
            text: "A 20-hour course on building, testing, and deploying containers, including Kubernetes and CI/CD pipelines.",
        },
    },
    {
        title: "NestJS",
        certificateUrl: "https://www.udemy.com/certificate/UC-3ef0ee79-14b7-4383-8b49-592b95cd286c/",
        cardColor: "#8E518D",
        tech: [
            "TypeScript",
            "NestJS",
            "RabbitMQ",
            "gRPC",
            "Docker",
            "Kubernetes",
            "AWS",
        ],
        card: {
            title: "Build a production grade NestJS backend",
            text: "A 10-hour course teaching best practices for building & deploying a NestJS microservices backend.",
        },
    }
];
