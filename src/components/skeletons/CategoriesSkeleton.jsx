export default function CategoriesSkeleton() {
  return (
    <div>
      <ul
        role="list"
        className=" w-full space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900 animate-pulse"
      >
        {/* Repeat as many skeleton items as usual categories */}
        {[...Array(5)].map((_, idx) => (
          <li key={idx}>
            <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
