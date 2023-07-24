import React from 'react';

const Tags = ({ words }) => {
  return (
    <div className="tags">
      {words.map((word, index) => (
        <span key={index} className="tag">
          {word}
        </span>
      ))}
    </div>
  );
};

export default Tags;
