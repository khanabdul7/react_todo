import { useState } from "react"
import './Counter.css'
import CounterButton from "./CounterButton"

export default function Counter({by}){

    let [counter, setCounter] = useState(0)

    function incrementCounterP(by){
        setCounter(counter + by)
    }

    function decrementCounterP(by){
        setCounter(counter - by)
    }

    function resetCounter(){
        setCounter(0)
    }
    return(
        <>
            <span className="count">{counter}</span>
            <CounterButton inc={incrementCounterP} dec={decrementCounterP}/>
            <CounterButton by={2} inc={incrementCounterP} dec={decrementCounterP}/>
            <CounterButton by={5} inc={incrementCounterP} dec={decrementCounterP}/>
            <button className="Btn ResetBtn" onClick={resetCounter} >Reset</button>
        </>
    )

}

