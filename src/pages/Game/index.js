import { useState, useRef } from "react";
import {
  Score,
  Tip,
  WordContainer,
  Letter,
  BlankSquare,
  LetterContainer,
  WrongLettersContainer,
} from "./styles";

import { Title } from "../../components/Title";
import { Button } from "../../components/Button";

const Game = ({
  verifyLetter,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    verifyLetter(letter);
    setLetter("");

    letterInputRef.current.focus();
  };

  return (
    <div>
      <p>
        Pontuação: <Score>{score}</Score>
      </p>
      <Title>Adivinhe a palavra: </Title>
      <h3>
        Dica sobre a palavra: <Tip>{pickedCategory}</Tip>
      </h3>
      <p>
        Você ainda tem {guesses} {guesses <= 1 ? "tentativa" : "tentativas"}.
      </p>
      <WordContainer>
        {letters.map((letter, index) =>
          guessedLetters.includes(letter) ? (
            <Letter key={index}>{letter}</Letter>
          ) : (
            <BlankSquare key={index}></BlankSquare>
          )
        )}
      </WordContainer>
      <LetterContainer>
        <p>Tente adivinhar uma letra da palavra: </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength="1"
            required
            value={letter}
            onChange={(e) => setLetter(e.target.value)}
            ref={letterInputRef}
          />
          <Button>Jogar!</Button>
        </form>
      </LetterContainer>
      <WrongLettersContainer>
        <p>Letras já utilizadas: </p>
        {wrongLetters.map((letter, index) => (
          <span key={index}>{letter} </span>
        ))}
      </WrongLettersContainer>
    </div>
  );
};

export default Game;
