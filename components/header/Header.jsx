import Image from "next/image";
import DesktopNavigation from "./DesktopNavigation";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <div className="flex bg-[--secondary] text-white  py-2  h-[75px] items-center justify-between fixed top-0 left-0 right-0 z-50">
      <div className="ml-6 md:ml-0 w-[30%] flex items-center justify-center">
        <Image src="/logo.svg" alt="Vercel Logo" width={165} height={75} />
      </div>
      <DesktopNavigation />
      <div className="w-[30%] flex items-center justify-end gap-4 xl:mr-6">
        <button className="hidden xl:block  animated-button px-4 py-2 font-semibold  text-[17px] rounded">
          Get A Quote
        </button>
        <MobileNav />
      </div>
    </div>
  );
}
