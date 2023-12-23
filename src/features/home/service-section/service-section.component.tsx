import { Heading } from "@/features/ui";
import Image from "next/image";

export function ServiceSection(){
    const cardClass = ""
    return(
        <div className=" bg-[#DFFCF259] py-28">
            <div className="container grid grid-cols-12 mb-20">
                <div className="col-span-3"></div>
                <div className="col-span-6 text-center">
                    <Heading>My Awesome Service</Heading>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Ultrices amet at varius proin nec felis purus adipiscing. Risus mauris pellentesque interdum phasellus fermentum. Sed porta aliquam in egestas. Diam eros vulputate convallis nunc justo integer non.
                    </p>
                </div>
            </div>
            <div className="container grid grid-cols-12 gap-6">
                <div className="col-span-4 space-y-5 card hover:card-hover text-center">
                    <Image src="/img/ui-ux-design.svg" height="136" width="167" alt="ui ux design" className="mx-auto" />
                    <Heading className=" text-3xl">UI/UX Design</Heading>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Cursus diam dignissim feugiat ac nullam egestas semper ultricies nam.
                    </p>
                </div>
                <div className="col-span-4 space-y-5 card hover:card-hover text-center">
                    <Image src="/img/web-development.svg" height="136" width="167" alt="ui ux design" className="mx-auto" />
                    <Heading className=" text-3xl">Web Development</Heading>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Cursus diam dignissim feugiat ac nullam egestas semper ultricies nam.
                    </p>
                </div>
                <div className="col-span-4 space-y-5 card hover:card-hover text-center">
                    <Image src="/img/app-design.svg" height="136" width="167" alt="ui ux design" className="mx-auto" />
                    <Heading className=" text-3xl">App Design</Heading>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Cursus diam dignissim feugiat ac nullam egestas semper ultricies nam.
                    </p>
                </div>
                
            </div>
        </div>
    )
}