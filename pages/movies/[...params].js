import { useRouter } from "next/router";

export default function MovieDetail() {
  const router = useRouter();
  console.log(router.query);
  const [title, id] = router.query.params || [];
  return (
    <div>
      <h4>{title}</h4>
    </div>
  );
}
