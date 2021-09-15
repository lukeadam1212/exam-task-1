import React, { useReducer } from "react";

// components
import CompA from "./CompA";
import CompB from "./CompB";

// exporting clicks

// Context (for managing global state)
export const ClicksContext = React.createContext();

// useReducer initial state
const initialClickState = { clicks: 0, message: "" };
// function to manage initialClickState
const clickReducer = (s, a) => {
  switch (a.type) {
    case "INCREMENT":
      return { clicks: s.clicks + 10 };
    case "DECREMENT":
      return { clicks: s.clicks - 10 };
    case "ValueTooHigh":
      return { ...s, message: "value too high" };
    case "ValueTooLow":
      return { ...s, message: "value too low" };
    default:
      return s;
  }
};

function Task6() {
  const [s, dispatch] = useReducer(clickReducer, initialClickState);

  return (
    <div>
      <h3>Task 6</h3>
      {/* <Counter /> */}
      <ClicksContext.Provider value={{ s, dispatch }}>
        <h1>
          Buttons clicked <u>{s.clicks}</u> times in total
        </h1>

        <CompA />
        <CompB />
      </ClicksContext.Provider>
      <p>{s.message}</p>
    </div>
  );
}

export default Task6;

/* Task 6
task-6 aplanke rasite kelis komponetus. Task6 komponente, turi būti atvaizduojami
šie kompoentai: CompA (viduje turi <h2>CompA</h2> ir CompA1 (su tekstu <h3>CompA1</h3>)) 
ir CompB (viduje turi <h2>CompB</h2>).

Task8 komponentų medis
- CompA
-- CompA1
- CompB

Task 6 viduje bus sukurtas Counter s'as, kuri bus galima valdyti iš CompA1 ir CompB
State'as bus valdomas su mygtkais, kurie leis state'ą padidinti 10 taškų arba pamažinti 10.
State'ui pasiekus 100, bus draudžiama didinti state'ą ir pasirodys pranešimas "Didinti nebegalima"

Pastaba: naudokite useState, useContext (Context API).

*/
