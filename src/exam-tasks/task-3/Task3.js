import React from "react";
import Button from "./components/Buttons/Button";
//styles
import styled from "styled-components";

// custom styles
const StyledContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Kanit&display=swap");
  width: 30rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-family: "Kanit", sans-serif;
`;

const StyledTextWithImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  width: 80%;
`;

const StyledButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 80%;
`;

const StyledImage = styled.img`
  height: 3rem;
`;

function Task3() {
  return (
    <div>
      <h3>Task 3</h3>
      <StyledContainer>
        <StyledTextWithImage>
          <StyledImage
            src="https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-superJumbo-v4.jpg"
            alt="twitter logo"
          />
          <h2>Happening Now</h2>
          <h5>Join Twitter Today</h5>
        </StyledTextWithImage>
        <StyledButtonDiv>
          <Button buttonClass="sign-up" text="Sign Up" />
          <Button buttonClass="log-in" text="Log In" />
        </StyledButtonDiv>
      </StyledContainer>
    </div>
  );
}

export default Task3;

/* Task 3
Atkurkite šį komponentą: https://prnt.sc/12978k7

Pastabos:
- turi būti sukurtas papildomas <Button> komponentas, kuris prims
du props: tekstas ir klasė. Remiantis jais bus atvaizduojamas
komponente nurodyti mygtukai;
- šriftas: naudokite savo parinktą;
- twitter logo, naudokite ikon'ą.
*/
