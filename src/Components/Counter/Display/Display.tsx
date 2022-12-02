import React from "react";
import s from './Display.module.css';

type DisplayPropsType = {
    isIncorrectValue: boolean
    counter: number
    isMessageShow: boolean
}

export const Display = (props: DisplayPropsType) => {
    if (props.isIncorrectValue) {
        return <div className={s.incorrectValue}>Incorrect value!</div>
    } else if (props.isMessageShow) {
        return <div className={s.message}>Enter values and press 'set'</div>
    }
    else return <>{props.counter}</>
}