import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="flex flex-col">
          <div className="tag mb-3 mx-auto">Testimonials</div>
          <h2 className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-b from-black to-blue-800 text-transparent bg-clip-text mb-6">
            What our users say
          </h2>
          <p className="text-xl md:text-2xl font-bold text-center mb-6 max-w-md mx-auto">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 lg:grid-cols-3 items-start`}
        >
          {testimonials.map((testimonial, index) => {
            return (
              <div
                key={index}
                className="rounded-lg py-10 px-5 shadow-md shadow-zinc-400/20 mb-10"
              >
                <div className="flex items-center gap-3 justify-center mb-4">
                  <Image
                    src={testimonial.imageSrc}
                    alt="profile img"
                    width={50}
                    height={50}
                  />
                  <div className="flex flex-col">
                    <span className="font-bold text-xl">
                      {testimonial.name}
                    </span>
                    <span className="text-zinc-700">
                      {testimonial.username}
                    </span>
                  </div>
                </div>

                <div className="text-md text-black px-10 text-center">
                  {testimonial.text}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
