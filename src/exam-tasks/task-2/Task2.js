import React, { useState, useEffect, useRef } from "react";
//importing styles
import styled from "styled-components";

// importing font awesome
import "font-awesome/css/font-awesome.min.css";

//styled components
const StyledLikes = styled.div`
  display: flex;
  flex-direction: row;
  width: 5rem;
  align-items: center;
  justify-content: space-around;
`;

const StyledLike = styled.i`
  color: grey;
`;

function Task2() {
  //  hooks
  // --local

  const [like, setLike] = useState(0);

  useEffect(() => {
    setLike(0);
  }, []);

  const [dislike, setDislike] = useState(0);

  useEffect(() => {
    setDislike(0);
  }, []);

  // functions
  let liked = useRef(false);
  let disliked = useRef(false);

  const likeHandler = () => {
    if (!liked.current) {
      setLike(like + 1);
      liked.current = true;
      disliked.current = true;
    }
  };

  const dislikeHandler = () => {
    if (!disliked.current) {
      setDislike(dislike - 1);
      disliked.current = true;
      liked.current = true;
    }
  };

  return (
    <div>
      <h3>Task 2</h3>
      <StyledLikes>
        <StyledLike
          onClick={likeHandler}
          className="fa fa-thumbs-up"
        ></StyledLike>
        <span>{like}</span>
        <StyledLike
          onClick={dislikeHandler}
          className="fa fa-thumbs-down"
        ></StyledLike>
        <span>{dislike}</span>
      </StyledLikes>
    </div>
  );
}

export default Task2;

/* Task 2
Atkurkite šį komponentą: https://prnt.sc/1296zmk

Pastabos, vartotojui leidžiama balsuoti, tik vieną kartą. 
Paspaudus ant vieno mygtuko, antrą kartą paspausti ant jo 
negalima, tačiau leidžiama pakeisti nuomonę ir paspausti 
ant kito. Tokiu atveju nuo prieš tai paspausto balsas "nuimamas"
ir perduodamas kitam.

Pastaba: būtina panaudoti useReducer
*/
