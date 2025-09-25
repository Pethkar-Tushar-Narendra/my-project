export default function ScrollToTopButton() {
  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      onClick={handleScrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-8 right-8 z-50 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition duration-200"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}
    >
      {/* Heroicons Arrow Up Icon (20/solid) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          cx="12"
          cy="12"
          r="11"
          stroke="#222"
          strokeWidth="1.5"
          fill="white"
        />
        <path
          d="M8 13l4-4 4 4"
          stroke="#222"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </button>
  );
}
