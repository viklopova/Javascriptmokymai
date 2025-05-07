// TODO: prijunkite šį komponentą prie App.jsx

// TODO: susikurkite mokymų/kursų masyvą, kuriame būtų bent 3 objektai,
// kiekvienas objektas turėtų po 3 raktus:
// 1. pavadinimas,
// 2. trukmė,
// 3. kaina

let kursai = [
    {
        pavadinimas: 'Pyragai',
        trukme: '3 mėnesiai',   
        kaina: 100,
    },
    {
        pavadinimas: 'Macarons',
        trukme: '4 mėnesiai',
        kaina: 150,
    },
    {
        pavadinimas: 'Eklerai',
        trukme: '2 mėnesiai',
        kaina: 50,
    }
]

// TODO: atvaizduokite visus mokymus/kursus norimu formatu

const Komp9 = () => {
    return (
        <div>
        <table>
            <tr>
                <th>Mokymu pavadinimas</th>
                <th>Trukme</th>
                <th>Kaina</th>
            </tr>
            {kursai.map((kursai, index) => (
                <tr key={index}>
                    <td>{kursai.pavadinimas}</td>
                    <td>{kursai.trukme}</td>
                    <td>{kursai.kaina} EUR </td>
                </tr>
            ))}
            </table>
    </div>
    )
}

export default Komp9
