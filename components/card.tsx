import { ArrowRight, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Card = ({
  element,
}: {
  element: {
    image: string;
    text: string;
  };
}) => {
  return (
    <div className="relative py-2 h-full">
      <Link href="#">
        <Image
          src={element.image}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 280px"
          alt="Some Pictures"
          className="rounded-2xl object-cover"
        />
        <div className="absolute  bottom-5 left-5 bg-white w-30 h-20 md:w-[250px] md:h-[130px] md:p-3 md:space-y-5">
          <div className="border-2 flex w-15 ">
            <Users className="h-5" />
            <span className="text-xs text-gray-400">18M+</span>
          </div>

          <div className="flex justify-around items-end px-2">
            <span className="text-xs md:text-2xl font-semibold">
              {element.text}
            </span>
            <ArrowRight />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
