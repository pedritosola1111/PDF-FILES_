interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative h-64 md:h-80 overflow-hidden">
      {backgroundImage ? (
        <img
          src={backgroundImage}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-institutional" />
      )}
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative h-full container-institutional flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-cream text-shadow animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-cream/90 max-w-2xl animate-fade-in-up">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
