import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav className="w-full h-[68px] flex items-center justify-center bg-red-100 text-4xl">
      <Link href="/">
        <a className={router.pathname === "/" ? "mr-10" : "mr-10"}>Movie</a>
      </Link>
      <Link href="/tv">
        <a className={router.pathname === "/tv" ? "ml-10" : "ml-10"}>TV</a>
      </Link>
    </nav>
  );
}
