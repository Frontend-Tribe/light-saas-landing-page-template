import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import Image from "next/image";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";

export const Hero = () => {
  return (
    <section className="pt-8 pb-20  md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_at_bottom_left,_#183EC2,_#EAEEFE_66%)] overflow-x-clip">
      <div className="container ">
        <div className="md:flex items-center">
          <div className="md:w-[478px] ">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              Version 2.0 is here
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Pathway to productivity
            </h1>
            <p className="text-xl text-[#010d3E] tracking-tighter mt-6">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your success
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image
              src={cogImage}
              alt="image of a 3D cog"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            ></Image>
            <Image
              src={cylinderImage}
              alt="image of a 3D cylinder"
              className="absolute hidden md:block -top-8 -left-32 "
              width={220}
              height={220}
            ></Image>

            <Image
              src={noodleImage}
              alt="image of a 3D noodle"
              className="absolute hidden lg:block top-[524px] left-[480px] rotate-[30deg]"
              width={220}
              height={220}
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};
