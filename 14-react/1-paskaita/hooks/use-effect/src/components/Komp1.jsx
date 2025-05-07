import { useEffect, useState } from "react";

const Komp1 = () => {

    const [zodis, setZodis] = useState("zodis");
    const [count, setCount] = useState(0);
    console.log('global: komp1 mounted');
    
    useEffect(() => {
        console.log('useEffect: komp1 mounted');
    }, []);   

    useEffect(() => {
    console.log('useEffect: Komp1 mounted OR upadted');
    })

    useEffect(() => {
        console.log('useEffect: count value is changed');
        if (count >5) {
            setCount(0);
        }
    }, [count]);

    useEffect(() => {
        console.log('useEffect: count and zodis');
        if (zodis === "word") {
            setZodis("zodis 3");
        }
    }, [count, zodis]);

    useEffect(() => {
        return () => {
            console.log('useEffect: Komp1 unmounted');
        }
    },[])

  
    const handleClick = () => {
        console.log('click')
        setZodis("word");
        setCount(count + 1);
    }
    

    return (
        <div>
        <h2>Komp1</h2>
        <button onClick={handleClick}>Click me</button>
        <p>{zodis}</p>
        <p>{count}</p>
        </div>
    );
    }

    export default Komp1;