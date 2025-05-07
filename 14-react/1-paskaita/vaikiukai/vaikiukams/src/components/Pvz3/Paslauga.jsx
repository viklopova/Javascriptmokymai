

const Paslauga = ({pavadinimas, kategorija}) => {
    
  return (
    <div>
      <h3>Paslauga</h3>
        <p>{pavadinimas}</p>
        <p>{kategorija}</p>
        <hr/>
    </div>
  );
}

export default Paslauga;