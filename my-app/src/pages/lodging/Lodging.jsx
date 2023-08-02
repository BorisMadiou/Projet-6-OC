import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import jsonData from '../../assets/logements/logements.json';
import Carousel from '../../components/carousel/Carousel';
import Tags from '../../components/tags/Tags';
import Rating from '../../components/rating/Rating';
import Accordion from '../../components/accordion/Accordion';
import './lodging.css'

function Lodging() {
  const { id } = useParams();
  const [lodging, setLodging] = useState(null);

  useEffect(() => {
    const lodgingData = jsonData.find(item => item.id === id);
    setLodging(lodgingData);
  }, [id]);

  if (lodging === null) {
    return <div>Chargement en cours...</div>;
  }

  if (!lodging) {
    return <Navigate to="/*" />;
  }

  return (
    <div>
        <Carousel images={lodging.pictures} initialIndex={0} />
        <div className='title-host'>
            <div className='lodging-title'>
                <h1>{lodging.title}</h1>
                <h3>{lodging.location}</h3>
            </div>
            <div className='host'>
            <h3>
                {lodging.host.name.split(' ')[0]} <br />
                {lodging.host.name.split(' ')[1]}
            </h3>
                <img src={lodging.host.picture} alt={lodging.host.name} />
            </div>
        </div>
        <div className='tags-star'>
            <Tags words={lodging.tags} />
            <Rating rating={lodging.rating}/>
        </div>
        <div className='lodging-accordions'>
            <Accordion title="Description" content={lodging.description} />
            <Accordion title="Équipements" content={lodging.equipments} />
        </div>
    </div>
  );
}

export default Lodging;
