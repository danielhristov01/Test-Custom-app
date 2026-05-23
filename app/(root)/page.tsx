"use client";
import AISection from "@/components/AISection";
import CarouselCards from "@/components/carouselcards";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
      <section className="flex my-3">
        <div className="relative container mx-auto">
          <Image
            src="/HeroPic.png"
            width={1600}
            height={1200}
            className="object-cover"
            alt="Hero section picture"
          />

          {/* Overlay */}
          <div className="md:absolute inset-0 flex items-center px-4">
            <div className="bg-white p-2 md:p-6 space-y-2 md:space-y-4">
              <h1 className="text-xl md:text-2xl font-bold">
                Master tomorrow&apos;s skills today
              </h1>

              <p className="text-sm md:text-base">
                Power up your AI, career, and life skills with the most
                up-to-date, expert-led learning.
              </p>

              <div className="block space-y-2 md:flex  gap-4 ">
                <button className="py-1 px-2 bg-purple-700 hover:bg-purple-600 text-white w-full cursor-pointer">
                  Get started
                </button>
                <button className="py-1 px-2 border border-purple-300 hover:bg-purple-300/20 w-full cursor-pointer">
                  Learn AI
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CarouselCards />
      <AISection />
      <Skills />
    </div>
  );
}
