import { AboutMe } from "./about-me";
import { HeroSection } from "./hero-section";
import { Navbar } from "./navbar";

export function Home(){
    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutMe/>
        </>
    )
}