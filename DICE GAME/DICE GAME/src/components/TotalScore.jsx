import React from 'react'
import styled from 'styled-components';
function TotalScore({score}) {
  return (
    <Container>
      <h1>{score}</h1>
      <p>Total Score</p>
    </Container>
  )
}

export default TotalScore
const Container = styled.div`
  max-width: 200px;
  text-align: center;

  h1 {
    font-size: 100px;
    line-height: 20px;
  }

  p {
    font-size: 24px;
    font-weight: 500;
    line-height: 15px;
  }

  @media (max-width: 1024px) {
    max-width: 180px;

    h1 {
      font-size: 80px;
      line-height: 18px;
    }

    p {
      font-size: 20px;
      line-height: 14px;
    }
  }

  @media (max-width: 768px) {
    max-width: 160px;

    h1 {
      font-size: 60px;
      line-height: 16px;
    }

    p {
      font-size: 18px;
      line-height: 12px;
    }
  }

  @media (max-width: 480px) {
    max-width: 140px;

    h1 {
      font-size: 40px;
      line-height: 14px;
    }

    p {
      font-size: 16px;
      line-height: 10px;
    }
  }
`;
