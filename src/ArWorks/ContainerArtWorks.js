import React, {useState} from 'react'
import ArtWorks from './ArtWorks';

import './ContainerArtWorks.css'

const ContainerArtWorks = ({ artworks }) => {

  const [valueSeries, SetValueSeries] = useState(0)

  const artWorksMapped = artworks.map((artwork) => (
    <ArtWorks
      key={artwork.id}
      title={artwork.title}
      eds={artwork.eds}
      artist={artwork.artist}
      artistLink={artwork.artistLink}
      img={artwork.img}
      url={artwork.url}
      serie={artwork.serie}
      id={artwork.id}
    />
  ));

  const filteredArtWorks = () => {
    return artWorksMapped.filter(ele => ele.props.serie === 1)
  }


    
  return (
        <>
          <div className='background-true'>
          <div className="artowrk-container">
          {filteredArtWorks()}
          </div >
          <div className='default-container'>


          </div>
          </div>
        </>
      )
}

export default ContainerArtWorks