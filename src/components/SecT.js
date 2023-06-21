import React from 'react';
import Slider from './Slider';
import Card from './Card';

function SecT() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <Slider />
        </div>
        <div className="col-lg-4">
          <Card />
          <hr style={{ border: '1px solid rgba(255, 255, 255, 0.1)' }} />
          <Card />
          <hr style={{ border: '1px solid rgba(255, 255, 255, 0.1)' }} />
          <Card />
          <hr style={{ border: '1px solid rgba(255, 255, 255, 0.1)' }} />
          <Card />
          <hr style={{ border: '1px solid rgba(255, 255, 255, 0.1)' }} />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default SecT;
