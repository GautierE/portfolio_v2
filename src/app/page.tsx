import { Projects } from "~/components/projects";
import { Welcome } from "~/components/welcome";

export default function HomePage() {
    return (
        <main>
            <Welcome />
            <Projects />
        </main>
    );
}
