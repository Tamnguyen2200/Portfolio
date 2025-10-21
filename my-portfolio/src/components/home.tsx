import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import Button from "./commonComponents/buttonComponent";

export default function HomePage() {
    return (
       <section id="home" className="HomePage min-h-[calc(100vh-10rem)] pt-5 mx-auto max-w-6xl">
            <div className="flex max-md:flex-col justify-between gap-12 ">
                <div className="User_Infor flex flex-col justify-between gap-4 order-2 md:order-1 max-md:items-center max-md:text-center max-md:mx-4">
                    <div className="Wellcome_Text text-(--muted-foreground)">Welcome to my portfolio</div>
                    <div className="Name">Hi, I'm <span className="text-(--primary)">Nguyen Van A</span></div>
                    <div className="Job_Title text-(--muted-foreground)">Full Stack Developer & UI/UX Designer</div>
                    <div className="bio text-(--muted-foreground)">I create beautiful, functional websites and applications that help businesses grow. Passionate about clean code, elegant design, and creating seamless user experiences.</div>
                    <div className="Group-btn flex flex-col max-md:flex-row gap-4 flex-wrap max-md:justify-center">
                        <div className="View_CV flex gap-4"> 
                            <Button label="Get In Touch" variant="primary" size="md"/>
                            <Button label="Get In Touch" variant="outline" size="md"/>
                        </div>
                        <div className="download_CV"><Button iconLeft={<Download width={18} height={18}/>} label="Download CV" variant="outline" size="md"/></div>
                    </div>
                    <div className="social flex gap-5">
                        <a href="http://"><Github color="#717182"/></a>
                        <a href="http://"><Linkedin color="#717182"/></a>
                        <a href="mailto:"><Mail color="#717182"/></a>
                    </div>
                </div>
                <div className="Avata_Img flex justify-center items-center order-1 md:order-2">
                    <div className="absolute bg-(--primary)/20 blur-3xl rounded-full w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"></div>
                    <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-(--primary)/20 shadow-2xl overflow-hidden flex justify-center items-center">

                    </div>
                </div>
            </div>
            <div className="ArrowDown flex items-center justify-center mt-10 animate-bounce overflow-hidden">
                <ArrowDown className="h-6 w-6 text-muted-foreground"/>
            </div>
       </section>
    )
}