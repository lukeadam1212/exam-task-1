import React, { useRef } from "react";

function Task5() {
  const ContainerBackground = useRef(0);
  const FontColorH1 = useRef(0);
  const FontColorH3 = useRef(0);
  const FontColorP = useRef(0);

  // custom functions
  // light theme
  const lightClick = () => {
    ContainerBackground.current.style.backgroundColor = "#f1f1f1";
    FontColorH1.current.style.color = "#000000";
    FontColorH3.current.style.color = "#000000";
    FontColorP.current.style.color = "#000000";
  };

  // dark theme
  const darkClick = () => {
    ContainerBackground.current.style.backgroundColor = "#000000";
    FontColorH1.current.style.color = "#f1f1f1";
    FontColorH3.current.style.color = "#f1f1f1";
    FontColorP.current.style.color = "#f1f1f1";
  };

  return (
    <div ref={ContainerBackground}>
      <h3 ref={FontColorH3}>Task 5</h3>
      <h1 ref={FontColorH1}>Change your theme</h1>
      <p ref={FontColorP}>Light or dark</p>
      <button onClick={lightClick}>Light Theme</button>
      <button onClick={darkClick}>Dark Theme</button>
    </div>
  );
}

export default Task5;

/* Task 5
Task 5 komponento viduje sukurkite h1 ir p žymas su tekstu ir du mygtukus.

Vienas mygtukas vadinsis "Light theme", kurį paspaudus Task5 komponento fonas
taps šios spalvos #f1f1f1, o tekstas #0000.
Kitas mygtukas vadinsis "Dark theme", kurį paspaudus Task5 komponento fonas
taps šios spalvos #000000, o tekstas #f1f1f1.

Pastabos:
- mygtukai turi būti atvaizduojami komponento viduje, jiems atskirų komponentų
kurti nereikia;
- panaudokite useRef.
*/
