import React, {FC} from 'react';
import {Button} from "../Button/Button";
import s from './Counter.module.css'
import {useDispatch} from "react-redux";

type PropsType = {
    counterValue: number
}

export const Counter: FC<PropsType> = ({counterValue}) => {

    let dispatch = useDispatch()

    const onClickInc = () => {

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