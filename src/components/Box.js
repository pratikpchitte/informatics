import React from 'react';

function Box() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'rgba(16, 17, 18, 1)' }}>
        <div className="container-fluid">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/">Library</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <a href="/">Data</a>
              </li>
            </ol>
          </nav>
        </div>
      </nav>
    </div>
  );
}

export default Box;
