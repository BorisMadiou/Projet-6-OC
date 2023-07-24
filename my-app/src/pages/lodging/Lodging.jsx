import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import jsonData from '../../assets/logements/logements.json';
import Carousel from '../../components/carousel/Carousel';
import Tags from '../../components/tags/Tags';
import Rating from '../../components/rating/Rating';
import Accordion from '../../components/accordion/Accordion';


function Lodging() {
  const { id } = useParams();
  const [lodging, setLodging] = useState(null);

  useEffect(() => {
    // Recherche du logement correspondant à l'ID dans le fichier JSON
    const lodgingData = jsonData.find(item => item.id === id);
    setLodging(lodgingData);
  }, [id]);

  if (!lodging) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <div>
        <Carousel images={lodging.pictures} initialIndex={0} />
        <div className='lodgingTitle'>
            <h1>{lodging.title}</h1>
            <h3>{lodging.location}</h3>
        </div>
        <div className='host'>
            <h3>{lodging.host.name}</h3>
            <img src={lodging.host.picture} alt={lodging.host.name} />
        </div>
        <div className='tagsStar'>
            <Tags words={lodging.tags} />
            <Rating rating={lodging.rating}/>
        </div>
        <div className='lodgingAccordions'>
            <Accordion title="Description" content={lodging.description} />
            <Accordion title="Équipements" content={lodging.equipments} />
        </div>
    </div>
  );
}

export default Lodging;
