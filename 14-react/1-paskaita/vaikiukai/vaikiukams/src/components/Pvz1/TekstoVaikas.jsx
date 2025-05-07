const TekstoVaikas = (props) => {
  return (
    <div>
      <p>Labas, aš vaikas, gautas iš 
        { /*
            props.tekstas ?
                <strong> 
                    ilgis: {props.tekstas.length} reiksme: {props.tekstas}
                </strong>
             : ''*/}

             {props.tekstas}
             
      </p>
    </div>
  );
}

export default TekstoVaikas;