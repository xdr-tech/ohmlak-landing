"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ActiveLink({
  href,
  children,
  activeClassName,
  ...props
}) {
  const pathname = usePathname();

  const isActive = pathname === href; // Match the current path

  return (
    <Link
      href={href}
      {...props}
      className={`${props.className} ${isActive ? 'font-extrabold' : ""}`}
    >
      {children}
    </Link>
  );
}
