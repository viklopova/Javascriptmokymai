import { useState } from "react";

const UseLocalStorage = (key) => {
    const [storedValue, setStoredValue] = useState(()=> {
        const item = localStorage.getItem(key);
        return item || null;
    });

    const setValue = (newValue) => {
        localStorage.setItem(key, newValue)
        setStoredValue(newValue);
    }

    return [storedValue, setValue] 
  }


export default UseLocalStorage;