"use client";
import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import pulseLogo from "@/assets/logo-pulse.png";
import celestialLogo from "@/assets/logo-celestial.png";
import apexLogo from "@/assets/logo-apex.png";
import echoLogo from "@/assets/logo-echo.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <section className="py-8 bg-white md:py-12">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black)]">
          <motion.div
            className="flex gap-14 flex-none  pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image src={acmeLogo} alt="Acme Logo" className="logo-ticker-img" />
            <Image
              src={quantumLogo}
              alt="quantum Logo"
              className="logo-ticker-img"
            />
            <Image
              src={pulseLogo}
              alt="Pulse Logo"
              className="logo-ticker-img"
            />
            <Image
              src={celestialLogo}
              alt="celestial Logo"
              className="logo-ticker-img"
            />
            <Image src={apexLogo} alt="Apex Logo" className="logo-ticker-img" />
            <Image src={echoLogo} alt="Echo Logo" className="logo-ticker-img" />
            {/* second set of logos */}
            <Image src={acmeLogo} alt="Acme Logo" className="logo-ticker-img" />
            <Image
              src={quantumLogo}
              alt="quantum Logo"
              className="logo-ticker-img"
            />
            <Image
              src={pulseLogo}
              alt="Pulse Logo"
              className="logo-ticker-img"
            />
            <Image
              src={celestialLogo}
              alt="celestial Logo"
              className="logo-ticker-img"
            />
            <Image src={apexLogo} alt="Apex Logo" className="logo-ticker-img" />
            <Image src={echoLogo} alt="Echo Logo" className="logo-ticker-img" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
