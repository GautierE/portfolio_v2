import { BackgroundGradient } from "~/components/ui/background-gradient";
import { Badge } from "~/components/ui/badge";
import Image from "next/image";
import { WobbleCard } from "~/components/ui/wobble-card";
import type { CourseTimelineEntry } from "./timeline";
import { usePalette } from "color-thief-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "~/components/ui/accordion";

export function Course({
    tech,
    card,
    cardColor
}: CourseTimelineEntry) {
    return (
        <div>
            <WobbleCard
                style={{ backgroundColor: cardColor }}
                containerClassName="col-span-2 hidden lg:block"
                className="py-2 xl:py-5"
            >
                <h2
                    style={{
                        color: "#ffffff",
                        filter: "brightness(0.8)",
                    }}
                    className="text-balance text-left text-base font-bold tracking-[-0.015em] md:text-xl lg:text-3xl"
                >
                    {card.title}
                </h2>
                <div className="mt-4 max-w-[700px] text-left text-sm text-neutral-200">
                    {card.text}
                </div>
            </WobbleCard>
            <Accordion type="multiple" className="block lg:hidden">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">{card.title}</AccordionTrigger>
                    <AccordionContent>{card.text}</AccordionContent>
                </AccordionItem>
            </Accordion>
            <div className="my-4 flex flex-wrap gap-2">
                {tech.map((text) => (
                    <Badge
                        key={text}
                        className="h-5 cursor-default rounded-sm border-none shadow-[2px_2px_#00000069_inset] transition-all duration-100 ease-in-out hover:translate-x-[-1px] hover:bg-white hover:shadow-[1px_1px_#00000069_inset]"
                    >
                        {text}
                    </Badge>
                ))}
            </div>
        </div>
    );
}
