
import './App.css'
import Kilometrai from './components/Kilometrai'
import Skaicius from './components/Skaicius'
import MedzioApdirbejai from './components/MedzioApdirbejai'
import Temperaturos from './components/MedzioApdirbejai'
import Prekes from './components/Prekes'
import Kepyklele from './components/Kepyklėlė'

function App() {


  return (
    <>
      <h1>useRef</h1>
      <Skaicius />
      <hr/>
      <Kilometrai />
      <hr/>
      <MedzioApdirbejai />
      <hr/>
      <Temperaturos />
      <hr/>
      <Prekes />
      <hr/>
      <Kepyklele />
    </>
  )
}

export default App
