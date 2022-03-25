import { useRouter } from "next/router";

export default function MovieDetail() {
  const router = useRouter();
  console.log(router.query.id);
  return "hi";
}
