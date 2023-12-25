"use client"
import { Heading } from "@/features/ui";
import Image from "next/image";
import { Button } from "primereact/button";

export function HeroSection(){
    return (
        <div className="bg-[#DFFCF259] " >
            <div className="container grid grid-cols-12 h-lvh xl:-mt-[104px] items-center justify-between " >
                <div className="col-span-12 lg:col-span-6 2xl:col-span-4">
                    <div className="flex gap-4">
                        <Image src="/img/icon-bar.svg" width="25" height="25" alt="Icon bar" />
                        <p>Hello I am  </p> 
                        <Image src="/img/hand-wave.svg" width="25" height="25" alt="hand wave" />
                    </div> 
                    <Heading className=" md:text-[70px]">Rejuna Hasan</Heading>
                    <Heading className="text-purple text-[30px]">UI UX Designer.</Heading>
                    <p className=" my-6">
                    Lorem ipsum dolor sit amet consectetur. In velit habitant at nibh a quisque. Tempus ac sagittis a risus felis orci scelerisque eget. Sed laoreet amet nisl nisl imperdiet ornare fermentum sit in. 
                    </p>
                    <div className="flex gap-4">
                        <Button 
                            label="Hire Me" 
                            pt={{
                                root: {
                                    className: "btn-primary"
                                }
                            }} 
                        />
                        <Button 
                            label="View Resume" 
                            pt={{
                                root: {
                                    className: "btn-secondary"
                                }
                            }} 
                        />
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6 2xl:col-span-8 lg:ml-auto mt-12 lg:mt-0">
                    <Image src="/img/user.png" height="490" width="490"  alt="user image"/>
                </div>
            </div>
        </div>
    )
}