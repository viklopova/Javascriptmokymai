import { useRef } from "react";
import { useState } from "react"

const Komp4 = () => {
    const [skaiciusState, setSkaiciusState] = useState(0)
    let skaicius = 0;
    let skaiciusRef = useRef(0)

    console.log('rendering')

    const addOneNumber = () => {
        console.log('-pries-')
        console.log(skaicius)
        console.log(skaiciusState)
        console.log(skaiciusRef)
        console.log('------')
        skaicius++
        setSkaiciusState(skaiciusState + 1)
        skaiciusRef.current = skaiciusRef.current + 1

        console.log('--PO--')
        console.log(skaicius)
        console.log(skaiciusState)
        console.log(skaiciusRef)
        console.log('------')
    }

    return (
        <div>
            <h1>Komp4</h1>
            <p>kintamasis: {skaicius}</p>
            <p>State: {skaiciusState}</p>
            <p>Ref: {skaiciusRef.current}</p>

            <button onClick={addOneNumber}>Add</button>

        </div>
    )
}

export default Komp4