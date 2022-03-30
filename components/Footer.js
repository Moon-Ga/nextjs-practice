import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  return (
    <footer>
      <Link href="/">
        <a className={router.pathname === "/" ? "text-xl" : ""}>Movie</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? "text-xl" : ""}>TV</a>
      </Link>
    </footer>
  );
};

export default Footer;
