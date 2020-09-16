import React, {useState} from 'react'

const Timer = () => {
    const [minutes, setMinutes] = useState(25)
    const [seconds, setSeconds] = useState(0)
    const [isOn, setIsOn] = useState(false)

  const  startTimer = ()=> {
        console.log('Starting timer.');
      }
    
  const    stopTimer = ()=> {
        console.log('Stopping timer.');
      }
    
  const  resetTimer = ()=> {
        console.log('Resetting timer.');
      }
    return (
        <div className='timer-container'>
            Timer
        </div>
    )
}

export default Timer
