import styled from "styled-components";
const RoleDice = ({currentDice,roledice}) => {
  
  return (
    <DiceCounter>
      <div className="Dice" onClick={roledice}>
        <img src={`/images/dice ${currentDice}.jpg`} alt="dicesOne" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceCounter>
  );
};

export default RoleDice;

const DiceCounter = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .Dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }

  @media (max-width: 1024px) {
    margin-top: 40px;

    p {
      font-size: 22px;
    }
  }

  @media (max-width: 768px) {
    margin-top: 32px;

    p {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    margin-top: 24px;

    p {
      font-size: 18px;
    }
  }
`;

