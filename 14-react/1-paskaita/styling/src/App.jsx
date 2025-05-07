
import './App.css'
import InlineStylingObjects from './components/CSS/inline-styling/js-objects/inlineStylingObjects'
import InlineStylingPlain from './components/CSS/inline-styling/plain/inlineStylingPlain'
import BootstrapCss from './components/CSS/library/BootstrapCss'
import Plain from './components/CSS/plain/Plain'
import 'bootstrap/dist/css/bootstrap.min.css';
import SassStyling from './components/Sass/SassStyling'
import StyledComponentsExample from './components/styled-components/StyledComponentsExample'

function App() {


  return (
    <>
    <h1>CSS examples:</h1>
     <Plain/>
     <hr/>
     <InlineStylingObjects/>
     <InlineStylingPlain/>
     <hr/>
     <BootstrapCss/>
     <hr/>
     <SassStyling/>
     <hr/>
    <StyledComponentsExample/>
    </>
  )
}

export default App
