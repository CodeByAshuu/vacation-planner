import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollUp}
      aria-label="Scroll to top"
      className={`
        fixed bottom-8 right-8 z-50
        w-12 h-12 rounded-full
        bg-gray-900 text-white shadow-xl
        flex items-center justify-center
        transition-all duration-300 ease-out
        hover:bg-gray-700 hover:scale-110 hover:shadow-2xl
        active:scale-95
        ${visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      <ArrowUp className="w-5 h-5" strokeWidth={2} />
    </button>
  );
}
