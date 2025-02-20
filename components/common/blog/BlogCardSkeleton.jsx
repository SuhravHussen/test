export default function BlogCardSkeleton() {
  return (
    <div
      className="flex flex-col w-[300px] md:w-[350px] lg:w-[384px]
    h-[400px] rounded-xl overflow-hidden relative group animate-pulse"
    >
      <div className="relative w-full h-[250px] bg-gray-300 dark:bg-gray-700"></div>

      <div className="absolute top-3 left-2 bg-gray-400 dark:bg-gray-600 px-3 py-1 z-30 rounded-2xl w-20 h-6"></div>

      <div className="flex flex-col bg-gray-200 dark:bg-gray-800 p-6 min-h-[180px] gap-6">
        <div className="flex justify-between items-center">
          <div className="w-16 h-4 bg-gray-400 dark:bg-gray-600 rounded"></div>
          <div className="w-12 h-4 bg-gray-400 dark:bg-gray-600 rounded"></div>
        </div>
        <div className="w-full h-6 bg-gray-400 dark:bg-gray-600 rounded"></div>
        <div className="w-3/4 h-6 bg-gray-400 dark:bg-gray-600 rounded"></div>
      </div>
    </div>
  );
}
