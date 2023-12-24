import { AboutMe } from "./about-me";
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
        </>
    )
}