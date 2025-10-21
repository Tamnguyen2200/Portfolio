"use client";
import { Languages, Menu, Moon, Sun, X } from "lucide-react";
import Button from "./commonComponents/buttonComponent";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isToggleTheme, setIsToggleTheme] = useState(false);
  const [isToggleLanguage, setIsToggleLanguage] = useState(false);

  const list = ["Home", "About", "Projects", "Contact"];


  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md py-4 px-[100px] flex max-md:px-4 max-md:grid max-md:grid-cols-2 items-center justify-between fixed z-1 w-full">
      <div className="Logo">
        <h1 className="text-1xl text-(--primary) max-md:pl-2">Portfolio</h1>
      </div>
      {/* Desktop menu */}
      <ul className="Menu flex items-center space-x-4 gap-6 max-md:gap-0 max-md:justify-end">
        {list.map((item, index) => (
          <li key={index} className="inline-block cursor-pointer hover:text-(--primary) max-md:hidden">{item}</li>
        ))}
        <li className="inline-block cursor-pointer"><Button size="square" variant="ghost" label={isToggleLanguage ? "En" : "Vi"} onClick={() => setIsToggleLanguage(!isToggleLanguage)}/></li>
        <li className="inline-block cursor-pointer"><Button size="square" variant="ghost" iconLeft={isToggleTheme ? <Moon width={18} height={18}/> : <Sun width={18} height={18}/>} onClick={() => setIsToggleTheme(!isToggleTheme)}/></li>
        <li className="cursor-pointer hidden max-md:inline-block"><Button size="square" variant="ghost" iconLeft={isOpen ? <X width={18} height={18}/> : <Menu width={18} height={18}/>} onClick={() => setIsOpen(!isOpen)} /></li>
      </ul>
      {/* Mobile menu */}
      <ul className="mobile_Menu col-span-2 flex flex-col items-start w-full" style={{display: isOpen ? 'flex' : 'none'}}> 
        {list.map((item, index) => (
          <li key={index} className="cursor-pointer hover:text-(--primary) w-full p-2 hover:bg-(--primary)/10 rounded-md">{item}</li>
        ))}
      </ul>
    </header>
  );
}