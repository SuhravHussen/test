import Subscribe from "./Subscribe";

import Social from "./Social";
import Services from "./Services";
import QuickLinks from "./QuickLinks";
import Contacts from "./Contacts";

export default function Footer() {
  return (
    <div className="w-full   bg-[--secondary] bg-[url('/footer-bg.png')] bg-cover relative ">
      <Subscribe />

      <div className="flex flex-col lg:flex-row pt-52 pb-10 gap-16 max-w-screen-xl w-[90%] mx-auto">
        <Social />
        <Services />
        <QuickLinks />
        <Contacts />
      </div>
    </div>
  );
}
