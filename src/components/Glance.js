import React from 'react';
import BackgroundImage from '../img/img1bck.svg';
import Inforimg from '../img/informaticscover.svg';

function Glance() {
  const containerStyle = {
    display: 'flex',
    paddingTop: '128px',
    justifyContent: 'space-between',
    background: `url(${BackgroundImage}) no-repeat center/cover`,
  };

  const columnStyle = {
    flex: 1,
  };
  const columnStyle2 = {
    flex: 1,
    borderRight: '1px dotted rgba(0, 0, 0, 0.2)',
  };

  const imgStyle = {
    marginLeft:'128px',
    marginBottom:'128px'
  };

  const headingStyle = {
    color: '#FFF',
    fontSize: '38px',
    fontFamily: 'Gordita',
    fontWeight: 700,
    letterSpacing: '-1px',
  };

  const subheadingStyle = {
    color: '#FFF',
    fontSize: '18px',
    fontFamily: 'Gordita',
    fontWeight: 500,
  };

  const hrStyle = {
    height: '3px',
    backgroundColor: 'rgba(255, 133, 20, 1)',
    width: '50%',
  };

  const paragraphStyle = {
    color: '#FFF',
    fontSize: '16px',
    fontFamily: 'Gordita',
    lineHeight: '25px',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
  };
  

  const buttonStyle = {
    width: '168px',
    height: '54px',
    paddingRight: '30px',
    position: 'relative',
    marginTop: '89px',
  };
  
  
  const arrowStyle = {
    position: 'absolute',
    top: '50%',
    right: '20px',
    transform: 'translateY(-50%)',
  };
  return (
    <div style={containerStyle}>
      <div className='container' style={columnStyle}>
        <img src={Inforimg} alt="Column 1" style={imgStyle} />
      </div>
      <div className='container' style={columnStyle2}>
        <h3 style={headingStyle}>Informatics</h3>
        <div>
        <h5 style={subheadingStyle}>April 2023</h5>
        <hr style={hrStyle} />
        </div>
        <p style={paragraphStyle}>India’s entrepreneurial landscape has experienced remarkable growth in recent years, with young entrepreneurs leading the way by developing innovative solutions across various sectors. </p>
        <div className='container'>
        <button type="button" className="btn btn-light me-2" style={buttonStyle}>
          View Flipbook
          <i className="fas fa-arrow-right-long" style={arrowStyle}></i>
        </button>
        <button type="button" className="btn btn-light me-2" style={buttonStyle}>
          Download PDF
          <i className="fas fa-arrow-right-long" style={arrowStyle}></i>
        </button>
      </div>
      </div>
      <div className='container' style={columnStyle}>
        
        <h3 style={headingStyle}>
            Issue at Glance
            <hr style={hrStyle}/>
        </h3>
      </div>
    </div>
  );
}

export default Glance;
