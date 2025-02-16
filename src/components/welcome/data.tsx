import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

export const title = {
    plainText: "",
    glowText: "Gautier EDEL",
    subTitle: "Based in Barcelona, Spain, originally from Strasbourg, France",
    highlight: ["Barcelona,", "Strasbourg,"],
};

export const profileCard = {
    title: "Full-Stack Developer",
    subTitle: "Node.js/Express.js/NestJS React/Next.js",
    bodyFirstPart: "Always learning, currently interested in the challenges of highly distributed applications.",
    bodySecondPart: "Beyond tech, I enjoy running, dogs, cars, and investing. Fun fact: I once ran a business selling 2,000+ limited edition sneakers",
    socialUrls: [
        {
            url: "https://www.linkedin.com/in/gautier-edel/",
            icon: <FaLinkedinIn size={20} />,
        },
        {
            url: "https://github.com/GautierE",
            icon: <IoLogoGithub size={20} />,
        },
    ],
    tooltip: {
        imagePath: "/profile_picture.jpg",
        title: "My profile picture",
    },
};

