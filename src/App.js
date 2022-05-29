import "./App.css";

import StartScreen from "./components/StartScreen";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

const App = () => {
  return (
    <div className="App">
      <StartScreen />
    </div>
  );
};

export default App;
