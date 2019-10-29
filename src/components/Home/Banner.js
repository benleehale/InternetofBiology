import React from 'react';

const Banner = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
    <div className="banner">
      <div className="container">
        <h1 className="w3-gara" className ="w3-jumbo">
          {appName}
        </h1>
        <p>HEG Community Hub</p>
      </div>
    </div>
  );
};

export default Banner;
