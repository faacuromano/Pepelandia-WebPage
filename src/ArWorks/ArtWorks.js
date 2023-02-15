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
    <div classname ="card"> 
        
        <Card color="light"  >
        <a className="token-preview">
        <div className='asd'>
            <div className='holder'>
                <img className='imagen' src={img}></img>
            </div>
        </div>
        </a>
        

        <CardBody className='cardBody' > 

            <CardTitle className='cardTitle' tag="h5">Title: {title}</CardTitle>

            
            <CardTitle className="cardTitle" tag="h5"> Artist:
              <a className="cardTitle" tag="h5" href={artistLink}> {artist} </a>
            </CardTitle>

            <CardTitle className="cardTitle" tag="h5">Eds: {eds}</CardTitle>

            <CardTitle className="cardTitle" tag="h5"> URL:
              <a className="cardTitle" tag="h5" href={url}> {url} </a>
            </CardTitle>



        </CardBody>

        </Card>
    </div>
    </div>
    </div>
  )
}

export default ArtWorks