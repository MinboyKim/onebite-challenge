import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const { q } = router.query;
  return <h2>검색결과 : {q}</h2>;
};

export default Page;
