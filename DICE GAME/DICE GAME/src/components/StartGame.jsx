import styled from 'styled-components'
import { Button } from '../styled/Button';
const StartGame = ({ toggle }) => {
  return (
  <Container>
    <div>
    <img src="/images/dices 1.jpg" alt="" />
    </div>
    <div className='content'>
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
    </div>
  </Container>
  );
};
export default StartGame;
 
const Container = styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    align-items: center;
    .content{
        h1{
            font-family: Poppins,sans-serif;
            font-size: 96px;
            font-weight : 700;
            line-height: 100px;
            
            @media only screen and (min-width: 480px) {
                font-size: 40px;
                line-height: 50px;
            }

            @media only screen and (min-width: 768px) {
                font-size: 96px;
                line-height: 100px;
            }
         }
    }
`;

