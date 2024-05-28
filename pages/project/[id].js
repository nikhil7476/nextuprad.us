import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const SingleProject = () => {
  const router = useRouter();
  const [slug, setslug] = useState("");

  useEffect(() => {}, [router.isReady]);
  return <></>;
};

export default SingleProject;
