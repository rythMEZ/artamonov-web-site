interface SectionHeadingProps {
  id: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
}

export function SectionHeading({
  id,
  title,
  description,
  tone = "light",
}: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl sm:mb-14">
      <h2
        id={id}
        className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base sm:text-lg ${
            tone === "dark" ? "text-muted-on-dark" : "text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
