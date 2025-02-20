import { getLatestBlogs } from "@/actions/getLatestBlogs";
import BlogCard from "@/components/common/blog/BlogCard";

export default async function BlogList() {
  const blogs = await getLatestBlogs();
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center max-w-screen-xl mx-auto blog-card">
      {blogs.map((blog, index) => (
        <BlogCard key={index} blog={blog} />
      ))}
    </div>
  );
}
