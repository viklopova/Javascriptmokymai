const Studentas = (props) => {    
    
    return (
        <div>
            <h4>{props.studentas.vardas} {props.studentas.pavarde}</h4>
            <p> yra {props.studentas.amzius} metu senumo </p>
        </div>
    );
}   

export default Studentas;