const Cards = () => {
  return (
    <section>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <div className="flexContainer">
        <div className="cardContainer">
          <div
            className="perspective-card"
            data-decorator="PerspectiveCard"
            data-ambient=""
          >
            <div className="perspective-card__transformer">
              <div className="perspective-card__artwork perspective-card__artwork--front">
                <img src="/t1.png" />
              </div>
              <div className="perspective-card__artwork perspective-card__artwork--rear">
                {/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/982762/pokemon_card_backside_in_high_resolution_by_atomicmonkeytcg_dah43cy-fullview.png" /> */}
              </div>
              <div className="perspective-card__shine" />
            </div>
          </div>
        </div>
        <div className="cardContainer">
          <div
            className="perspective-card"
            data-decorator="PerspectiveCard"
            data-ambient=""
          >
            <div className="perspective-card__transformer">
              <div className="perspective-card__artwork perspective-card__artwork--front">
                <img src="/t2.png" />

                {/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/982762/9b1b5b5-1.png" /> */}
              </div>
              <div className="perspective-card__artwork perspective-card__artwork--rear">
                {/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/982762/pokemon_card_backside_in_high_resolution_by_atomicmonkeytcg_dah43cy-fullview.png" /> */}
              </div>
              <div className="perspective-card__shine" />
            </div>
          </div>
        </div>
        <div className="cardContainer">
          <div
            className="perspective-card"
            data-decorator="PerspectiveCard"
            data-ambient=""
          >
            <div className="perspective-card__transformer">
              <div className="perspective-card__artwork perspective-card__artwork--front">
                <img src="/t3.png" />
                {/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/982762/9b1b5b5-1.png" /> */}
              </div>
              <div className="perspective-card__artwork perspective-card__artwork--rear">
                {/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/982762/pokemon_card_backside_in_high_resolution_by_atomicmonkeytcg_dah43cy-fullview.png" /> */}
              </div>
              <div className="perspective-card__shine" />
            </div>
          </div>
        </div>
      </div>
      <p></p>
      <p></p>
      <p></p>
    </section>
  );
};

export default Cards;
