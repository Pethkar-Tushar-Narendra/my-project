import { ArrowUpIcon } from "@heroicons/react/20/solid";

export default function ScrollToTopButton() {
  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      onClick={handleScrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-8 right-8 z-10 bg-gray-100 rounded-full p-2 shadow-lg hover:bg-gray-200 transition duration-200"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}
    >
      {/* Heroicons Arrow Up Icon (20/solid) */}
      <ArrowUpIcon className="h-6 w-6 text-gray-500" />
    </button>
  );
}
