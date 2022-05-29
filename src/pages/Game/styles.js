import styled from "styled-components";

export const Score = styled.span`
  font-weight: bold;
`;

export const Tip = styled.span`
  color: #ecfa00;
`;

export const WordContainer = styled.div`
  margin: 1.5em;
  padding: 1.5em;
  border: 20px solid #ecfa00;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 700px) {
    margin-bottom: 5em;
  }
`;

export const Letter = styled.span`
  font-size: 70px;
  line-height: 1.5;
  border: 3px solid #000;
  height: 100px;
  width: 100px;
  text-transform: uppercase;
  background-color: #fff;
  color: #000;
  font-weight: bold;
`;

export const BlankSquare = styled.span`
  font-size: 70px;
  line-height: 1.5;
  border: 3px solid #000;
  height: 100px;
  width: 100px;
  text-transform: uppercase;
  background-color: #fff;
  color: #000;
  font-weight: bold;
`;

export const LetterContainer = styled.div`
  margin-bottom: 1.2em;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    height: 50px;
    width: 50px;
    width: 50px;
    font-size: 2em;
    text-align: center;
    margin-right: 1em;
  }
`;

export const WrongLettersContainer = styled.div`
  margin-bottom: 2em;
`;
