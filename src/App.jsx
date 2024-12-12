import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [bankData, setBankData] = useState({});
  const [exchangeData, setExchangeData] = useState({});

  useEffect(function(){
    setTimeout(()=>{
      setBankData({
        income : 100
      });
    },3000);
  },[]);

  useEffect(function(){
    setTimeout(()=>{
      setExchangeData({
        returns:200
      });
    },1000);
  },[]);

  const incomeTax = (bankData.income+exchangeData.returns)*0.3; 

  return <div>

    You income tax for the year are {incomeTax}
  
   </div>
  
}

export default App
