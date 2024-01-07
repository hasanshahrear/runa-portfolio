import { Heading } from '@/features/ui';

export function Clients() {
  return (
    <div className=" bg-[#DFFCF259] pt-28 pb-44">
      <div className="container grid grid-cols-12 mb-20">
        <div className="col-span-3" />
        <div className="col-span-12 lg:col-span-6 text-center">
          <Heading>My Clients Love</Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ultrices amet at varius proin nec felis purus adipiscing. Risus mauris pellentesque interdum phasellus fermentum. Sed porta aliquam in egestas. Diam eros vulputate convallis nunc justo integer non.
          </p>
        </div>
      </div>
      <div className="container grid grid-cols-12 gap-10" />
    </div>
  );
}
