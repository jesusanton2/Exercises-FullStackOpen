
import { useState } from "react"


const Statistics = (props) => {
console.log(props)
if(props.all === 0){
 
  return(
    <div>
    <p>No feedback given</p>
    </div>
  )
}

  return(

  <table>
    
    <tbody>
     <StatisticsLine text="good" value={props.good} />
     <StatisticsLine text="neutral" value={props.neutral} />
     <StatisticsLine text="bad" value={props.bad} />
     <StatisticsLine text="all" value={props.all} />
     <StatisticsLine text="average" value={props.average} />
     <StatisticsLine text="positive" value={props.positive} />
     </tbody>

  </table>

  )
}
const StatisticsLine = ({text,value}) =>{

  return(
    <tr>
      <td>{text}  </td>
      <td> {value} </td>
    </tr>
  )

}

const Button = ({onClick,text}) =>{
  
  return(  
    <button onClick={onClick}>
     {text} 
    </button>
  )
}

const App = () =>{
  // guarda los clicks de cada boton en su propio estado

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const positive = (good / all) * 100 
  const average = (good - bad) / all

  const handClick = (aux) => {
    
    if(aux === "good") {
      setGood(good + 1)
    }else if(aux === "neutral"){
      setNeutral(neutral + 1)
    }else if(aux === "bad"){
      setBad(bad + 1)
    }
  }

  

  
  return (
    <div>
      <h1>give feedback</h1>

      <Button onClick={() =>handClick("good")} text="good"/>
      <Button onClick={() =>handClick("neutral")} text= "neutral"/>
      <Button onClick= {() =>handClick("bad")} text="bad"/>
      
      <h1>statistics</h1>
      
      <Statistics good = {good}
                  neutral = {neutral}
                  bad = {bad}
                  all = {all}
                  average = {average}
                  positive = {positive}/>

    </div>

    
  )
 
}

export default App