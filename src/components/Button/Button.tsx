import React from 'react'
import classes from './Button.module.css'

 type btn = {
    buttonAction: ()=>void
    btnValue: string
}

const Button = ({buttonAction , btnValue}:btn) => {
    return (
        <div  className={classes.btn} onClick={()=>buttonAction} > {btnValue} </div>
    )
}

export default Button
