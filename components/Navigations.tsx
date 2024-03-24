"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigations.module.css";

export default function Navigations() {
  const pathname = usePathname();
  const route = [
    { href: "/", name: "Home", active: pathname === "/" },
    { href: "/about-us", name: "About", active: pathname === "/about-us" },
  ];

  return (
    <nav className={styles.nav}>
      <ul>
        {route.map((item) => (
          <li key={item.href}>
            <Link key={item.name} href={item.href}>
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
