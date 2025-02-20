import React from "react";
import { PhoneCall, Mail, MapPin } from "lucide-react";

export default function Contacts() {
  return (
    <div className="w-full lg:w-1/4 flex flex-col gap-6 font-medium">
      <h1 className="text-2xl font-bold text-white ">Contacts</h1>

      <div className="flex">
        <div className="w-[50px] flex  items-center">
          <PhoneCall size={28} className="text-[--primary]" />
        </div>
        <div className="w-[90%]">
          <p>+880123456789</p>
          <p>+880123456789</p>
        </div>
      </div>

      <div className="flex">
        <div className="w-[50px] flex  items-center">
          <Mail size={28} className="text-[--primary]" />
        </div>
        <div className="w-[90%]">
          <p>example@gmail.com</p>
          <p>example@gmail.com</p>
        </div>
      </div>

      <div className="flex">
        <div className="w-[50px] flex  items-center">
          <MapPin size={28} className="text-[--primary]" />
        </div>
        <div className="w-[90%]">
          <p>168/170, Avenue 01, Mirpur DOHS, Bangladesh</p>
        </div>
      </div>
    </div>
  );
}
