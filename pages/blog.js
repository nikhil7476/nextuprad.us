import Link from "next/link";
import Head from "next/head";
import axiosInstance from "@/axios/axios";
import { useEffect, useState } from "react";
import { formatDate } from "@/utils/helper";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../styles/blog.module.css";
import { Container, Row, Col } from "react-bootstrap";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogsBackup, setBlogsBackup] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getBlogs();
  }, []);

  useEffect(() => {
    if (searchQuery === "") {
      setBlogs(blogsBackup);
    } else {
      const filteredBlogs = blogsBackup.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setBlogs(filteredBlogs);
    }
  }, [searchQuery, blogsBackup]);

  const getBlogs = async () => {
    try {
      const res = await axiosInstance.get("/getBlog");
      if (res.status === 200) {
        setTimeout(() => {
          const sortedBlogs = res.data.data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
          setBlogs(sortedBlogs);
          setBlogsBackup(sortedBlogs);
        }, 1500);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Head>
        <title>Blog for NextUpgrad USA</title>
        <meta name="title" content="Nextupgrad" />
        <meta
          name="description"
          content="Get into our blog for expert and valuable insights into Web and Software. It offers knowledge to fuel your curiosity and online business growth."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nextupgrad.us/" />
        <meta property="og:title" content="Nextupgrad" />
        <meta
          property="og:description"
          content="Get into our blog for expert and valuable insights into Web and Software. It offers knowledge to fuel your curiosity and online business growth."
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

      <div className="blogMain">
        <div className="blogBanner banner2">
          <div className="container bannerContainer">
            <div className="newBannerMain">
              <div data-aos="fade-down">
                <h1 className="display-3 text-light position-relative z-3 blog-hd">
                  Blog
                </h1>
              </div>
              <p>Discover Insights, Tips, and Stories – Your Go-To Blog Hub!</p>
            </div>
          </div>
        </div>

        <div className="sec">
          <div className="blog-cat">
            <div className="container">
              <ul>
                <li><Link href="#">Website Development</Link></li>
                <li><Link href="#">Software Development</Link></li>
                <li><Link href="#">Mobile App Development</Link></li>
                <li><Link href="#">Digital Marketing</Link></li>
              </ul>
            </div>
          </div>

          <div className="container">
            <div className="sec-hd g-5">
              {/* <h1>BLOG</h1> */}
            </div>

            <div className="row">
              <div className="col-md-8">
                {blogs.length ? (
                  blogs.map((item, index) => (
                    <div key={index} className="blog">
                      <div className="blog-img">
                        <Link href={`/blog/${item.slug}`} target="_blank">
                          <img
                            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item.banner_image}`}
                            alt={item.title}
                          />
                        </Link>
                        <h2>
                          <Link href={`/blog/${item.slug}`} target="_blank">
                            {item.title}
                          </Link>
                          <div>
                            <p>{item.author}</p>
                            <p>{formatDate(item.updated_at)}</p>
                          </div>
                        </h2>
                        <div className="bttn">
                          <Link href={`/blog/${item.slug}`} target="_blank">
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <SkeletonTheme
                    color="var(--skeleton-color)"
                    highlightColor="var(--skeleton-highlight-color)"
                  >
                    <div className="blog">
                      <div className="blog-img">
                        <Skeleton height={200} />
                        <h2>
                          <Skeleton height={30} width="80%" />
                          <div>
                            <p><Skeleton width="50%" /></p>
                            <p><Skeleton width="40%" /></p>
                          </div>
                        </h2>
                        <div className="bttn">
                          <Skeleton width={100} height={30} />
                        </div>
                      </div>
                    </div>
                  </SkeletonTheme>
                )}
              </div>

              <div className="col-md-4 blog-search">
                <h2>Search Articles</h2>
                <form>
                  <input
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </form>

                {blogs.length ? (
                  <Container className="my-5">
                    <Row className="justify-content-center">
                      <Col className="d-none d-md-block">
                        <div className="sticky-sidebar">
                          <h4>Recent Blogs</h4>
                          <ul className="sidebarSingleBlog">
                            {blogs.map((item, index) => (
                              <li className="mt-2" key={index}>
                                <Link href={`/blog/${item.slug}`} target="_blank">
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                ) : (
                  <SkeletonTheme
                    color="var(--skeleton-color)"
                    highlightColor="var(--skeleton-highlight-color)"
                  >
                    <Container className="mt-4">
                      <Row className="justify-content-center">
                        <Col className="d-none d-md-block">
                          <div className="sticky-sidebar">
                            <Skeleton count={5} />
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </SkeletonTheme>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
