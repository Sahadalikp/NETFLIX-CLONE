import React, { useCallback, useMemo, useState } from "react";

const Child = React.memo(function Kid({ name, onClick }) {
  console.log("child rendered");

  return (
    <>
      <h1>Hello {name}</h1>

      <button onClick={onClick}>
        Click Child
      </button>
    </>
  );
});

export default function App() {
  const [count, setCount] = useState(0);
  console.log("app rendered");
  

  const Expensivecalculation = useMemo(() => {
    console.log("expensive calculation rendered");

    let total = 0;

    for (let i = 0; i < 10000000; i++) {
      total += i % 2 !== 0;
    }

    return total;
  }, []);

  const Hand = useCallback(() => {
    console.log("handle clicked...");

  },[])

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        +
      </button>

      <Child
        name = "sahad"
        onClick={Hand}
      />

       <h2>Odd numbers: {Expensivecalculation}</h2>
    </div>
  );
}