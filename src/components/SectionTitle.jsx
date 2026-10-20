function SectionTitle({ title, desc, children }) {
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl sm:text-3xl font-semibold">{title}</h2>
        {children}
      </div>
      <p className="mt-1.5 mb-6 text-muted">{desc}</p>
    </>
  );
}

export default SectionTitle;
