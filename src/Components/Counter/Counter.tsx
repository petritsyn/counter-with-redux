import React, {FC} from 'react';
import {Button} from "../Button/Button";
import s from './Counter.module.css'

type PropsType = {
    value: number
}

export const Counter: FC<PropsType> = ({value}) => {

    const onClickInc = () => {
        console.log('inc')
    }

    const onClickReset = () => {
        console.log('reset')
    }

    return (
        <div className='appItem'>
            <div className={`displayField ${s.value}`}>{value}</div>
            <div className='buttonsField'>
                <Button name={'inc'} onClickButtonHandler={onClickInc}/>
                <Button name={'reset'} onClickButtonHandler={onClickReset}/>
            </div>
        </div>
    );
};