import "./styles.css";

import { Button } from "../../components/Button";

const GameOver = ({ retry, score }) => {
  return (
    <div>
      <h1>Fim de jogo!</h1>
      <h2>
        A sua pontuação foi: <span>{score}</span>
      </h2>
      <Button onClick={retry}>Reiniciar jogo</Button>
    </div>
  );
};

export default GameOver;
