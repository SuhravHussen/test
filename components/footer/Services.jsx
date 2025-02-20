import Link from "next/link";

export default function Services() {
  return (
    <div className="w-full lg:w-1/4 flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-white">OUR SERVICES</h1>

      <div className="flex flex-col gap-2">
        <Link href="/" className="footer-link">
          Strategy & Research
        </Link>
        <Link href="/" className="footer-link">
          Web Development
        </Link>
        <Link href="/" className="footer-link">
          Web Solution{" "}
        </Link>
        <Link href="/" className="footer-link">
          Digital Marketing{" "}
        </Link>
        <Link href="/" className="footer-link">
          App Development{" "}
        </Link>
      </div>
    </div>
  );
}
