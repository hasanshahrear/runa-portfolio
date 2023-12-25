"use client"
import { Heading } from "@/features/ui";
import Link from "next/link";
import { FaBehance, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";


export function AboutMe(){
    return (
        <div className="min-h-[540px] flex items-center justify-center">
            <div className="container text-center grid grid-cols-12">
               <div className="col-span-3">

               </div>
               <div className="col-span-12 lg:col-span-6">
                    <Heading>About Me</Heading>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Ultrices amet at varius proin nec felis purus adipiscing. Risus mauris pellentesque interdum phasellus fermentum. Sed porta aliquam in egestas. Diam eros vulputate convallis nunc justo integer non.
                    </p>
                    <div className="space-x-4 my-6">
                        <Link href="#" className=" inline-block text-purple" aria-label="LinkedinIn">
                            <FaLinkedinIn size="30" />
                        </Link>
                        <Link href="#" className=" inline-block text-purple" aria-label="Instagram">
                            <FaInstagram size="30" />
                        </Link>
                        <Link href="#" className=" inline-block text-purple" aria-label="Twitter">
                            <FaTwitter size="30" />
                        </Link>
                        <Link href="#" className=" inline-block text-purple" aria-label="Behance">
                            <FaBehance size="30" />
                        </Link>
                    </div>
                    
               </div>
            </div>
        </div>
    )
}