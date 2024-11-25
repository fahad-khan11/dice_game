import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResult";

export const BASE_URL = "http://localhost:9000"
function App() {
  const [Data,setData]  = useState(null);
  const [loading,setLoading]  =  useState(false);
  const [error ,setError] = useState(null);
  const[filterData,setFilterData] = useState(null);
  const[selectedBtn,setSelectedBtn] = useState("All")
  const SearchFood = (e) => {
    const SearchValue = e.target.value;
    if(SearchValue===""){
      setFilterData(null);
    }
    const filter = Data?.filter((food)=>{
      return food.name.toLowerCase().includes(SearchValue.toLowerCase());
    })
    setFilterData(filter);
  
  };
 
  useEffect(()=>{
    const FetchCodeData = async() =>{
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
       setData(json);
       setLoading(false);
       setFilterData(json);
      } catch (error) {
        setError("Unable to fetch data")
      } 
    }
    FetchCodeData();
  },[]);

  const filterfood = (type) => {
    if(type=="All"){
      setFilterData(Data);
      setSelectedBtn("All")
      return;
    }
    const filter = Data?.filter((food)=>{
      return food.type.toLowerCase().includes(type.toLowerCase());
    })
    setFilterData(filter);
    setSelectedBtn(type);
  };

  const filterBtns = [
    {
      name : "All",
      type : "all",
    },
    {
      name : "Breakfast",
      type : "breakfast",
    },
    {
      name : "Lunch",
      type : "lunch",
    },
    {
      name : "Dinner",
      type : "dinner",
    }
  ]

  if(error) return <div>{error}</div>
  if(loading) return <div>loading....</div> 
  return (
    <>
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="/images/Foody Zone.png" alt="Logo" />
        </div>
        <div className="search">
          <input onChange={SearchFood} type="text" placeholder="Search Food..." />
        </div>
      </TopContainer>
      <FilterContainer>
        {filterBtns.map((value) => (<Button key={value.name} onClick={()=>filterfood(value.type)}>{value.name}</Button>))}
      </FilterContainer>
    </Container>
      <SearchResult Data={filterData}/>
    </>
  );
}

export default App;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.div`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search input {
    background-color: transparent;
    border: 1px solid red;
    border-radius: 5px;
    height: 40px;
    font-size: 16px;
    padding: 5px;
  }

  @media(0<width<600px){
    flex-direction: column;
    height: 120px;
  }
`;

const FilterContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;

export const Button = styled.button`
  background-color: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  color: white;
  border: none;
  cursor: pointer;
  &:hover{
    background-color:#f22f2f ;
  }
`;


