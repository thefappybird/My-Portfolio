import React from "react";

function SharedSection({
  id,
  bg,
  title,
  children,
}: {
  id: string;
  bg: string;
  title: string | null;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`px-4 py-18 ${bg} flex items-center justify-center mx-auto w-full`}
    >
      <div className="flex flex-col max-w-7xl gap-6 justify-center mx-auto">
        {title && <h2 className="text-4xl">{title}</h2>}
        {children}
      </div>
    </section>
  );
}

export default SharedSection;
