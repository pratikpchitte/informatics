import React from 'react';

function Card() {
    const numberStyle = {
        fontFamily: 'Playfair Display',
        color: 'white',
        fontWeight: 'regular',
        fontSize: '35px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      };

  const headlineStyle = {
    fontFamily: 'Gordita Bold',
    fontSize: '22px',
    color: 'white',
    wordWrap: 'break-word',
    whiteSpace: 'normal',
    overflowWrap: 'break-word',
  };

  const pStyle = {
    fontFamily: 'Roboto Regular',
    fontSize: '15px',
    color: 'rgba(209, 220, 231, 0.58)',
    marginTop: '8px',
  };
  

  const divStyle = {
    borderLeft: '1px solid #718195', // Adjust the border color as needed
    paddingLeft: '10px', // Adjust the padding as needed
    marginLeft: '16px', // Adjust the margin as needed

  };
  

  return (
    <div className="container m-3" style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={numberStyle}>
        1
      </div>
      <div style={divStyle}>
        <h5 style={headlineStyle}>'Digital ITI' launched by Assam Minister</h5>
        <p style={pStyle}>March 14, 2023</p>
      </div>
    </div>
  );
}

export default Card;
