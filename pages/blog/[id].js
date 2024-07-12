import { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import React from "react";
import { useRouter } from "next/router";
import axiosInstance from "@/axios/axios";
import { Container, Row, Col, Image } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "../../styles/blog.module.css";
import Head from "next/head";
import Link from "next/link";
import { formatDate } from "@/utils/helper";
const SingleBlog = () => {
  const [blog, setblogs] = useState({});
  const [sidebarBlog, setsidebarBlog] = useState([]);

  const [id, setid] = useState(false);
  const router = useRouter();
  const { isReady } = useRouter();

  useEffect(() => {
    getSidebarBlogs();
  }, []);

  useEffect(() => {
    if (id) {
      getBlogs();
    }
  }, [id]);

  useEffect(() => {
    console.log("===>", router);
    if (router.query.id) {
      setid(router.query.id);
    }
  }, [router.query.id]);

  const BlogContent = (content) => {
    console.log("content", content);
    const sanitizedContent = DOMPurify.sanitize(content);

    return <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />;
  };

  async function getBlogs() {
    try {
      const res = await axiosInstance.get(`/getBlogBySlug/${id}`);
      console.log("==>", res);
      if (res.status == 200) {
        console.log("==>", res);

        setTimeout(() => {
          setblogs(res.data.data[0]);
        }, 1500);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function getSidebarBlogs() {
    try {
      const res = await axiosInstance.get("/getBlog");
      console.log("==>", res);
      if (res.status == 200) {
        setTimeout(() => {
          setsidebarBlog(res.data.data);
          console.log("==>", res.data.data);
        }, 1500);
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      {/* <>
        <Head>
          <title>Blog - NextUpgrad USA</title>
          <meta name="title" content="Nextupgrad" />
          <meta
            name="description"
            content="Dive into our blog for expert and valuable insights into Web and Software. It offers knowledge to fuel your curiosity and online business growth."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://nextupgrad.us/" />
          <meta property="og:title" content="Nextupgrad" />
          <meta
            property="og:description"
            content="Dive into our blog for expert and valuable insights into Web and Software. It offers knowledge to fuel your curiosity and online business growth."
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
            content="Dive into our blog for expert and valuable insights into Web and Software. It offers knowledge to fuel your curiosity and online business growth."
          />
          <meta
            property="twitter:image"
            content="https://nextupgrad.us/logo-2orange-1.png"
          />
        </Head>
        <div className={`blogBanner banner2 ${styles.singlePost}`}>
          <div className="container bannerContainer">
            <div className="newBannerMain">
              <div data-aos="fade-left">
                <h1 className="display-3 text-light position-relative z-3 text-capitalize">
                  {id ? id?.replace(/-/g, " ") : null}
                </h1>
              </div>
              
            </div>
          </div>
        </div>
        {Object.keys(blog).length ? (
          <Container className="my-5">
            <Row className="justify-content-center">
              <Col md={10} lg={8}>
                <div className=" bg-white shadow-sm rounded">
                  <h1 className="display-4 text-center">{blog.title}</h1>
                  <p className="text-muted text-center my-4">
                    {blog.author} |{" "}
                    {new Date(blog.created_at).toLocaleDateString()}
                  </p>
                  <Image
                    src={process.env.NEXT_PUBLIC_IMAGE_URL + blog.banner_image}
                    fluid
                    className="mb-4 w-100 rounded"
                  />

                  <div className="p-3">{BlogContent(blog.description)}</div>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center my-4">
              <Col md={10} lg={8}>
                <div className="p-4 bg-light rounded shadow-sm">
                  <h4>About the Author</h4>
                  <p>{blog.author}</p>
                </div>
              </Col>
            </Row>
          </Container>
        ) : (
          <SkeletonTheme
            color="var(--skeleton-color)"
            highlightColor="var(--skeleton-highlight-color)"
          >
            <Container className="">
              <Row className="justify-content-center">
                <Col md={10} lg={8}>
                  <div className="p-4 bg-white shadow-sm rounded">
                    <h1 className="display-4 text-center">
                      <Skeleton width={`60%`} />
                    </h1>
                    <p className="text-muted text-center">
                      <Skeleton width={`40%`} />
                    </p>
                    <Skeleton height={300} className="mb-4 w-100 rounded" />
                    <p>
                      <Skeleton count={5} />
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-center my-4">
                <Col md={10} lg={8}>
                  <div className="p-4 bg-light rounded shadow-sm">
                    <h4>
                      <Skeleton width={`40%`} />
                    </h4>
                    <p>
                      <Skeleton width={`60%`} />
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </SkeletonTheme>
        )}
      </> */}
      <>
        <Head>
          <title>Blog - NextUpgrad USA</title>
          <meta name="title" content="Nextupgrad" />
          <meta
            name="description"
            content="Dive into our blog for expert and valuable insights into Web and Software. It offers knowledge to fuel your curiosity and online business growth."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://nextupgrad.us/" />
          <meta property="og:title" content="Nextupgrad" />
          <meta
            property="og:description"
            content="Dive into our blog for expert and valuable insights into Web and Software. It offers knowledge to fuel your curiosity and online business growth."
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
            content="Dive into our blog for expert and valuable insights into Web and Software. It offers knowledge to fuel your curiosity and online business growth."
          />
          <meta
            property="twitter:image"
            content="https://nextupgrad.us/logo-2orange-1.png"
          />
          <meta
            property="Blog for NextUpgrad USA"
            content="Get into our blog for expert and valuable insights into Web and Software. It offers knowledge to fuel your curiosity and online business growth"
          />
        </Head>
        <div className={`blogBanner banner2 ${styles.singlePost}`}>
          <div className="container bannerContainer">
            <div className="newBannerMain">
              <div data-aos="fade-left">
                <h1 className="display-3 text-light position-relative z-3 text-capitalize">
                  {id ? id?.replace(/-/g, " ") : null}
                </h1>
              </div>
            </div>
          </div>
        </div>
        {Object.keys(blog).length ? (
          <Container className="my-5">
            <Row className="justify-content-center">
              <Col md={3} className="d-none d-md-block">
                <div className="sticky-sidebar">
                  <h4>Recent Blogs</h4>
                  <ul className="sidebarSingleBlog">
                    {sidebarBlog.length
                      ? sidebarBlog.map((item, index) => (
                        <li className="mt-2" key={index}>
                          <Link href={`/blog/${item.slug}`}>
                            {item.title}
                          </Link>
                        </li>
                      ))
                      : null}
                  </ul>
                </div>
              </Col>
              <Col md={9} lg={8}>
                <div className="bg-white shadow-sm rounded ">
                  <h1 className="display-4 text-center">{blog.title}</h1>
                  <p className="text-muted text-center my-4">
                    {blog.author} |{" "}
                    {formatDate(new Date(blog.created_at).toLocaleDateString())}
                  </p>
                  <Image
                    src={process.env.NEXT_PUBLIC_IMAGE_URL + blog.banner_image}
                    fluid
                    className="mb-4 w-100 rounded"
                  />
                  <div className="p-3 BlogLists">{BlogContent(blog.description)}</div>
                </div>
              </Col>
            </Row>
            {/* <Row className="justify-content-center my-4">
              <Col md={10} lg={8}>
                <div className="p-4 bg-light rounded shadow-sm">
                  <h4>Author Of The Blog</h4>
                  <p>{blog.author}</p>
                </div>
              </Col>
            </Row> */}
          </Container>
        ) : (
          <SkeletonTheme
            color="var(--skeleton-color)"
            highlightColor="var(--skeleton-highlight-color)"
          >
            <Container className="mt-4">
              <Row className="justify-content-center">
                <Col md={3} className="d-none d-md-block">
                  <div className="sticky-sidebar">
                    <Skeleton count={5} />
                  </div>
                </Col>
                <Col md={9} lg={8}>
                  <div className="p-4 bg-white shadow-sm rounded">
                    <h1 className="display-4 text-center">
                      <Skeleton width={`60%`} />
                    </h1>
                    <p className="text-muted text-center">
                      <Skeleton width={`40%`} />
                    </p>
                    <Skeleton height={300} className="mb-4 w-100 rounded" />
                    <p>
                      <Skeleton count={5} />
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-center my-4">
                <Col md={10} lg={8}>
                  <div className="p-4 bg-light rounded shadow-sm">
                    <h4>
                      <Skeleton width={`40%`} />
                    </h4>
                    <p>
                      <Skeleton width={`60%`} />
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </SkeletonTheme>
        )}
      </>

      <style jsx>{`
        .sticky-sidebar {
          position: -webkit-sticky; /* For Safari */
          position: sticky;
          top: 140px;
        }
      `}</style>
    </>
  );
};

export default SingleBlog;
