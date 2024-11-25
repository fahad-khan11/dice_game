import styled from 'styled-components'
function NumberSelecter({setError,Error,selectedNumber,setSelectedNumber}) {
    const arr = [1,2,3,4,5,6]
    const numberSelectorHandler = (value) =>{
        setSelectedNumber(value);
        setError("");
    }
  return (
    <Container1>
        <p className='error'>{Error}</p>
    <div className='flex'>
        {arr.map((value,i)=>  
        <Box isSelected={value===selectedNumber}
        key={i} onClick={()=>numberSelectorHandler(value)}>{value}</Box>)}
    </div>
    <p>Select Number</p>
    </Container1>
  )
}

export default NumberSelecter
const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .flex {
    display: flex;
    gap: 24px;
  }

  p {
    font-size: 24px;
    font-weight: 700;
  }

  .error {
    color: red;
  }

  @media (max-width: 1024px) {
    align-items: center;
    .flex {
      gap: 20px;
      flex-wrap: wrap;
      justify-content: center;
    }
    p {
      font-size: 22px;
    }
  }

  @media (max-width: 768px) {
    .flex {
      gap: 16px;
      flex-wrap: wrap;
      justify-content: center;
    }
    p {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    .flex {
      gap: 12px;
      flex-direction: column;
    }
    p {
      font-size: 18px;
    }
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};

  @media (max-width: 1024px) {
    height: 64px;
    width: 64px;
    font-size: 22px;
  }

  @media (max-width: 768px) {
    height: 56px;
    width: 56px;
    font-size: 20px;
  }

  @media (max-width: 480px) {
    height: 48px;
    width: 48px;
    font-size: 18px;
  }
`;
