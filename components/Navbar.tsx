import broadcasts from "@/utils/broadcasts";
import Link from "next/link";

interface NavBarProps {
  currentSlug: string;
}

function NavBar({ currentSlug }: NavBarProps) {
  return (
    <nav className="navbar">
      {broadcasts.map((broadcast) => (
        <Link
          href={broadcast.slug}
          key={broadcast.slug}
          className={`navbar__link ${
            currentSlug === broadcast.slug ? "navbar__link--active" : ""
          }`}
        >
          {broadcast.title}
        </Link>
      ))}
    </nav>
  );
}

export default NavBar;
