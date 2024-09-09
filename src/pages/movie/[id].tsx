import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const { id } = router.query;
  return <h2>{id} 영화 상세페이지</h2>;
};

export default Page;
