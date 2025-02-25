import logo from '@/assets/logosaas.png';
import Image from 'next/image';
import SocialX from '@/assets/social-x.svg';
import SocialLinkedIn from '@/assets/Social-linkedIn.svg';
import SocialInsta from '@/assets/Social-insta.svg';
import SocialPin from '@/assets/Social-pin.svg';
import SocialYoutube from '@/assets/Social-youtube.svg';

export const Footer = () => {
  return (
    <footer className="bg-black text-[#bcbcbc] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:h-full before:w-full before:bg-[linear-gradient(to_right,#f87bff,#ffdd9b,#c2f0b1,#2fd8fe)] before:absolute">
          <Image src={logo} alt="SaaS logo" height={40} className='relative' />
        </div>
        <nav className='flex flex-col gap-6 mt-6 md:flex-row justify-center'>
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Customers</a>
            <a href="#">Pricing</a>
            <a href="#">Help</a>
            <a href="#">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX alt="Social X" />
          <SocialInsta alt="Social Instagram" />
          <SocialLinkedIn alt="Social LinkedIn" />
          <SocialPin alt="Social Pinterest" />
          <SocialYoutube alt="Social YouTube" />
        </div>
        <p className='mt-6'>&copy; 2024 GIDI, peace.</p>
      </div>
    </footer>
  );
};
