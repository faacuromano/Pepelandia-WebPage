import React, {useState} from 'react';
import './App.css';

import ContainerArtWorks from './ArWorks/ContainerArtWorks';
import SideNav from './SideBar/SideBar';

import vCard1 from "../src/PepeCards/BADNEWS.png"
import vCard2 from "../src/PepeCards/PPLNDIA.png"
import vCard3 from "../src/PepeCards/4.gif"
import vCard4 from "../src/PepeCards/PPLNDIA.png"
import vCard5 from "../src/PepeCards/HARINGPEPE.png"
import vCard6 from "../src/PepeCards/4.gif"
import vCard7 from "../src/PepeCards/159.png"
import vCard8 from "../src/PepeCards/199.gif"

const DUMMY_ARTS = [
  {
    id: 1,
    serie: 1,
    title: "Bad News",
    eds: "57",
    url: "https://objkt.com/",
    artist: "Morlacos",
    artistLink: "https://twitter.com/losmorlacos",
    img: vCard1
  },
  {
    id: 2,
    serie: 1,
    title: "Name of the Card",
    eds: "232",
    url: "https://objkt.com/",
    artist: "Morlacos",
    artistLink: "https://twitter.com/losmorlacos",
    img: vCard2
   },
   {
    id: 3,
    serie: 1,
    title: "Bad News",
    eds: "57",
    url: "https://objkt.com/",
    artist: "Morlacos",
    artistLink: "https://twitter.com/losmorlacos",
    img: vCard3
  },
  {
    id: 4,
    serie: 1,
    title: "Name of the Card",
    eds: "232",
    url: "https://objkt.com/",
    artist: "Morlacos",
    artistLink: "https://twitter.com/losmorlacos",
    img: vCard4
   },
  {
    id: 5,
    serie: 1,
    title: "Name of the Card",
    eds: "232",
    url: "https://objkt.com/",
    artist: "Morlacos",
    artistLink: "https://twitter.com/losmorlacos",
    img: vCard5
   },
  {
    id: 6,
    serie: 1,
    title: "Name of the Card",
    eds: "232",
    url: "https://objkt.com/",
    artist: "Morlacos",
    artistLink: "https://twitter.com/losmorlacos",
    img: vCard6
   },
  {
    id: 7,
    serie: 1,
    title: "Name of the Card",
    eds: "232",
    url: "https://objkt.com/",
    artist: "Morlacos",
    artistLink: "https://twitter.com/losmorlacos",
    img: vCard7
   },
  {
    id: 8,
    serie: 1,
    title: "Name of the Card",
    eds: "232",
    url: "https://objkt.com/",
    artist: "Morlacos",
    artistLink: "https://twitter.com/losmorlacos",
    img: vCard8
   },
  {
    id: 9,
    serie: 1,
    title: "Name of the Card",
    eds: "232",
    url: "https://objkt.com/",
    artist: "Morlacos",
    artistLink: "https://twitter.com/losmorlacos",
    img: vCard1
   },
  {
    id: 10,
    serie: 1,
    title: "Name of the Card",
    eds: "232",
    url: "https://objkt.com/",
    artist: "Morlacos",
    artistLink: "https://twitter.com/losmorlacos",
    img: vCard2
   },
  {
    id: 11,
    serie: 2,
    title: "Name of the Card",
    eds: "232",
    url: "https://objkt.com/",
    artist: "Morlacos",
    artistLink: "https://twitter.com/losmorlacos",
    img: vCard3
   },
  {
    id: 12,
    serie: 2,
    title: "Name of the Card",
    eds: "232",
    url: "https://objkt.com/",
    artist: "Morlacos",
    artistLink: "https://twitter.com/losmorlacos",
    img: vCard7
   },
  {
    id: 13,
    serie: 2,
    title: "Name of the Card",
    eds: "232",
    url: "https://objkt.com/",
    artist: "Morlacos",
    artistLink: "https://twitter.com/losmorlacos",
    img: vCard6
   },
  {
    id: 14,
    serie: 2,
    title: "Name of the Card",
    eds: "232",
    url: "https://objkt.com/",
    artist: "Morlacos",
    artistLink: "https://twitter.com/losmorlacos",
    img: vCard4
   },
  {
    id: 15,
    serie: 2,
    title: "Name of the Card",
    eds: "232",
    url: "https://objkt.com/",
    artist: "Morlacos",
    artistLink: "https://twitter.com/losmorlacos",
    img: vCard5
   },
  {
    id: 16,
    serie: 2,
    title: "Name of the Card",
    eds: "232",
    url: "https://objkt.com/",
    artist: "Morlacos",
    artistLink: "https://twitter.com/losmorlacos",
    img: vCard8
   },
]

function App() {
  const [artworks, setArtWorks] = useState(DUMMY_ARTS);

  return (
    <div className="App">
    <div className='navBar'>    
      <h1 className='Logo'>Pepelandia</h1>
      <a className='HrefNavbarForoLabel' href='google.com'> <h1 className='NavbarForoLabel'> Pepe Journal  </h1></a>
    </div>
    <div className='ContainerBody'>
    <div className='div1'> <SideNav/> </div>
    <div className='div2'> <ContainerArtWorks artworks={artworks}/> </div>
    </div>

    </div>
  );
}

export default App;
