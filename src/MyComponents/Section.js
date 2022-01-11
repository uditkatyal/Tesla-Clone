import React from "react";
import styled from "styled-components";

function Section(props) {
  return (
    <Wrap bgImage={props.backgroundImg}>
      <ItemText>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
      </ItemText>
      <Button>
        <ButtonGroup>
          <LeftButton>{props.leftBtnText} </LeftButton>
          {props.rightBtnText && (
            <RightButton>{props.rightBtnText} </RightButton>
          )}
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg"></DownArrow>
      </Button>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  height: 40px;
  background-color: rgba(23, 26, 32, 0.8);
  width: 250px;
  color: white;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 100px;
  opacity: 0.85;
  font-size: 12px;
  margin: 8px;
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  cursor: pointer;
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`;

const Button = styled.div``;
