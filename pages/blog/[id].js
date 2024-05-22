import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axiosInstance from "@/axios/axios";
import { Container, Row, Col, Image } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const SingleBlog = () => {
  const [blog, setblogs] = useState({});
  const [id, setid] = useState(false);
  const router = useRouter();
  const { isReady } = useRouter();

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
  }, [isReady]);

  async function getBlogs() {
    try {
      const res = await axiosInstance.get(`/getBlog/${id}`);
      console.log("==>", res);
      if (res.status == 200) {
        console.log("==>", res);

        setTimeout(() => {
          setblogs(res.data.data);
        }, 1500);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    // <>
    //   {Object.keys(blog).length ? (
    //     <Container className="my-5">
    //       <Row>
    //         <Col>
    //           <h1 className="display-4">{blog.title}</h1>
    //           <p className="text-muted">
    //             {blog.author} | {new Date(blog.created_at).toLocaleDateString()}
    //           </p>
    //         </Col>
    //       </Row>
    //       <Row className="my-4">
    //         <Col md={8}>
    //           <Image
    //             src={
    //               `https://53c50cd527.nxcli.io/calculator/public/next_resources/` +
    //               blog.banner_image
    //             }
    //             fluid
    //             className="mb-4 w-25"
    //           />
    //           <p>{blog.description}</p>
    //           {/* Render comments or other content */}
    //           {/* <p>{blog.comments}</p> */}
    //         </Col>
    //         <Col md={4}>
    //           <div className="p-4 bg-light">
    //             <h4>About the Author</h4>
    //             <p>{blog.author}</p>
    //           </div>
    //         </Col>
    //       </Row>
    //     </Container>
    //   ) : null}
    // </>
    <>
      <>
        {Object.keys(blog).length ? (
          <Container className="">
            <Row className="justify-content-center">
              <Col md={10} lg={8}>
                <div className=" bg-white shadow-sm rounded">
                  <h1 className="display-4 text-center">{blog.title}</h1>
                  <p className="text-muted text-center">
                    {blog.author} |{" "}
                    {new Date(blog.created_at).toLocaleDateString()}
                  </p>
                  <Image
                    src={
                      `https://53c50cd527.nxcli.io/calculator/public/next_resources/` +
                      blog.banner_image
                    }
                    fluid
                    className="mb-4 w-100 rounded"
                  />
                  <p>{blog.description}</p>
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
      </>
    </>
  );
};

export default SingleBlog;
