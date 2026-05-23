import { Atom, Gem, Layers, Rocket } from "lucide-react";
import Image from "next/image";
import React from "react";

const AISection = () => {
  return (
    <section className="bg-slate-800 rounded-3xl grid grid-cols-2 p-8 mt-10">
      <div className="text-white space-y-7 p-3 md:pl-5 ">
        <div className="space-y-2 flex items-center justify-center flex-col p-4">
          <h3 className=" font-semibold text-3xl md:text-5xl mt-5">
            Reimagine your career in the AI era
          </h3>
          <p className=" text-gray-300">
            Future-proof your skills with Personal Plan, Get acces to a veriety
            of fresh content from real-world experts.
          </p>
        </div>
        <ul className="md:grid grid-cols-2 space-y-3 font-semibold">
          <li>
            <Atom className="h-3 w-3 inline" /> Learn AI and more
          </li>
          <li>
            <Gem className="h-3 w-3 inline" /> Practice with AI coaching
          </li>
          <li>
            <Layers className="h-3 w-3 inline" /> Prep for a certification
          </li>
          <li>
            <Rocket className="h-3 w-3 inline" /> Advabce your career
          </li>
        </ul>
        <div className="space-y-2 ">
          <button className="bg-white text-black max-sm:w-full px-6 py-2 rounded-xs text-xl cursor-pointer">
            Learn more
          </button>
          <p>Starting at £10.00/month </p>
        </div>
      </div>

      <div className="px-4">
        <Image
          src="/ai-career@1x.png"
          width={650}
          height={50}
          alt="AI Picture"
        />
      </div>
    </section>
  );
};

export default AISection;
