
const Komp5 = () => {
    let automobiliai = [    
        'Audi',
        'BMW',  
        'VW',
        'Toyota',
        'Opel'
    ]

    let title = 'Automobiliai';
    
    
    return (
        <div className="komponentas5">
            <h1>{title}</h1>
            <ul>
            {automobiliai.map((automobilis, index) => <li key={index} > {automobilis}</li>)}
            </ul>
        </div>
    );
    };
    export default Komp5;