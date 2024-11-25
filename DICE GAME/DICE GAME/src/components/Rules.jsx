import React from 'react'
import styled from 'styled-components'
function Rules() {
  return (
    <RulesContainer>
        <h2>How to play dice game</h2>
        <div className="text">
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
            <p>if you get wrong guess then  2 point will be dedcuted </p>
        </div>
    </RulesContainer>
  )
}

export default Rules
const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto; 
  background-color: #FBF1F1;
  margin-top: 40px;
  border-radius: 10px; 
  padding: 24px; 

  h2 {
    font-size: 24px; 
    font-weight: bold;
  }

  .text {
    margin-top: 24px; 
  }

  @media (max-width: 1024px) { 
    max-width: 600px; 
    padding: 20px; 
    h2 {
      font-size: 22px;
    }
    .text {
      margin-top: 20px;
    }
  }

  @media (max-width: 768px) { 
    max-width: 90%;
    padding: 16px;
    h2 {
      font-size: 20px; 
    }
    .text {
      margin-top: 16px;
    }
  }

  @media (max-width: 480px) {
    max-width: 95%; 
    padding: 12px; 
    h2 {
      font-size: 18px; 
    }
    .text {
      margin-top: 12px;
    }
  }
`;
