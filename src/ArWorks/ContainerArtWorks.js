import React, {useState} from 'react'
import ArtWorks from './ArtWorks';

import './ContainerArtWorks.css'

const ContainerArtWorks = ({ artworks, children }) => {

  const [currentPage, setcurrentPage] = useState(0)
  const [counter, setCounter] = useState(1)

  const nextPage = () => {
    setcurrentPage(currentPage + 4 )
    counterHandleMore()
  } 

  const backPage = () => {
    currentPage > 0 ? setcurrentPage(currentPage - 4 ) : alert('estas en la pagina 1')
    counterHandleLess()
  } 

  const counterHandleMore = () => {
    setCounter(counter+1)
  }
  const counterHandleLess = () => {
    setCounter(counter-1)
  }

    const artWorksMapped = artworks.map((artwork) => (
      <ArtWorks
        key={artwork.id}
        title={artwork.title}
        eds={artwork.eds}
        artist={artwork.artist}
        artistLink={artwork.artistLink}
        img={artwork.img}
        url={artwork.url}
        id={artwork.id}
      />
    ));

    const filteredArtWorks = () => {
      return artWorksMapped.slice(currentPage, currentPage + 4)
    }
    let maximo = Math.floor(artWorksMapped.length/4 + 2);
    console.log(maximo)
    console.log(typeof maximo)
  return (

    <>
          <div className='background-true'>
          <div className="artowrk-container">
          {filteredArtWorks()}
          </div >
          <div className='default-container'>

            <div className='buttonsContainer'>

            <button disabled = {currentPage === 0} 
                    onClick={backPage} 
                    className='buttonPag'
                    >
                    {String.fromCharCode(8592)}
            </button>

            <label className='counter-Pagination-Label'> {counter} </label>

            <button 
              onClick={nextPage} 
              className='buttonPag'
              disabled = {currentPage >= maximo }
              >
              {String.fromCharCode(8594)}
            </button>

            </div>
          </div>
          </div>
    </>
    
      )

}

export default ContainerArtWorks