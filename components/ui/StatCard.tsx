interface StatCardProps {
  value: string;
  caption: string;
}

export default function StatCard({ value, caption }: StatCardProps) {
  return (
    <div className="border-t border-colibri-gold pt-6">
      <p className="font-serif text-4xl font-bold text-colibri-gold lg:text-5xl">
        {value}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-colibri-muted">
        {caption}
      </p>
    </div>
  );
}
