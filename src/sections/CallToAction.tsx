import Image from "next/image";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";

export const CallToAction = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-blue-200 overflow-x-hidden">
      <div className="container ">
        <div className="flex flex-col justify-center text-center relative ">
          <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-b from-black to-blue-800 bg-clip-text mb-6 md:py-2">
            Sing up for free
          </h3>
          <p className="text-xl font-medium  text-zinc-700 mb-10 md:max-w-md mx-auto">
            Celebrate the joy of accomplishment with an app deseinged to track
            your progress and motivate your efforts
          </p>
          <div className="flex mx-auto gap-5 md:text-xl">
            <button className="btn btn-primary">Get for free</button>
            <button className="btn btn-text border-2 border-white ">
              learn more <span className="ml-2">&rarr;</span>
            </button>
          </div>
          <div className="absolute -left-[200px] -top-[137px] md:block hidden">
            <Image src={starImage} alt="3d model of star" width={360}></Image>
          </div>
          <div className="absolute -right-[200px] -top-1/2 md:block hidden">
            <Image src={springImage} alt="3d model of star" width={360}></Image>
          </div>
        </div>
      </div>
    </section>
  );
};
