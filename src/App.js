import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import './App.css'
import Banner from './Components/Banner/Banner';
import CardRow from './Components/CardRow/CardRow';
import { adventure, animation, comedy, crime, fantasy, horror, originals, scifi } from './urls';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <CardRow url={originals} title='Netflix Originals'/>      
      <CardRow url={adventure} isSmall title='Adventure' />
      <CardRow url={animation} isSmall title='Animation' />
      <CardRow url={comedy} isSmall title='Comedy' />
      <CardRow url={crime} isSmall title='Crime' />
      <CardRow url={fantasy} isSmall title='Fanatsy' />
      <CardRow url={horror} isSmall title='Horror' />
      <CardRow url={scifi} isSmall title='Sci-Fi' />
    </div>
  );
}

export default App;
