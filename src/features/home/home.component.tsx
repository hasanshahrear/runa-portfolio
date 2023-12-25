import { AboutMe } from "./about-me";
import { Clients } from "./clients";
import { Contact } from "./contact";
import { Copyright } from "./copyright";
import { HeroSection } from "./hero";
import { Navbar } from "./navbar";
import { Portfolio } from "./portfolio";
import { ServiceSection } from "./service";
import { SkillSection } from "./skill";

export function Home(){
    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutMe/>
            <ServiceSection />
            <SkillSection />
            <Portfolio />
            <Clients />
            <Contact />
            <Copyright />
        </>
    )
}