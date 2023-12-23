"use client"
import { Button } from "primereact/button";

export function CTA(){
    return (
        <Button label="Download CV" pt={{
            root: {
                className: "btn-primary",
            }
        }}/>
    )
}