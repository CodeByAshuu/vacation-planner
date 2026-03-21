export default function Button({ children, variant = "primary", className = "", ...props }) {
  const baseStyle = "px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 inline-block text-center";
  
  const variants = {
    primary: "bg-[#d4af37] text-white shadow-md hover:shadow-lg",
    secondary: "bg-gray-900 text-white shadow-md hover:shadow-lg",
    outline: "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white",
    ghost: "text-gray-900 hover:bg-gray-100"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
