import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BUTTON_LABEL } from "@/lib/constants";
import Image from "next/image";

const Skills = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleButtonClick = (index: number) => {
    setSelectedIndex(index);
  };
  console.log(BUTTON_LABEL[0]);

  return (
    <section className="mt-10 h-[400px]">
      <div className="hidden md:block space-y-10 px-10">
        <div className=" space-y-3 ">
          <h3 className="text-4xl">Skills to transform your career and life</h3>
          <p className="text-xl">
            From critical skills to technical topics, Udemy supports your
            professional development.
          </p>
        </div>

        <div className="inline space-x-10  text-2xl border-b-2 ">
          {BUTTON_LABEL.map((item, index) => (
            <button
              onClick={() => handleButtonClick(index)}
              key={index}
              className={`cursor-pointer ${
                selectedIndex === index
                  ? "border-b-3 border-black"
                  : "border-b-2"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
        {selectedIndex !== null && (
          <div className="flex items-center justify-center space-x-7 mt-10 ">
            {BUTTON_LABEL[selectedIndex].items.map((ele, idx) => (
              <div
                key={idx}
                className="hover:bg-gray-200/50 border cursor-pointer"
              >
                <div className="relative aspect-video w-60 overflow-hidden container mx-auto ">
                  <Image src={ele.image} fill alt="content Pic"></Image>
                </div>

                <h3 className="text-xl font-semibold">{ele.text}</h3>
                <span className="text-xs font-extralight">365 Careers</span>

                <div className="flex space-x-2 text-sm py-6 px-3 ">
                  <span className="border px-2 bg-cyan-300">Bestseller</span>{" "}
                  <div className="flex border px-2 space-x-2 ">
                    <Image
                      src="/[CITYPNG.COM]PNG Star Favorite Yellow Icon Symbol - 600x600.png"
                      width={15}
                      height={4}
                      alt="star"
                    />

                    <span>4.5</span>
                  </div>
                  <span className="border px-2">12.870 ratings</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className=" text-4xl md:hidden m-10">
        <Accordion type="single" collapsible>
          {BUTTON_LABEL.map((label, idx) => (
            <AccordionItem key={idx} value={`${label.name}-${idx}`}>
              <AccordionTrigger>
                <span>{label.name}</span>
              </AccordionTrigger>

              <AccordionContent>
                {selectedIndex !== null && (
                  <div>
                    {label.items.map((ele, idx) => (
                      <div
                        key={idx}
                        className="hover:bg-gray-200/50 border cursor-pointer"
                      >
                        <div className="relative aspect-video w-60 overflow-hidden container mx-auto ">
                          <Image src={ele.image} fill alt="content Pic"></Image>
                        </div>

                        <h3 className="text-xl font-semibold">{ele.text}</h3>
                        <span className="text-xs font-extralight">
                          365 Careers
                        </span>

                        <div className="flex space-x-2 text-sm py-6 px-3 ">
                          <span className="border px-2 bg-cyan-300">
                            Bestseller
                          </span>{" "}
                          <div className="flex border px-2 space-x-2 ">
                            <Image
                              src="/[CITYPNG.COM]PNG Star Favorite Yellow Icon Symbol - 600x600.png"
                              width={15}
                              height={4}
                              alt="star"
                            />

                            <span>4.5</span>
                          </div>
                          <span className="border px-2">12.870 ratings</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="h-screen"></div>
    </section>
  );
};

export default Skills;
