import React from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelecter from "./NumberSelecter";
import RoleDice from "./RoleDICE";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";
function GamePlay() {
  const[selectedNumber,setSelectedNumber] = useState();
  const [currentDice, setCurrentDIce] = useState(1);
  const[score,setScore] = useState(0);
  const [Error,setError] = useState("")
  const [showRules,setShowRules] = useState(false);

  const RandomNo = () => {
    return Math.floor(Math.random() * 6 + 1);
  }

  const roledice = () => {
    if(!selectedNumber){
      setError("You have not selected any number")
      return
    }

    
    const randomNo = RandomNo();
    setCurrentDIce((prev)=>randomNo);

    if(selectedNumber===randomNo){
      setScore((prev)=>prev+randomNo)
    }
    else{
      setScore((prev)=>prev-2)
    }
    setSelectedNumber(undefined)
  }

  const reset = () => {
    setScore(0);
  }

  return (
    <MainContainer>
      <main>
        <div className="top_section">
          <TotalScore score={score}/>
          <NumberSelecter setError={setError} Error={Error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
        </div>
        <RoleDice currentDice={currentDice} roledice={roledice}/>
        <div className="btns">
          <OutlineButton onClick={reset}>Reset</OutlineButton>
          <Button onClick={()=>setShowRules(prev=>!prev)}>{showRules?"Hide":"Show"}Show Rules</Button>
        </div>
      </main>
     { showRules && <Rules />}
    </MainContainer>
  );
}

export default GamePlay;
const MainContainer = styled.main`
  height: 100vh;
  width: 100%; 
  padding: 70px;

  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: center; 
    gap: 20px; 
  }

  .btns {
    gap: 10px;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  @media (max-width: 1024px) {
    padding: 40px;
    .top_section {
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }
  }

  @media (max-width: 768px) { 
    padding: 20px;
    .top_section {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }

    .btns {
      flex-direction: row; 
      gap: 10px;
      flex-wrap: wrap;
    }
  }

  @media (max-width: 480px) { 
    padding: 10px;
    .top_section {
      flex-direction: column;
      align-items: center;
      gap: 15px;
    }

    .btns {
      flex-direction: column; 
      gap: 8px;
    }
  }
`;
