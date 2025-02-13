import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

export const title = {
    plainText: "",
    glowText: "Gautier EDEL",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing e",
    highlight: ["consectetur"],
};

export const profileCard = {
    title: "Full-Stack Developer",
    subTitle: "Node.js/Express.js/NestJS React/Next.js",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ul",
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

