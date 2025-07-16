import { NAVBAR_HEIGHT } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav
      className="w-full fixed top-0 left-0 z-50 shadow-xl"
      style={{ height: `${NAVBAR_HEIGHT}px` }}
    >
      <div className="w-full h-full flex justify-between items-center py-3 px-8 bg-primary-700 text-white">
        <div className="flex items-center gap-4 md:gap-6">
          <Link
            href="/"
            className="cursor-pointer hover:!text-primary-300"
            scroll={false}
          >
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="MomoRental Logo"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="text-lg font-bold">
                {"Momo"}
                <span className="text-secondary-500 font-light hover:!text-primary-300">
                  Rental
                </span>
              </div>
            </div>
          </Link>
        </div>
        <p className="hidden lg:block">
          Discover your perfect rental apartments with us!
        </p>
        <div className="flex items-center gap-5">
          <Link href="/signin">
            <Button
              variant="outline"
              className="text-white bg-transparent hover:text-primary-700 hover:bg-white rounded-lg"
            >
              Sign In
            </Button>
          </Link>
          <Link href="/signup">
            <Button
              variant="outline"
              className="text-white bg-secondary-500 hover:text-primary-700 hover:bg-white rounded-lg"
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
