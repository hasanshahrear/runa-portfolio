"use client";

import { Heading, SkillProgress } from "@/features/ui";

export function SkillSection() {
  return (
    <div className=" bg-[#DFFCF259] pt-28 pb-44">
      <div className="container grid grid-cols-12 mb-20">
        <div className="col-span-3" />
        <div className="col-span-12 lg:col-span-6 text-center">
          <Heading>What is my skill</Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ultrices amet at varius
            proin nec felis purus adipiscing. Risus mauris pellentesque interdum
            phasellus fermentum. Sed porta aliquam in egestas. Diam eros
            vulputate convallis nunc justo integer non.
          </p>
        </div>
      </div>
      <div className="container grid grid-cols-12 lg:gap-10">
        <div className="col-span-3" />
        <div className="col-span-12 lg:col-span-3">
          <div className=" space-y-6">
            <SkillProgress name="Figma" value="95" />
            <SkillProgress name="Adobe XD" value="85" />
            <SkillProgress name="Adobe PhotoShop" value="80" />
          </div>
        </div>
        <div className="col-span-12 mt-8 lg:mt-0 lg:col-span-3">
          <div className=" space-y-6">
            <SkillProgress name="HTML" value="85" />
            <SkillProgress name="CSS" value="75" />
            <SkillProgress name="WordPress" value="80" />
          </div>
        </div>
      </div>
    </div>
  );
}
