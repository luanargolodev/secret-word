import { Score } from "./styles";

import { Button } from "../../components/Button";
import { Title } from "../../components/Title";

const GameOver = ({ retry, score }) => {
  return (
    <div>
      <Title>Fim de jogo!</Title>
      <h2>
        A sua pontuação foi: <Score>{score}</Score>
      </h2>
      <Button onClick={retry}>Reiniciar jogo</Button>
    </div>
  );
};

export default GameOver;
