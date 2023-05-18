import { useRouter } from "next/router";

export default function detile() {
  const router = useRouter();
  console.log(router);

  return <div>ProductList{router.query.id}</div>;
}
