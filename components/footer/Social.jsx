import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Social() {
  return (
    <div className="w-full lg:w-1/4 flex flex-col gap-6">
      <Image
        src="/logo.png"
        alt="logo"
        width={200}
        height={100}
        className="-ml-6"
      />

      <p>
        Integer purus odio, placerat nec ande rhoncus in, ullamcorper nec dolor.
        on aptent taciti sociosqu.
      </p>

      <div className="flex gap-3">
        <Link
          href="https://facebook.com"
          className="p-2 bg-[var(--background)] rounded-xl hover:rotate-210 transition-all duration-500"
        >
          <Facebook
            className=" hover:rotate-[360deg] transition-all duration-500 "
            fill="white"
            strokeWidth={0.3}
          />
        </Link>
        <Link
          href="https://instagram.com"
          className="p-2 bg-[var(--background)] rounded-xl hover:rotate-210 transition-all duration-500"
        >
          <Instagram
            className=" hover:rotate-[360deg] transition-all duration-500 "
            strokeWidth={1}
          />
        </Link>
        <Link
          href="https://x.com"
          className="p-2 bg-[var(--background)] rounded-xl hover:rotate-210 transition-all duration-500"
        >
          <Twitter
            className=" hover:rotate-[360deg] transition-all duration-500 "
            fill="white"
            strokeWidth={0.3}
          />
        </Link>
        <Link
          href="https://linkedin.com"
          className="p-2 bg-[var(--background)] rounded-xl hover:rotate-210 transition-all duration-500"
        >
          <Linkedin
            className=" hover:rotate-[360deg] transition-all duration-500 "
            fill="white"
            strokeWidth={0.3}
          />
        </Link>
      </div>
    </div>
  );
}
