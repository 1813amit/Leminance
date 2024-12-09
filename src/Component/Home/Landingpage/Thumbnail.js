import React from 'react';

const Thumbnail = ({ images, onClick }) => {
  return (
    <div className="thumbnail">
      {images.map((img, index) => (
        <div className="item" key={index} onClick={() => onClick(index)}>
          <img src={img} alt={`Thumbnail ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Thumbnail;
