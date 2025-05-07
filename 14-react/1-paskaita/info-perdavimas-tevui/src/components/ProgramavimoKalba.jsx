const ProgramavimoKalba = (props) => {

const onClick= (language) => {
    console.log(language)
    props.kalbosPasirinkimas(language);
}

  return (
    <div>
      <button onClick={()=> onClick('Javascript')}>JavaScript</button>
      <button onClick={()=> onClick('PHP')}>PHP</button>
      <button onClick={()=> onClick('C++')}>C++ </button>
      <button onClick={()=> onClick('Nepaisirinkta')}>Nepasirinkta</button>
    </div>
  );
}

export default ProgramavimoKalba;