import React, { useState } from "react";
import Button from "../Button/Button";
import classes from "./Timer.module.css";

type Timer = {
  startTimer: () => any;
  stopTimer: () => any;
  resetTimer: () => any;
 

};

type interval ={
  setTimeInterval: React.Dispatch<React.SetStateAction<{}>>
}

const Timer = () => {
  let [minutes, setMinutes] = useState(0);
  let [seconds, setSeconds] = useState(0);
  let [mili, setMili] = useState(0);
  let [hours, setHours]= useState(0)
const [interval, setTimeInterval] = useState({})
  let [isOn, setIsOn] = useState(true);
  
  let updateMs = mili
  let updateS = seconds
  let updateM = minutes
  let updateH = hours

  const runTimer = ()=>{
    if(updateMs === 100){
      updateMs = 0
      updateS++
      
    }
    if(updateS===60){
      updateS = 0 
      updateM++
      
       }
    if(updateM===60){
      updateH++
      updateS = 0 
    }
    updateMs++
    return setMili(updateMs) ,setSeconds(updateS), setMinutes(updateM), setHours(updateH) 
    
  }

  const startTimer = () => {
    if(isOn===true){
      console.log(seconds)
      runTimer();
      setTimeInterval(setInterval(runTimer,10))
      setIsOn(false)
    }    
  }

  const stopTimer = () => {
    // clearInterval(interval)
    clearInterval(Number(setTimeInterval))
    setIsOn(false)
  };

  const resetTimer = () => {
    console.log("Resetting timer.");
    clearInterval(Number(setTimeInterval))
    setMinutes(0)
    setSeconds(0)
  };

  return (
    <div className={classes.testContainer}>
      <div className={classes.timeDisplay}>
        <div className={classes.time}>
       <span>{minutes<10? `0${minutes}`:minutes}</span> :
       <span> {seconds < 10 ? `0${seconds}` : seconds}</span> :
        <span> {mili<10? `0${mili}`: mili}</span>
     
        </div>
        </div>
      <div className={classes.buttonContainer}>
        <Button btnValue="Start" buttonAction={startTimer} />
        <Button btnValue="Stop Timer" buttonAction={stopTimer} />
        <Button btnValue="Reset Timer" buttonAction={resetTimer} />
      </div>
    </div>
  );
};

export default Timer;
