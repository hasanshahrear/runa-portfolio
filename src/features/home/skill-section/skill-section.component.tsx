"use client"

import { Heading } from "@/features/ui";
import { Timeline } from "primereact/timeline";

type TTimelineEvent = {
    status?: string;
    date?: string;
    icon?: string;
    color?: string;
    image?: string;
}

export function SkillSection(){
    const events: TTimelineEvent[] = [
        { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];
    return(
        <div className=" bg-[#DFFCF259] py-28">
            <div className="container grid grid-cols-12 mb-20">
                <div className="col-span-3"></div>
                <div className="col-span-6 text-center">
                    <Heading>What is my skill</Heading>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Ultrices amet at varius proin nec felis purus adipiscing. Risus mauris pellentesque interdum phasellus fermentum. Sed porta aliquam in egestas. Diam eros vulputate convallis nunc justo integer non.
                    </p>
                </div>
            </div>
            <div className="container grid grid-cols-12 gap-6">
                <div className="col-span-3"></div>
                <div className="col-span-6 text-center">
                    <Timeline value={events} opposite={(item) => item.status} content={(item) => <small className="text-color-secondary">{item.date}</small>} />
                </div>
            </div>
        </div>
    )
}