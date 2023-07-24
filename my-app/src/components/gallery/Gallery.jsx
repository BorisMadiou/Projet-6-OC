import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../card/Card';
import jsonData from '../../assets/logements/logements.json';
import './gallery.css'

function Gallery() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  return (
    <div className='gallery'>
      {data.map(item => (
        <Link key={item.id} to={`/lodging/${item.id}`}>
          <Card title={item.title} cover={item.cover} />
        </Link>
      ))}
    </div>
  );
}

export default Gallery;