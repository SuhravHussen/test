import fakeProjects from "../lib/fakeProjects";

export async function getProjects(category) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
    cache: "force-cache",
  });
  await res.json();
  return fakeProjects;
}
