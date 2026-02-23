interface TagProps {
  label: string;
}

export default function Tag({ label }: TagProps) {
  return (
    <span className="inline-block border border-colibri-border px-3 py-1 text-[11px] tracking-wide text-colibri-muted">
      {label}
    </span>
  );
}
