import React, {useState} from 'react';
import {Button} from "../Button/Button";
import s from './Counter.module.css'
import {useDispatch, useSelector} from "react-redux";
import {increaseCounterValue} from "../../redux/CounterReducer";
import {AppRootStateType} from "../../redux/store";

export const Counter = () => {

    let [counter, setCounter] = useState(0)

    let counterValue = useSelector<AppRootStateType, number>(state => state.counter.counterValue)

    let dispatch = useDispatch()

    const onClickInc = () => {
        setCounter(counter + 1)
        dispatch(increaseCounterValue(counter))
    }

    const onClickReset = () => {
        console.log('reset')
    }

    return (
        <div className='appItem'>
            <div className={`displayField ${s.value}`}>{counterValue}</div>
            <div className='buttonsField'>
                <Button name={'inc'} onClickButtonHandler={onClickInc}/>
                <Button name={'reset'} onClickButtonHandler={onClickReset}/>
            </div>
        </div>
    );
};