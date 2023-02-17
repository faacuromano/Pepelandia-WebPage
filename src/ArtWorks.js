import React from 'react'
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
  } from 'reactstrap';


  import './ArtWorks.css'

const ArtWorks = ({title, subtitle, id, img}) => {
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

            <CardTitle className='cardTitle' tag="h5"> {title}</CardTitle>

            <CardSubtitle className="mb-2 text-muted" tag="h6"> "Artist name or tw"</CardSubtitle>

            <CardText> {id} </CardText>

        </CardBody>

        </Card>
    </div>
    </div>
    </div>
  )
}

export default ArtWorks