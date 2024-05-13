import styles from ".././styles/podcast.module.css";
const Podcast = () => {
  return (
    <>
      <section className={styles.banner}>
        <div className={styles.topHeading}>
          <img src="/logo-2orange-1.png" alt="" />
          <p>PODCAST NETWORK</p>
        </div>
      </section>
      <div className="container main">podcast page</div>
    </>
  );
};

export default Podcast;
