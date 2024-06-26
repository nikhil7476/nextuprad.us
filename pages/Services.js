const Services = () => {
    return (  <>

<main id="sect">
          <div className="sect1">
          <h1 className="serviceheadeing">We help <span>great minds</span> to explore their way</h1>
            <div className="overlay" />
          </div>
        </main>

    <div className="container my-5">
        <div className="row">

        <div className="sec-1-1-2 col-6 services-projects"> <h3>Your projects deserve the best!</h3>
<p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
<ul className="projectliste">
<li>Praesentium voluptatum classical</li>
<li>Hampden-sydney college in virginia,</li>
<li>Finibus bonorum et malorum</li>
</ul>
</div>
        <div className="col-6 serviceprojectsimg"><img src="/services-right.jpg" alt="" /></div>

        </div>
        
    {/* <div className="services-bigimages">
  <img
    className="tab-image-full-width"
    src="/services-big.webp"
    style={{
      willChange: "transform",
      transform:
        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
      transformStyle: "preserve-3d"
    }}
  />
</div> */}
</div>
<div className="datascroll">    
    <marquee
  behavior="scroll"
  direction="left"
  onmouseover="this.stop();"
  onmouseout="this.start();"
>
  Web development&nbsp;&nbsp;&nbsp;&nbsp;Brand design&nbsp;&nbsp;&nbsp;&nbsp;Busniess growth&nbsp;&nbsp;&nbsp;&nbsp;Mobile app design&nbsp;&nbsp;&nbsp;&nbsp;Website development&nbsp;&nbsp;&nbsp;&nbsp;Video production&nbsp;&nbsp;&nbsp;&nbsp;Digital marketing
</marquee>
</div>
<h2 className="servicesubheadeing">You won’t be disappointed with<span>Service</span></h2>
<ul className="serviceslisted">
    <li><a href="/hire-dedicated-developer/">  <img src="/services.jpg" alt="" /><span>Hire Dedicated Developer</span></a></li>
    <li><a href="/website-design-development-services/">  <img src="/services1.jpg" alt="" /><span>Website Development</span></a></li>
    <li><a href="/software-development-services">  <img src="/services2.jpg" alt="" /><span>Software Development</span></a></li>
    <li><a href="/mobile-app-development-services">  <img src="/services3.jpg" alt="" /><span>Mobile App Development</span></a></li>
    <li><a href="/digital-marketing-services">  <img src="/services4.jpg" alt="" /><span>Digital Marketing</span></a></li>

</ul>


    
    
    </> );
}
 
export default Services;