import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";

export function SkillFilter(
    { currentFilter, setFilter }: {
        currentFilter: string | null,
        setFilter: React.Dispatch<React.SetStateAction<string | null>>
    }
) {
    const filters = ["frontend", "backend", "devops"];

    return (
        <div className="flex justify-center gap-4 mt-6">
            <Button
                onClick={() => setFilter(null)}
                className="block shadow-[2px_2px_#00000069_inset] transition-all duration-100 ease-in-out hover:translate-x-[-1px] hover:bg-white hover:shadow-[1px_1px_#00000069_inset]"
            >
                All
            </Button>
            {filters.map((f) => (
                <Button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={cn(
                        "block shadow-[2px_2px_#00000069_inset] transition-all duration-100 ease-in-out hover:translate-x-[-1px] hover:bg-white hover:shadow-[1px_1px_#00000069_inset]",
                        currentFilter === f && "bg-gray-700 text-white"
                    )
                    }
                >
                    {f.charAt(0).toUpperCase() + f.slice(1)}
                </Button>
            ))}
        </div>
    )
}
