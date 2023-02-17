import React from 'react'
import {
    Card,
    CardBody,
    CardTitle,
  } from 'reactstrap';


  import './ArtWorks.css'

const ArtWorks = ({title, eds, url, img, artist, id, artistLink}) => {
  return (
    <div>
    <div id="artworks" className="container">
    <a classname ="card" href={url}> 
        
        <Card color="light"  >
        <a className="token-preview">
        <div className='asd'>
            <div className='holder'>
                <img className='imagen' src={img}></img>
            </div>
        </div>
        </a>
        

        <CardBody className='cardBody' > 

            <CardTitle className='cardTitle' tag="h5">{title}</CardTitle>

            
            <CardTitle className="cardTitle" tag="h5">
              <a className="cardTitle" tag="h5" href={artistLink}> {artist} </a>
            </CardTitle>

            <CardTitle className="cardTitle" tag="h5">22/{eds}</CardTitle>

        </CardBody>

        </Card>
    </a>
    </div>
    </div>
  )
}

export default ArtWorks