import Link from "next/link";
import { ReactNode } from "react";

type CardProps = {
  href?: string;
  children: ReactNode;
  className?: string;
};

export default function Card({ href, children, className = "" }: CardProps) {
  const base = `border border-black p-4 ${className}`;

  if (href) {
    return (
      <Link href={href} className={`block ${base} hover:bg-gray-50 transition-colors`}>
        {children}
      </Link>
    );
  }

  return <div className={base}>{children}</div>;
}
