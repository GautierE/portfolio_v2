import { Courses } from "~/components/courses";
import { Projects } from "~/components/projects";
import { Skills } from "~/components/skills/ui/skills";
import { Welcome } from "~/components/welcome";

export default function HomePage() {
    return (
        <main>
            <Welcome />
            <Projects />
            <Skills />
            <Courses />
        </main>
    );
}
