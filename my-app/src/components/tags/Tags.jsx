import React from 'react';
import './tags.css';

const Tags = ({ words }) => {
  return (
    <div className="tags">
      {words.map((word, index) => {
        const tagStyle = {
          paddingLeft: word.length > 14 ? '0.75rem' : '0',
          paddingRight: word.length > 14 ? '0.75rem' : '0',
        };

        return (
          <span key={index} className="tag" style={tagStyle}>
            {word}
          </span>
        );
      })}
    </div>
  );
};

export default Tags;