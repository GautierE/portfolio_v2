"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "~/lib/utils";

export const FocusCard = React.memo(
    ({
        card,
        index,
        hovered,
        setHovered,
        matchesFilter
    }: {
        card: any;
        index: number;
        hovered: number | null;
        setHovered: React.Dispatch<React.SetStateAction<number | null>>;
        matchesFilter: boolean;
    }) => (
        <div
            onMouseEnter={() => matchesFilter && setHovered(index)}
            onMouseLeave={() => matchesFilter && setHovered(null)}
            className={cn(
                "rounded-full relative bg-gray-800 overflow-hidden h-60 md:h-20 w-20 transition-all duration-300 ease-out",
                hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
                !matchesFilter && "opacity-30"
            )}
        >
            <Image
                src={card.src}
                alt={card.title}
                fill
                className="object-cover absolute inset-0 p-4"
            />
            <div
                className={cn(
                    "absolute w-full inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300",
                    hovered === index ? "opacity-100" : "opacity-0"
                )}
            >
                <div className="text-xl text-center md:text-sm font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
                    {card.title}
                </div>
            </div>
        </div>
    )
);

FocusCard.displayName = "FocusCard";

type FocusCard = {
    title: string;
    src: string;
    categories: string[];
};

export function FocusCards({ cards, filter }: { cards: FocusCard[], filter: string | null }) {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div className="grid grid-cols-1 md:grid-cols-8 gap-10 max-w-5xl mx-auto md:px-8 w-full">
            {cards.map((card, index) => {
                const matchesFilter = filter ? card.categories.includes(filter) : true;

                return <FocusCard
                    key={card.title}
                    card={card}
                    index={index}
                    hovered={hovered}
                    setHovered={setHovered}
                    matchesFilter={matchesFilter}
                />
            })}
        </div>
    );
}

