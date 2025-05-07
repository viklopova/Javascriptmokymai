import Mygtukai from "./Mygtukai"

const Pasirinkimai = () => {

    const apdorotoVaikoReiksme= (atejusiInfo) => { 
        console.log('Atejo info is vaiko: ' + atejusiInfo);
    }

    const apdorotiDeleteMe = (info) => {
        console.log(info);
        console.log('Tevo delete me fja');
    }

    const apdorotiRandomButton = (data) => {
        console.log('laukti' + data);
        setTimeout(() => {
            console.log('laikas beigesi');
        }, data);
    }

    return (
        <>
        <h3>Pasirinkimai</h3>

        <Mygtukai 
        buttonText="Click me"
        tevoKomponentoFunkcija={apdorotoVaikoReiksme}
        />
        <Mygtukai 
        buttonText="Add me"
        tevoKomponentoFunkcija={apdorotoVaikoReiksme}
        />
        <Mygtukai 
        buttonText="Delete me"
        tevoKomponentoFunkcija={apdorotiDeleteMe}
        />
        <Mygtukai 
        buttonText="Random"
        tevoKomponentoFunkcija={apdorotiRandomButton}
        />
        </>
    )
}

export default Pasirinkimai