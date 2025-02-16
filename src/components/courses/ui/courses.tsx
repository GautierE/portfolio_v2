import { CourseTimeline } from "./timeline";
import { timelineData } from "../data";

export function Courses() {
    return (
        <section className="pb-32 relative w-full bg-gradient-to-b from-black to-[#141414]">
            <div className="px-4 md:container">
                <CourseTimeline data={timelineData} />
            </div>
        </section>
    );
}
