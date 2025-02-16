import { ToastContainer, Zoom } from "react-toastify";
import Contact from "~/components/contact/ui/contact";
import { Courses } from "~/components/courses";
import { Projects } from "~/components/projects";
import { Skills } from "~/components/skills/ui/skills";
import { Welcome } from "~/components/welcome";
import "react-toastify/dist/ReactToastify.css";


export default function HomePage() {
    return (
        <main>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                transition={Zoom}
                progressClassName="toast-black-bar"
            />

            <Welcome />
            <Projects />
            <Skills />
            <Courses />
            <Contact />
        </main>
    );
}
