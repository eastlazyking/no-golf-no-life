type TagProps = {
  label: string;
  variant?: "default" | "accent";
};

export default function Tag({ label, variant = "default" }: TagProps) {
  return (
    <span
      className={`inline-block text-xs font-medium px-2 py-0.5 border ${
        variant === "accent"
          ? "border-accent text-accent"
          : "border-black text-black"
      }`}
    >
      {label}
    </span>
  );
}
