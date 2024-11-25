import GamePlay from "./components/GamePlay";
import StartGame from "./components/StartGame";
import { useState } from "react";
function App() {
  const [GameStarted,setGameStarted] = useState(false);

  const TogglePlayGame = () =>{
    setGameStarted((prev)=>!prev);
  }
  return (
    <>
 { GameStarted ? <GamePlay/> : <StartGame toggle={TogglePlayGame}/>}
    </>
  )
}

export default App
