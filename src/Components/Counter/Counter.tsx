import React, {useEffect, useState} from 'react';
import {Button} from "../Button/Button";
import s from './Counter.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {buttonResetAC, increaseCounterAC} from "../../redux/counterReducer";
import {Display} from "./Display/Display";


export const Counter = () => {

    let dispatch = useDispatch();

    let counterValueStore = useSelector<AppRootStateType, number>(state => state.counter.counterValue);
    let maxValueStore = useSelector<AppRootStateType, number>(state => state.counter.maxValue);
    let isIncorrectValue = useSelector<AppRootStateType, boolean>(state => state.counter.incorrectValue);
    let isMessageShow = useSelector<AppRootStateType, boolean>(state => state.counter.isMessageShow);

    let [isIncDisabled, setIsIncDisabled] = useState(false);
    let [isResetDisabled, setIsResetDisabled] = useState(false);

    useEffect(() => {
        if (isIncorrectValue || isMessageShow) {
            setIsIncDisabled(true)
            setIsResetDisabled(true)
        } else {
            setIsIncDisabled(false)
            setIsResetDisabled(false)
        }
    }, [isIncorrectValue, isMessageShow, counterValueStore])

    useEffect(() => {
        if (counterValueStore >= maxValueStore && maxValueStore > 0) {
            setIsIncDisabled(true)
        }
    }, [maxValueStore, counterValueStore])

    const onClickIncButtonHandler = () => {
        dispatch(increaseCounterAC())
    }

    const onClickResetButtonHandler = () => {
        dispatch(buttonResetAC())
    }

    return (
        <div className='appItem'>
            <div className={`displayField ${s.value}`}>{<Display isIncorrectValue={isIncorrectValue} counter={counterValueStore} isMessageShow={isMessageShow}/>}</div>
            <div className='buttonsField'>
                <Button name={'inc'} onClickButton={onClickIncButtonHandler} isDisabled={isIncDisabled}/>
                <Button name={'reset'} onClickButton={onClickResetButtonHandler} isDisabled={isResetDisabled}/>
            </div>
        </div>
    );
};