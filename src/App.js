import React, {useState} from 'react';
import './App.css';

import ContainerArtWorks from './ArWorks/ContainerArtWorks';

import vCard1 from "../src/PepeCards/BADNEWS.png"
import vCard2 from "../src/PepeCards/PPLNDIA.png"

const DUMMY_ARTS = [
  {
    id: 1,
    title: "Bad News",
    eds: "57",
    url: "https://objkt.com/",
    artist: "Morlacos",
    artistLink: "https://twitter.com/losmorlacos",
    img: vCard1
  },
  {
    id: 2,
    title: "Name of the Card",
    eds: "232",
    url: "https://objkt.com/",
    artist: "Morlacos",
    artistLink: "https://twitter.com/losmorlacos",
    img: vCard2
   },
   {
    id: 3,
    title: "Bad News",
    eds: "57",
    url: "https://objkt.com/",
    artist: "Morlacos",
    artistLink: "https://twitter.com/losmorlacos",
    img: vCard1
  },
  {
    id: 4,
    title: "Name of the Card",
    eds: "232",
    url: "https://objkt.com/",
    artist: "Morlacos",
    artistLink: "https://twitter.com/losmorlacos",
    img: vCard2
   },
  {
    id: 5,
    title: "Name of the Card",
    eds: "232",
    url: "https://objkt.com/",
    artist: "Morlacos",
    artistLink: "https://twitter.com/losmorlacos",
    img: vCard2
   },
  {
    id: 6,
    title: "Name of the Card",
    eds: "232",
    url: "https://objkt.com/",
    artist: "Morlacos",
    artistLink: "https://twitter.com/losmorlacos",
    img: vCard2
   },
  {
    id: 7,
    title: "Name of the Card",
    eds: "232",
    url: "https://objkt.com/",
    artist: "Morlacos",
    artistLink: "https://twitter.com/losmorlacos",
    img: vCard2
   },
  {
    id: 8,
    title: "Name of the Card",
    eds: "232",
    url: "https://objkt.com/",
    artist: "Morlacos",
    artistLink: "https://twitter.com/losmorlacos",
    img: vCard2
   },
]

function App() {
  const [artworks, setArtWorks] = useState(DUMMY_ARTS);

  return (
    <div className="App">
      <h1 className='Logo'>PEPELANDIA</h1>
      <h5 className='Sub-Logo'>Todos los pepes van al cielo</h5>
        <ContainerArtWorks artworks={artworks}/>
    </div>
  );
}

export default App;
