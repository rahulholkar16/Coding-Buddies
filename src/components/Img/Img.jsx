import React from 'react';

const Img = ({ src, alt, className }) => {
  return (
    <div className={`image-wrapper ${className}`}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Img;
