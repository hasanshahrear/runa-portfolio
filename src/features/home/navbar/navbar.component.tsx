"use client"

import { useEffect, useState } from "react";
import { CTA } from "./cta.component";
import { Logo } from "./logo.component";
import { MenuItems } from "./menu-items.component";

export function Navbar(){
    const [windowSize, setWindowSize] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
          setWindowSize(window.scrollY > 100);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


    return (
        <nav className={`sticky top-0 py-6 transition-all duration-300 ${
            windowSize === true ? 'bg-white bg-opacity-90 shadow-xl' : 'bg-transparent'
          }`}>
            <div className="container flex justify-between items-center">
                <Logo/>
                <MenuItems/>
                <CTA />
            </div>
        </nav>
    )
}