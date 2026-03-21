export default function Card({ children, className = "", noPadding = false }) {
  return (
    <div className={`bg-white rounded-3xl shadow-sm hover:shadow-lg hover:scale-[1] transition-all duration-500 overflow-hidden ${noPadding ? "" : "p-8"} ${className}`}>
      {children}
    </div>
  );
}
