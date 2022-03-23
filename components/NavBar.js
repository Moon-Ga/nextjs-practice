import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>HOME</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? "active" : ""}>ABOUT</a>
      </Link>
      <style jsx global>
        {`
          .active {
            color: blue;
          }
        `}
      </style>
    </nav>
  );
}
