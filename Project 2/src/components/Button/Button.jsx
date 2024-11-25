import React from 'react'
import styles from "./Button.module.css"
const Button = ({icon,text,isOutline,...rest}) => {
  return (
    <button {...rest} className={isOutline? styles.outline_button:styles.primary_button}>
    {icon}{text}
    </button>
  )
}

export default Button;
