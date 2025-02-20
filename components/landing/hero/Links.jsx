export default function Links() {
  return (
    <div className="w-full h-[20%] xl:w-[20%] xl:h-full  flex xl:flex-col xl:justify-center items-center gap-3 text-white pl-4 pb-10  xl:pb-0 xl:pl-0  flex-wrap">
      {[
        { href: "https://www.facebook.com", text: "Facebook" },
        { href: "https://www.instagram.com", text: "Instagram" },
        { href: "https://www.twitter.com", text: "Twitter" },
        { href: "https://www.linkedin.com", text: "LinkedIn" },
      ].map((item) => (
        <div
          key={item.href}
          className="flex flex-row-reverse xl:flex-col items-center gap-1"
        >
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="xl:rotate-180 xl:[writing-mode:vertical-rl]  text-sm xl:text-base cursor-pointer hover:text-[--primary]"
          >
            {item.text}
          </a>
          <div className="w-3 h-3 border border-dashed border-gray-300 border-t-white rounded-full animate-spin "></div>
        </div>
      ))}
    </div>
  );
}
