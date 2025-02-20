import fakeBlogs from "../lib/fakeBlogs";

export async function getLatestBlogs() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts `, {
    cache: "force-cache",
  });
  await res.json();
  return fakeBlogs;
}
