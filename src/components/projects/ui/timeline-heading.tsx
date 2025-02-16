import { motion } from "framer-motion";
import { LinkPreview } from "~/components/ui/link-preview";
import { Button } from "~/components/ui/button";
import { Project } from "./project";
import Link from "next/link";
import type { ProjectTimelineEntry } from "./timeline";
import { RiExternalLinkLine } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";

type ProjectTimelineHeadingProps = {
    entry: ProjectTimelineEntry;
};

export function ProjectTimelineHeading({ entry }: ProjectTimelineHeadingProps) {
    return (
        <div className="flex justify-start pt-10 md:gap-10 md:pt-20">
            <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
                <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-black md:left-3">
                    <div className="h-4 w-4 rounded-full border border-neutral-700 bg-neutral-400 p-2" />
                </div>
                <motion.h3
                    initial={{ opacity: 0.5 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ margin: "-200px" }}
                    className="hidden text-xl font-bold md:block md:pl-20 md:text-5xl"
                >
                    {entry.title}
                    <div className="mt-2 flex w-full gap-5">
                        <LinkPreview className="flex" url={entry.projectUrls.site.url}>
                            <Button className="shadow-[2px_2px_#00000069_inset] transition-all duration-100 ease-in-out hover:translate-x-[-1px] hover:bg-white hover:shadow-[1px_1px_#00000069_inset]">
                                <RiExternalLinkLine size={20} />
                            </Button>
                        </LinkPreview>
                        {
                            entry.projectUrls.github &&
                            <LinkPreview className="flex" url={entry.projectUrls.github.url}>
                                <Button className="shadow-[2px_2px_#00000069_inset] transition-all duration-100 ease-in-out hover:translate-x-[-1px] hover:bg-white hover:shadow-[1px_1px_#00000069_inset]">
                                    <IoLogoGithub size={20} />
                                </Button>
                            </LinkPreview>
                        }
                        {
                            entry.projectUrls.details &&
                            <Link href={entry.projectUrls.details.url}>
                                <Button className="block shadow-[2px_2px_#00000069_inset] transition-all duration-100 ease-in-out hover:translate-x-[-1px] hover:bg-white hover:shadow-[1px_1px_#00000069_inset]">
                                    More details
                                </Button>
                            </Link>
                        }
                    </div>
                </motion.h3>
            </div>

            <div className="relative w-full pl-14 pr-4 md:pl-4">
                <h3 className="mb-4 block space-y-4 text-left text-2xl font-bold md:hidden">
                    <span>{entry.title}</span>
                    <div className="flex w-full gap-5">
                        <Link href={entry.projectUrls.site.url} target="_blank">
                            <Button className="shadow-[2px_2px_#00000069_inset] transition-all duration-100 ease-in-out hover:translate-x-[-1px] hover:bg-white hover:shadow-[1px_1px_#00000069_inset]">
                                <RiExternalLinkLine size={20} />
                            </Button>
                        </Link>
                        {
                            entry.projectUrls.github &&
                            <Link href={entry.projectUrls.github.url} target="_blank">
                                <Button className="shadow-[2px_2px_#00000069_inset] transition-all duration-100 ease-in-out hover:translate-x-[-1px] hover:bg-white hover:shadow-[1px_1px_#00000069_inset]">
                                    <IoLogoGithub size={20} />
                                </Button>
                            </Link>
                        }
                        {
                            entry.projectUrls.details &&
                            <Link href={entry.projectUrls.details.url}>
                                <Button className="block shadow-[2px_2px_#00000069_inset] transition-all duration-100 ease-in-out hover:translate-x-[-1px] hover:bg-white hover:shadow-[1px_1px_#00000069_inset]">
                                    More details
                                </Button>
                            </Link>
                        }
                    </div>
                </h3>
                <Project {...entry} />
            </div>
        </div>
    );
}
