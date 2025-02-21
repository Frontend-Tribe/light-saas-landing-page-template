import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import Image from "next/image";
import tubeImage from "@/assets/tube.png";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="flex flex-col  max-w-md items-center mx-auto">
          <div className="tag mb-6">Boost your procutivity</div>
          <h1 className="text-center font-black text-3xl md:text-5xl  tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mb-5">
            A more effective way to track progress
          </h1>
          <p className="text-center text-2xl font-light tracking-tight text-[#010d3e] mb-10">
            Efforlessly turn your ideas into a fully functiona, responsive Saas
            website in just minutes with this template.{" "}
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="product image showcase" />
          <Image
            src={pyramidImage}
            alt="3d model pyramid"
            className="hidden md:block absolute -right-36 -top-36"
            height={262}
            width={262}
          ></Image>
          <Image
            src={tubeImage}
            alt="3d model tube"
            className="hidden md:block absolute bottom-24 -left-36"
            height={262}
            width={262}
          ></Image>
        </div>
      </div>
    </section>
  );
};
