import { CodeXml, Database, Globe, Palette } from "lucide-react";
import Button from "./commonComponents/buttonComponent";

export default function SkillsPage() {
    const skillCategories = [
        {
            icon: CodeXml,
            title: "Frontend Development",
            skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Sass", "HTML", "CSS", "JavaScript", "angular"]
        },
        {
            icon: Database,
            title: "Backend Development",
            skills: ["Node.js", "Python", "PostgreSQL", "REST APIs", "Express"]
        },
        {
            icon: Palette,
            title: "UI/UX Design",
            skills: ["Figma", "Responsive Design"]
        },
        {
            icon: Globe,
            title: "Tools & Others",
            skills: ["Git", "Docker", "CI/CD"]
        }
    ]
    return (
        <section id="skills" className="SkillsPage min-h-[calc(100vh-10rem)] py-15 mx-auto max-w-6xl">
            <div className="Title flex flex-col items-center gap-4">
                <h1 className="font-semibold">Skills</h1>
                <div className="w-20 h-1 bg-(--primary) rounded-full mx-auto"></div>
                <span className="text-(--muted-foreground)">Technologies and tools I work with</span>
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-4 mt-10">
                {skillCategories.map((skillCategory, index) => (
                    <div key={index} className="flex flex-col gap-8 border border-solid rounded-lg p-4 shadow-md border-gray-300">
                        <div className="card flex items-center gap-4">
                            <Button iconLeft={<skillCategory.icon color="#1a8fd1"/>} variant="secondary" size="square" width={24} height={24}/>
                            <span>{skillCategory.title}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {skillCategory.skills.map((skill, index) => (
                                <div key={index}>
                                    <Button label={skill} variant="secondary" labelStyle="text-[12px]" size="square"/>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}