import UseLocalStorage from "../hooks/useLocalStorage";

const Komp4 = () => {

    const [storedValue, setValue] = UseLocalStorage('kursas is custom hook');

    const addDataWithoutHook = () => {

        localStorage.setItem('kursas', 'react mokymai');
    }

    const addDataWithHook = () => {
        setValue('react mokymai is custom hook');
    }

    const itemFromLocalStorage = () => {
        return storedValue ? storedValue : 'Nera jokios reiksmes';
    }

  return (
    <div>
      <h2>Local storage</h2>
      <button onClick={addDataWithoutHook}> add data without hook </button>
      <button onClick={addDataWithHook}> add data with hook </button>
      <p>{itemFromLocalStorage}</p>
    </div>
  );
}

export default Komp4;