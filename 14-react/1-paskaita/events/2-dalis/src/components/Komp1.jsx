const Komp1 = () => {

    const tekstoHandleris = (e) => {
        let tekstas =e.target.value;

        if (tekstas.length > 5) {
            console.log('Tekstas per ilgas');
        }
    }

  return (
    <div>
      <h3>Komp1</h3>
        <input type="text" onInput={tekstoHandleris}/>
    </div>
  );
}

export default Komp1;