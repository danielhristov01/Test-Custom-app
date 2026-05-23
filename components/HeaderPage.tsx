import Image from "next/image";
import { Input } from "./ui/input";
import { Menu, Search } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export const HeaderPage = () => {
  return (
    <header className="gap-6 py-2 px-10 ">
      <div className="md:hidden flex justify-between gap-6 w-full">
        <Sheet>
          <SheetTrigger asChild>
            <button className="cursor-pointer">
              <Menu className="h-9 w-9 hover:bg-purple-200 p-1" />
            </button>
          </SheetTrigger>

          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>
                <a href="#">
                  <Image
                    width={92}
                    height={34}
                    className="shrink-0  "
                    src="logo-udemy (1).svg"
                    alt="logo"
                  />
                </a>
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-8 border-bottom-purple-300 px-3 ">
              <h2>Explore by Goal</h2>

              <a href="#" className="text-gray-500 hover:bg-purple-200 p-2">
                Learn AI
              </a>
              <a href="#" className="text-gray-500 hover:bg-purple-200 p-2">
                Launch a new career
              </a>
              <a href="#" className="text-gray-500 hover:bg-purple-200 p-2">
                Prepare for a certification
              </a>
            </div>

            <div className="flex flex-col gap-4 mt-8 border-bottom-purple-300 px-3">
              <h2>Most popular</h2>
              <a href="#" className="text-gray-500 hover:bg-purple-200 p-2">
                Web Development
              </a>
              <a href="#" className="text-gray-500 hover:bg-purple-200 p-2">
                Mobile Development
              </a>
              <a href="#" className="text-gray-500 hover:bg-purple-200 p-2">
                Game Development
              </a>
            </div>
            <div className="flex flex-col gap-4 mt-8 border-bottom-purple-300 px-3">
              <h2>More from Udemy</h2>
              <a href="#" className="text-gray-500 hover:bg-purple-200 p-2">
                Udemy Business
              </a>
              <a href="#" className="text-gray-500 hover:bg-purple-200 p-2">
                Get the app
              </a>
              <a href="#" className="text-gray-500 hover:bg-purple-200 p-2">
                Help and Support
              </a>
            </div>
          </SheetContent>
        </Sheet>

        <nav className="shrink-0 ">
          <a href="#">
            <Image
              width={92}
              height={34}
              className="shrink-0  "
              src="logo-udemy (1).svg"
              alt="logo"
            />
          </a>
        </nav>
        <div className="flex gap-4 ">
          <a href="#" className="cursor-pointer items-center  ">
            <Image
              src="/ShoppingCart.png"
              width={30}
              height={24}
              alt="Shopping Cart"
            />
          </a>
          <button>
            <Search />
          </button>
        </div>
      </div>

      <div className="hidden md:flex gap-4 justify-between container mx-auto shadow-sm">
        <div className="flex items-center">
          <a href="#">
            <Image
              width={92}
              height={34}
              className="shrink-0  "
              src="logo-udemy (1).svg"
              alt="logo"
            />
          </a>

          <p className="hidden md:flex hover:bg-purple-200 text-gray-500 cursor-pointer p-3 mx:1">
            Explore
          </p>
        </div>

        <div className="flex items-center w-1/2  rounded-full  border border-purple-300 pl-3  ">
          <Image src="/pngegg.png" alt="Search Icon" width={15} height={15} />
          <Input
            className="h-12 border-0 focus-visible:border-0 focus-visible:ring-0 ring-0 outline-none min-w-10 "
            placeholder="Search for anything "
          />
        </div>

        <div className="flex gap-4 items-center">
          <div className="text-xs hover:bg-purple-200 text-gray-500 cursor-pointer   ">
            Plans & Pricing
          </div>
          <div className=" text-xs  hover:bg-purple-200 text-gray-500 cursor-pointer ">
            Udemy Business
          </div>
          <a
            href="#"
            className="py-1 px-2 hover:bg-purple-200 border border-purple-300 shrink-0 "
          >
            <Image
              src="/ShoppingCart.png"
              width={24}
              height={24}
              alt="Shopping Cart"
            />
          </a>
          <button className="py-1 px-2 border border-purple-300 hover:bg-purple-300/20  cursor-pointer">
            Log In
          </button>

          <button className="py-1 px-2 bg-purple-700 hover:bg-purple-600 text-white  rounded-md cursor-pointer">
            Sign up
          </button>

          <a
            href="#"
            className="py-1 px-2 border border-purple-300 hover:bg-purple-200 cursor-pointer shrink-0"
          >
            <Image
              src="/LanguageIcon.png"
              width={20}
              height={20}
              alt="Language"
            />
          </a>
        </div>
      </div>
    </header>
  );
};
