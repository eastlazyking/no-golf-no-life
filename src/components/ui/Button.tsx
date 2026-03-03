import Link from "next/link";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
};

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-block font-bold text-sm px-6 py-3 transition-colors cursor-pointer";
  const styles = {
    primary: "bg-black text-white hover:bg-gray-800",
    outline: "border border-black text-black hover:bg-black hover:text-white",
  };

  const cls = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
