import AboutPage from "@/components/about";
import Header from "@/components/Header";
import HomePage from "@/components/home";
import Image from "next/image";

export default function Home() {
  return (
    <main> 
      <Header/>
      <div className="Content pt-[80px] md:px-[100px]">
        <HomePage/>
        <AboutPage/>
      </div>
    </main>
  );
}
