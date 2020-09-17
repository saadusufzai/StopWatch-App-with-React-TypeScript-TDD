import React, {useState} from 'react'
import Button from '../Button/Button'
import classes from './Timer.module.css'

type Timer ={
  startTimer: ()=>void
  stopTimer: ()=>void
  resetTimer: ()=>void
}

const Timer = () :JSX.Element =>  {
    const [minutes, setMinutes] = useState(25)
    const [seconds, setSeconds] = useState(0)
    const [isOn, setIsOn] = useState(false)

  const  startTimer = ():void => {
        console.log('Starting timer.');
      }
    
  const    stopTimer = ()=> {
        console.log('Stopping timer.');
      }
    
  const  resetTimer = ()=> {
        console.log('Resetting timer.');
      }




    return (
        <div className={classes.testContainer}>
            <div className={classes.buttonContainer}>
            <Button btnValue='Start' buttonAction={startTimer}/>
            <Button btnValue='Stop Timer' buttonAction={stopTimer}/>
            <Button btnValue='Reset Timer' buttonAction={resetTimer}/>
            </div>
        </div>
    )




}

export default Timer
