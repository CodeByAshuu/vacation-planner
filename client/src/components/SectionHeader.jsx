export default function SectionHeader({ title, subtitle, centered = false }) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      {subtitle && (
        <span className="text-gold-muted text-sm font-semibold tracking-widest uppercase mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
        {title}
      </h2>
    </div>
  );
}
