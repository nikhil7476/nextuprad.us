import Layout from "@/components/adminLayout/Layout";
import Head from "next/head";
const Home = () => {
  return (
    <>
    <Head>
    <meta name="googlebot" content="noindex" />
    </Head>
      <Layout>
        <div className="adminMain">admin home</div>
      </Layout>
    </>
  );
};

export default Home;
