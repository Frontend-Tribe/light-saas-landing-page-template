import logo from "@/assets/logosaas.png";
import Image from "next/image";
import InstaLogo from "@/assets/social-insta.svg";
import LinkedinLogo from "@/assets/social-linkedin.svg";
import PinterestLogo from "@/assets/social-pin.svg";
import Xlogo from "@/assets/social-x.svg";
import YoutubeLogo from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="py-10 bg-black text-white/60 md:py-20">
      <div className="container flex flex-col items-center ">
        <div className="flex flex-col gap-2">
          <div className="mx-auto mb-6">
            <Image
              src={logo}
              alt="logo image for the footer "
              width={50}
            ></Image>
          </div>
          <div className="flex flex-col gap-4 mx-auto text-center mb-6 md:flex-row  tracking-wider text-md">
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Customers</a>
            <a href="#">Pricing</a>
            <a href="#">Help</a>
            <a href="#">Careers</a>
          </div>
          <div className="flex gap-4 justify-center mb-6 ">
            <InstaLogo className="text-zinc-600 hover:text-zinc-400 cursor-pointer" />
            <LinkedinLogo className="text-zinc-600 hover:text-zinc-400 cursor-pointer" />
            <PinterestLogo className="text-zinc-600 hover:text-zinc-400 cursor-pointer" />
            <Xlogo className="text-zinc-600 hover:text-zinc-400 cursor-pointer" />
            <YoutubeLogo className="text-zinc-600 hover:text-zinc-400 cursor-pointer" />
          </div>
          <div className="mx-auto">Website developed by Marcos Ramos</div>
        </div>
      </div>
    </footer>
  );
};
