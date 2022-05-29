import { Instruction } from "./styles";

import { Button } from "../../components/Button";
import { Title } from "../../components/Title";

const StartScreen = ({ startGame }) => {
  return (
    <div>
      <Title>Secret Word</Title>
      <Instruction>Clique no botão abaixo para começar a jogar</Instruction>
      <Button onClick={startGame}>Começar o jogo</Button>
    </div>
  );
};

export default StartScreen;
