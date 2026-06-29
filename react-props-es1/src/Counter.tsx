import { useEffect, useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  return (
    <div>
      <h2>{counter}</h2>

      <button onClick={() => setCounter(counter + 1)}>
        +
      </button>

      <input
        type="number"
        value={counter}
        onChange={(e) => setCounter(Number(e.target.value))}
      />
    </div>
  );
}

export default Counter;