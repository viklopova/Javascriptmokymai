
const CounterMygtukai = ({ buttons, onChange }) => {
  return (
    <div>
      {buttons.map((btn) => (
        <button key={btn.id} onClick={() => onChange(btn.value)}>
          {btn.label}
        </button>
      ))}
    </div>
  );
};

export default CounterMygtukai;