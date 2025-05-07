
const Komp7 = () => {
    let antraste = 'Objektu masyvas';
    
    let links = [
        {id: 1, title: 'Google', url: 'http://www.google.com'},
        {id: 2, title: 'Facebook', url: 'http://www.facebook.com'},
        {id: 3, title: 'Twitter', url: 'http://www.twitter.com'},
        {id: 4, title: 'Instagram', url: 'http://www.instagram.com'},
    ];

    
    return (
        <div className="komponentas7">
            <h3>{antraste}</h3> 
            <ul>
            {
                links.map(link => <li key={link.id}> <a href={link.url}> {link.title} </a> </li>)
            }
            </ul>
        </div>
    );
    };
    export default Komp7;