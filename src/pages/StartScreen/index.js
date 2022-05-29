import "./styles.css";

import { Button } from "../../components/Button";
import { Title } from "../../components/Title";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <Title>Secret Word</Title>
      <p>Clique no botão abaixo para começar a jogar</p>
      <Button onClick={startGame}>Começar o jogo</Button>
    </div>
  );
};

export default StartScreen;
