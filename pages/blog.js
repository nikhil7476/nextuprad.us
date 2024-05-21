import Link from "next/link";
import Head from "next/head";
import axiosInstance from "@/axios/axios";
import { useEffect, useState } from "react";
import { formatDate } from "@/utils/helper";
const Blog = () => {
  const [blogs, setblogs] = useState([]);
  useEffect(() => {
    getBlogs();
  }, []);

  async function getBlogs() {
    try {
      const res = await axiosInstance.get("/getBlog");
      console.log("==>", res);
      if (res.status == 200) {
        setblogs(res.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <Head>
        <title>Nextupgrad</title>
        <meta name="title" content="Nextupgrad" />
        <meta
          name="description"
          content="At NextUpgrad, our mission is to empower businesses and individuals by delivering cutting-edge software, website , and mobile app development solutions, coupled with innovative digital marketing strategies. We are committed to leveraging technology to enhance our clients' online presence, streamline their operations, and drive sustainable growth"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nextupgrad.us/" />
        <meta property="og:title" content="Nextupgrad" />
        <meta
          property="og:description"
          content="At NextUpgrad, our mission is to empower businesses and individuals by delivering cutting-edge software, website , and mobile app development solutions, coupled with innovative digital marketing strategies. We are committed to leveraging technology to enhance our clients' online presence, streamline their operations, and drive sustainable growth"
        />
        <meta
          property="og:image"
          content="https://nextupgrad.us/logo-2orange-1.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nextupgrad.us/" />
        <meta property="twitter:title" content="Nextupgrad" />
        <meta
          property="twitter:description"
          content="At NextUpgrad, our mission is to empower businesses and individuals by delivering cutting-edge software, website , and mobile app development solutions, coupled with innovative digital marketing strategies. We are committed to leveraging technology to enhance our clients' online presence, streamline their operations, and drive sustainable growth"
        />
        <meta
          property="twitter:image"
          content="https://nextupgrad.us/logo-2orange-1.png"
        />
      </Head>
      <div className="blogMain">
        <div className="sec">
          <div className="blog-cat">
            <div className="container">
              <ul>
                <li>
                  <Link href="#">Website Developement</Link>
                </li>
                <li>
                  <Link href="#">Software Developement</Link>
                </li>
                <li>
                  <Link href="#">Mobile App Developement</Link>
                </li>
                <li>
                  <Link href="#">Digital Marketing</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="container">
            <div className="sec-hd g-5">
              <h1>BLOG</h1>
            </div>
            <div className="row">
              <div className="col-md-8">
                {blogs.length
                  ? blogs.map((item, index) => (
                      <div key={index} className="blog">
                        <div className="blog-img">
                          <Link href={`/blog/${item.id}`}>
                            <img
                              src={`https://53c50cd527.nxcli.io/calculator/public/next_resources/${item.banner_image}`}
                              alt="Branding and Digital Marketing Strategies for Small
                          Businesses."
                            />
                          </Link>
                          <h2>
                            <Link href={`/blog/${item.id}`}>{item.title}</Link>
                            <div>
                              <p>{item.author}</p>
                              <p>{formatDate(item.updated_at)}</p>
                            </div>
                          </h2>
                          <div className="bttn">
                            <Link href={`/blog/${item.id}`}>Learn More</Link>
                          </div>
                        </div>
                      </div>
                    ))
                  : null}
              </div>
              <div className="col-md-4 blog-search">
                <h2>Search Articles</h2>
                <form>
                  <input type="text" placeholder="Search..." />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
