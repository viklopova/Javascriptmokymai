
import './App.css';
import Home from './pages/Home';
import Map from './pages/Map';
import { useState } from 'react';

function App() {
  const [coordinates, setCoordinates] = useState({
    latitude: 54.6876,
    longitude: 25.2806,
  });

  return (
    <>
     <Home/>
     <Map latitude={coordinates.latitude} longitude={coordinates.longitude} />
    </>
  )
}

export default App
