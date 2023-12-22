import { CTA } from "./cta.component";
import { Logo } from "./logo.component";
import { MenuItems } from "./menu-items.component";

export function Navbar(){
    return (
        <div className=" sticky top-0 py-10 container flex justify-between items-center">
            <Logo/>
            <MenuItems/>
            <CTA />
        </div>
    )
}