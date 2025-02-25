"use client";

import Image from "next/image";
import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-[#ffffff] to-[#d2dcff] py-24 overflow-x-clip">
      <div className="container">
        <div className="flex justify-center">
          <div className="tag">
            Boost your productivity
          </div>
        </div>
        <div className="section-heading">
          <h2 className="section-title mt-5">
            Amore effective way to track progress
          </h2>
          <p className="section-decription mt-5">
            Effortlessly turn your ideas into a fully functional, responsive, SaaS website in just minutes with this template.
          </p>
        </div>
        <div className="relative">
          <motion.img 
            src={productImage.src} 
            alt="product image"
            className="mt-10"
          />
          <motion.img 
            src={pyramidImage.src}
            alt="pyramid image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{ 
              translateY,
            }}
          />
          <motion.img 
            src={tubeImage.src}
            alt="tube image"
            height={248}
            width={248}
            className="hidden md:block absolute -left-36 bottom-24"
            style={{ 
              translateY,
            }}
          />
        </div>
      </div>
    </section>
    
  );
};
