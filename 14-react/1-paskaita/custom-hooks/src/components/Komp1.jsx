import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import { useEffect } from 'react';

const Komp1 = () => {

    const {data, loading} = useFetch('https://api.ipify.org?format=json')
    const [ip, setIp] = useState(null);

    useEffect(() => {
        console.log(loading)}, [loading])

    const getData = async () => {
        (await fetch('https://api.ipify.org?format=json')
        .then(response =>response.json())
        .then(data => setIp(data.ip))
    )

    }

    return (
        <div>
            <h1>API pvz</h1>
            <p>Tavo IP yra:{ip}</p>
            <p>Tavo IP yra customhooks:
                {loading ? 'Loading data...' : data.ip}
            </p>
            <button onClick={getData}>Get Your IP</button>
        </div>
    )
}
export default Komp1;
