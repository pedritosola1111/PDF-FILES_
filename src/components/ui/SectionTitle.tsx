interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionTitle({ title, subtitle, centered = true }: SectionTitleProps) {
  return (
    <div className={`mb-10 md:mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-foreground">
        {title}
      </h2>
      <div className={`section-divider mt-4 ${centered ? "" : "mx-0"}`} />
      {subtitle && (
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
