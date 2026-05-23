import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Card from "./card";
import { useEffect, useState } from "react";
import { PaginationNav } from "./PaginationNav";
import Skills from "./Skills";
import { CONTENT_CARD } from "@/lib/constants";

const CarouselCards = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(CONTENT_CARD.length / itemsPerPage);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (api) {
      const targetIndex = (page - 1) * itemsPerPage;
      api.scrollTo(targetIndex);
    }
  };
  // Sync carousel movement with pagination
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      const selectedIndex = api.selectedScrollSnap();
      console.log("Selected index:", selectedIndex);
      const newPage = Math.min(selectedIndex / itemsPerPage) + 1;
      console.log("Calculated page:", newPage);
      setCurrentPage(newPage);
    }; // Initial call
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, itemsPerPage]);

  return (
    <section className="flex flex-col xl:flex-row items-center justify-center">
      <div className="mx-2 space-y-6">
        <h3 className="text-3xl font-bold">
          Learn essential career and life skills
        </h3>
        <p>
          Udemy helps you build in-demand skills fast and advance your career in
          a changing job market.
        </p>

        <div className="grid grid-cols-2 md:hidden">
          {CONTENT_CARD.map((e, i) => (
            <div className="h-[200px] m-2" key={i}>
              <Card element={e} key={i} />
            </div>
          ))}
        </div>
      </div>

      <Carousel
        opts={{
          align: "start",
          slidesToScroll: 1,
        }}
        setApi={setApi}
        className="w-full xl:w-2/3 p-4 hidden md:block"
      >
        <CarouselContent className="h-[400px]">
          {CONTENT_CARD.map((item, index) => (
            <CarouselItem key={index} className="basis-1/2 xl:basis-1/3 h-full">
              <Card element={item} key={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-6">
          <PaginationNav
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </Carousel>
    </section>
  );
};

export default CarouselCards;
