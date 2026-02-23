interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
}

export default function FeatureCard({
  number,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="border-l-2 border-colibri-gold py-2 pl-6">
      <p className="text-xs font-medium tracking-widest text-colibri-gold">
        {number}
      </p>
      <h3 className="mt-2 font-serif text-xl font-bold text-colibri-text">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-colibri-muted">
        {description}
      </p>
    </div>
  );
}
