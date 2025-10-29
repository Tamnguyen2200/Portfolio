import Button from "./commonComponents/buttonComponent";

export default function AboutPage() {
    return (
       <section id="about" className="AboutPage min-h-[calc(100vh-10rem)] py-15 mx-auto max-w-6xl">
            <div className="Title flex flex-col items-center gap-4">
                <h1 className="font-semibold">About Me</h1>
                <div className="w-20 h-1 bg-(--primary) rounded-full mx-auto"></div>
                <span className="text-(--muted-foreground)">Learn more about my journey and passion</span>
            </div>
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-12 mt-10 px-4">
                <div className="Avata_Img aspect-square rounded-2xl overflow-hidden bg-gray-200">

                </div>
                <div className="flex flex-col gap-4 justify-center">
                    <span className="text-(--muted-foreground)">
                        I'm a Full Stack Developer with over 5 years of experience in building scalable web applications. Specialized in React, Node.js, and modern web technologies. I have a strong focus on clean code, user experience, and delivering high-quality solutions that drive business growth.
                    </span>
                    <span className="text-(--muted-foreground)">
                        When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and tutorials.
                    </span>
                    <div className="grid grid-cols-2 gap-4 ">
                        <div><p className="text-(--primary) font-semibold">5+</p><span className="text-(--muted-foreground)">Years of Experience</span></div>
                        <div><p className="text-(--primary) font-semibold">5+</p><span className="text-(--muted-foreground)">Projects Completed</span></div>
                        <div><p className="text-(--primary) font-semibold">5+</p><span className="text-(--muted-foreground)">Happy Clients</span></div>
                        <div><p className="text-(--primary) font-semibold">5+</p><span className="text-(--muted-foreground)">Awards Won</span></div>
                    </div>
                </div>
            </div>
       </section>
    )
}