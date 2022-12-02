import React, {ChangeEvent, useEffect} from 'react';
import {Button} from "../Button/Button";
import s from './Settings.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {
    onMaxValueChangeAC,
    onStartValueChangeAC,
    buttonSetAC,
    disableButtonSetAC,
    incorrectValueAC
} from "../../redux/counterReducer";
import {Input} from "./Input/Input";

export const Settings = () => {

    let dispatch = useDispatch();

    let maxValueStore = useSelector<AppRootStateType, number>(state => state.counter.maxValue);
    let startValueStore = useSelector<AppRootStateType, number>(state => state.counter.startValue);
    let isSetButtonDisabled = useSelector<AppRootStateType, boolean>(state => state.counter.isSetButtonDisabled);
    let isIncorrectValue = useSelector<AppRootStateType, boolean>(state => state.counter.incorrectValue);

    const onMaxValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(onMaxValueChangeAC(+e.currentTarget.value))
    }

    const onStartValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(onStartValueChangeAC(+e.currentTarget.value))
    }

    const setButtonHandler = () => {
        dispatch(buttonSetAC())
    }

    useEffect(() =>{
        if (isIncorrectValue) {
            dispatch(disableButtonSetAC(true))
        } else {
            dispatch(disableButtonSetAC(false))
        }
    }, [isIncorrectValue])

    useEffect(() => {
        if (maxValueStore < 0 || startValueStore < 0 || startValueStore > maxValueStore) {
            dispatch(disableButtonSetAC(true))
            dispatch(incorrectValueAC(true))
        } else {
            dispatch(disableButtonSetAC(false))
            dispatch(incorrectValueAC(false))
        }
    }, [maxValueStore, startValueStore])

    return (
        <div className='appItem'>
            <div className='displayField'>
                <div className={s.settings}>
                    <div><span>max value:</span><Input value={maxValueStore} onChange={onMaxValueChangeHandler} isIncorrectValue={isIncorrectValue}/></div>
                    <div><span>start value:</span><Input value={startValueStore} onChange={onStartValueChangeHandler} isIncorrectValue={isIncorrectValue}/></div>
                </div>
            </div>
            <div className='buttonsField'>
                <Button name={'set'} onClickButton={setButtonHandler} isDisabled={isSetButtonDisabled}/>
            </div>
        </div>
    );
};