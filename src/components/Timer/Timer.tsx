import React, { useState } from "react";
import Button from "../Button/Button";
import classes from "./Timer.module.css";

type Timer = {
  startTimer: () => any;
  stopTimer: () => any;
  resetTimer: () => any;
};

const Timer: any = (): JSX.Element => {
  let [minutes, setMinutes] = useState(25);
  let [seconds, setSeconds] = useState(0);
  let [isOn, setIsOn] = useState(false);
  

  const startTimer = () => {
    if (isOn === true) {
      return;
    }
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds-=1);
      }
     else if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setMinutes(minutes-=1);
          setSeconds(59);
        }
      }
    }, 1000);
   setIsOn(true)
  };

  const stopTimer = () => {
    // clearInterval(interval)
    clearInterval()
    setIsOn(false)
  };

  const resetTimer = () => {
    console.log("Resetting timer.");
    setMinutes(25)
    setSeconds(0)
  };

  return (
    <div className={classes.testContainer}>
      <div className={classes.timeDisplay}>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
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
