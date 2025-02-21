import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className=" py-24">
      <div className="container">
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-center mb-6 tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            Pricing
          </h2>
          <p className="text-center max-w-sm mx-auto text-2xl md:max-w-lg font-light">
            Free forever. Upgrade for unlimited tasks, better security, and
            exclusive features.
          </p>
        </div>

        <div className="flex flex-col gap-6 items-center  lg:flex-row lg:items-end ">
          {pricingTiers.map((card) => {
            return (
              <div
                key={card.title}
                className={twMerge(
                  "p-10 rounded-3xl border shadow-sm shadow-[#eaeaea] mx-auto md:w-full ",
                  card.inverse === true && "border-black text-white bg-black"
                )}
              >
                <div className="flex justify-between">
                  <h3
                    className={twMerge(
                      "text-lg font-bold text-black/50",
                      card.inverse && "text-white/60"
                    )}
                  >
                    {card.title}
                  </h3>
                  {card.popular && (
                    <p className="text-md px-4 py-1.5 rounded-xl border border-black/20 bg-white font-medium tracking-wider">
                      <span className="bg-gradient-to-l from-indigo-500 via-red-500 to-blue-500 text-transparent bg-clip-text">
                        popular
                      </span>
                    </p>
                  )}
                </div>
                <div className="flex justify-center flex-col items-center">
                  <div className="flex items-baseline gap-1 mt-[30px]">
                    <span
                      className={twMerge("text-3xl leading-none font-bold")}
                    >
                      ${card.monthlyPrice}
                    </span>
                    <span
                      className={twMerge(
                        "tracking-tight font-bold text-black/50",
                        card.inverse && "text-white/60"
                      )}
                    >
                      /mouth
                    </span>
                  </div>
                  <button
                    className={twMerge(
                      "btn btn-primary mt-[30px] ",
                      card.inverse && "bg-white text-black"
                    )}
                  >
                    {card.buttonText}
                  </button>
                  <ul className="flex flex-col gap-5 mt-8">
                    {card.features.map((feature, i) => {
                      return (
                        <li key={i} className="flex gap-4 items-center text-sm">
                          <CheckIcon className="w-6 h-6" />
                          {feature}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
