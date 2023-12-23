import { AboutMe } from "./about-me";
import { HeroSection } from "./hero-section";
import { Navbar } from "./navbar";
import { ServiceSection } from "./service-section";

export function Home(){
    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutMe/>
            <ServiceSection />
        </>
    )
}