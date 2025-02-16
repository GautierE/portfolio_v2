"use client";
import React, { useState } from "react";
import { FocusCards } from "~/components/ui/focus-cards";
import { SectionHeading } from "~/components/ui/section-heading";
import { skills } from "../data";
import { SkillFilter } from "./skill-filter";

export function Skills() {
    const [filter, setFilter] = useState<string | null>(null);

    return (
        <section className="pb-32 relative w-full bg-gradient-to-b from-[#141414] to-black">
            <SectionHeading title={"Skills"} />
            <SkillFilter currentFilter={filter} setFilter={setFilter} />
            <div className="mt-8 px-4 md:container">
                <FocusCards cards={skills} filter={filter} />
            </div>
        </section>
    );
}

