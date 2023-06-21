import React from 'react';

function Slider() {
  const h5Style = {
    fontFamily: 'Gordita',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '31.5328px',
    lineHeight: '35px',
    display: 'flex',
    alignItems: 'center',
    color: '#FFFFFF',
    marginTop:30,
  };

    const pStyle={
      fontFamily: 'Gordita',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '16.8175px',
      lineHeight: '25px',
      display: 'flex',
      alignItems: 'center',
      color: '#FFFFFF',
      opacity: 0.6,
    }

  return (
    <div className="container mt-3">
      {/* <!-- Carousel wrapper --> */}
      <div id="carouselMaterialStyle" className="carousel slide carousel-fade" data-mdb-ride="carousel">
        {/* <!-- Indicators --> */}
        {/* <div className="carousel-indicators">
          <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="0" className="active" aria-current="true"
            aria-label="Slide 1"></button>
          <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="2" aria-label="Slide 3"></button>
        </div> */}

        {/* <!-- Inner --> */}
        <div className="carousel-inner rounded-5 shadow-4-strong">
          {/* <!-- Single item --> */}
          <div className="carousel-item active">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp" className="d-block w-100"
              alt="Sunset Over the City" />
            <div className="carousel-description d-none d-md-block">
              <h5 style={h5Style}>First 'Digital ITI' launched by Assam Minister</h5>
              <p style={pStyle}>The Affiliation and Physical Verification module of the Digital ITI Application which envisages computerization of all process of the Industrial Training Institutes of Assam was launched today by the Assam Skill, Employment and Entrepreneurship minister Shri Jayanta Malla Baruah in Guwahati.</p>
            </div>
          </div>

          {/* <!-- Single item --> */}
          <div className="carousel-item">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" className="d-block w-100"
              alt="Canyon at Nigh" />
            <div className="carousel-description d-none d-md-block">
              <h5 style={h5Style}>Second 'Digital ITI' launched by Assam Minister</h5>
              <p style={pStyle}>The Affiliation and Physical Verification module of the Digital ITI Application which envisages computerization of all process of the Industrial Training Institutes of Assam was launched today by the Assam Skill, Employment and Entrepreneurship minister Shri Jayanta Malla Baruah in Guwahati.</p>
            </div>
          </div>

          {/* <!-- Single item --> */}
          <div className="carousel-item">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp" className="d-block w-100"
              alt="Cliff Above a Stormy Sea" />
            <div className="carousel-description d-none d-md-block">
              <h5 style={h5Style}>Third 'Digital ITI' launched by Assam Minister</h5>
              <p style={pStyle}>The Affiliation and Physical Verification module of the Digital ITI Application which envisages computerization of all process of the Industrial Training Institutes of Assam was launched today by the Assam Skill, Employment and Entrepreneurship minister Shri Jayanta Malla Baruah in Guwahati.</p>
            </div>
          </div>
        </div>
        {/* <!-- Inner -->

        <!-- Controls --> */}
        <button className="carousel-control-prev" type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* <!-- Carousel wrapper --> */}
    </div>
  );
}

export default Slider;
