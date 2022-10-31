import React, {useState, FC} from 'react';
import {Button} from "../Button/Button";
import s from './Counter.module.css'
import {useDispatch, useSelector} from "react-redux";
import {increaseCounterValue, resetCounter} from "../../redux/CounterReducer";
import {AppRootStateType} from "../../redux/store";

export const Counter = () => {

    let [counter, setCounter] = useState(0)

    let counterValue = useSelector<AppRootStateType, number>(state => state.counter.counterValue)
    let showMessage = useSelector<AppRootStateType, boolean>(state => state.settings.isMessage)

    let dispatch = useDispatch()

    const onClickInc = () => {
        console.log('inc')
        setCounter(counter + 1)
        dispatch(increaseCounterValue(counter))
    }

    const onClickReset = () => {
        console.log('reset')
        setCounter(0)
        dispatch(resetCounter())
    }

    return (
        <div className='appItem'>
            <div className={`displayField ${s.value}`}>{
                showMessage ? <ShowMessages showMessage={showMessage}/> : counterValue
                }</div>
            <div className='buttonsField'>
                <Button name={'inc'} onClickButtonHandler={onClickInc} isDisabled={false}/>
                <Button name={'reset'} onClickButtonHandler={onClickReset} isDisabled={false}/>
            </div>
        </div>
    );
};

type PropsDisplayType = {
    showMessage: boolean
}

export const ShowMessages: FC<PropsDisplayType> = ({showMessage}) => {
    return <>set value</>
}