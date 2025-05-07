const Sansas= () => {    

    const tikrinti = () => {
        let skaicius = Math.floor(Math.random() * 10) + 1;
        if (skaicius >= 5) {
            alert('Laimėjai!');
        } else {
            alert('Pralaimėjai');
        }
    };

    return (
        <div>
            <h2>Sansas</h2>
            <button onClick={tikrinti}>Let's go Bro</button>
        </div>
    );
}

export default Sansas;