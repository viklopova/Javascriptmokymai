import TekstoVaikas from "./TekstoVaikas";

const TekstoBendras = () => {
    let kintamasis = 'Labas-babas';
    let tekstai = [
        'Labas',
        'Labas, x2',
        'Labas, x3',
        'Labas, x4'
    ]

     return (
         <div>
            Teksto tevas
            <div>
                <TekstoVaikas tekstas=' Labas'/>
                <TekstoVaikas tekstas= ' As ivaikintas'/>
                <TekstoVaikas tesktas =' As is daugiavaikes seimos'/>
                <TekstoVaikas tekstas = ' Kur mano broliai'/>
                <TekstoVaikas tekstas = {kintamasis}/>

                {tekstai.map((item, key) => <TekstoVaikas tekstas={item} key={key} />)}

            </div>
         </div>
     );
 };
 
 export default TekstoBendras