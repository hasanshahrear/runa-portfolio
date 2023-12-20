"use client"
import { Menubar, MenubarPassThroughMethodOptions } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";

export function MenuItems(){
    const items: MenuItem[] = [
        {
            label: 'Home',
        },
        {
            label: 'About Me',
        },
        {
            label: 'Services',
        },
        {
            label: 'Portfolio',
        },
        {
            label: 'Contact me',
        }
    ];
    return(
        <Menubar 
            model={items} 
            pt={{
                root: {
                    className: " bg-transparent border-none font-semibold"
                },
                action: ({ props, state, context }: MenubarPassThroughMethodOptions) => ({
                    className: context.active ? 'global-background' : "bg-transparent hover:global-background ",
                })
            }}
        />
    )
}