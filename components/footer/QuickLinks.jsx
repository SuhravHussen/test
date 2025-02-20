import React from "react";
import Link from "next/link";

export default function QuickLinks() {
  return (
    <div className="w-full lg:w-1/4 flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-white">Quick Links</h1>

      <div className="flex flex-col gap-2">
        <Link href="/" className="footer-link">
          About Us
        </Link>
        <Link href="/" className="footer-link">
          Services
        </Link>
        <Link href="/" className="footer-link">
          Projects
        </Link>
        <Link href="/" className="footer-link">
          Blogs
        </Link>
        <Link href="/" className="footer-link">
          Career
        </Link>
      </div>
    </div>
  );
}
