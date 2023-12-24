"use client"
import { Heading } from "@/features/ui";
import Image from "next/image";

export function Portfolio(){
    return(
        <div className=" bg-white pt-28 pb-44">
            <div className="container grid grid-cols-12 mb-20">
                <div className="col-span-3"></div>
                <div className="col-span-6 text-center">
                    <Heading>My Portfolio</Heading>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Ultrices amet at varius proin nec felis purus adipiscing. Risus mauris pellentesque interdum phasellus fermentum. Sed porta aliquam in egestas. Diam eros vulputate convallis nunc justo integer non.
                    </p>
                </div>
            </div>
            <div className="container grid grid-cols-12 gap-10">
                <div className="col-span-3 mx-auto">
                    <Image src="/img/portfolio-1.png" alt="portfolio" height="313" width="413" />
                </div>
                <div className="col-span-3 mx-auto">
                    <Image src="/img/portfolio-1.png" alt="portfolio" height="313" width="413" />
                </div>
                <div className="col-span-3 mx-auto">
                    <Image src="/img/portfolio-1.png" alt="portfolio" height="313" width="413" />
                </div>
                <div className="col-span-3 mx-auto">
                    <Image src="/img/portfolio-1.png" alt="portfolio" height="313" width="413" />
                </div>
                <div className="col-span-3 mx-auto">
                    <Image src="/img/portfolio-1.png" alt="portfolio" height="313" width="413" />
                </div>
                <div className="col-span-3 mx-auto">
                    <Image src="/img/portfolio-1.png" alt="portfolio" height="313" width="413" />
                </div>
                <div className="col-span-3 mx-auto">
                    <Image src="/img/portfolio-1.png" alt="portfolio" height="313" width="413" />
                </div>
                <div className="col-span-3 mx-auto">
                    <Image src="/img/portfolio-1.png" alt="portfolio" height="313" width="413" />
                </div>
            </div>
        </div>
    )
}