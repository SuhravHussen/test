import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blog }) {
  return (
    <Link
      href={`/blog/${blog.id}`}
      className="flex flex-col w-[300px] md:w-[350px] lg:w-[384px]
      h-[400px] rounded-xl overflow-hidden relative group "
    >
      <div className="relative w-full h-[250px]">
        <p className="absolute top-3 left-2 bg-[--primary] text-[--secondary] px-3 py-1 z-30 rounded-2xl font-bold">
          {blog.category}
        </p>
        <Image
          src={blog.image}
          alt="Vercel Logo "
          fill
          className="group-hover:scale-110 transition-all duration-500"
        />
      </div>
      <div className="flex flex-col bg-[--secondary]  p-6 min-h-[160px] gap-6 blog-card-content group-hover:scale-105 transition-all duration-500">
        <div className="flex justify-between items-center">
          <p>{blog.author}</p>
          <p>{blog.date}</p>
        </div>
        <h1 className="text-2xl font-bold line-clamp-2">{blog.title}</h1>
      </div>
    </Link>
  );
}
