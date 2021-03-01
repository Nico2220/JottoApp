import "./App.css";
import { GuessWord } from "./GuessWord";
import { Congrats } from "./Congrats";

function App() {
  return (
    <div className="App">
      <h1>Jotto</h1>
      <Congrats success={false} />
      <GuessWord
        guessedWord={[
          { guessedWord: "train", letterMatchCount: 3 },
          { guessedWord: "agile", letterMatchCount: 3 },
        ]}
      />
    </div>
  );
}

export default App;
