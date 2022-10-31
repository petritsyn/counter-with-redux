import React, {ChangeEvent, useState} from 'react';
import {Button} from "../Button/Button";
import s from './Settings.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {onMaxValueChange, onStartValueChange, setValue} from "../../redux/counterReducer";

export const Settings = () => {

    let [startValue, setStartValue] = useState(0)

    let maxValue = useSelector<AppRootStateType, number>(state => state.settings.maxValue)
    let startValueState = useSelector<AppRootStateType, number>(state => state.settings.startValue)
    let disableButton = useSelector<AppRootStateType, boolean>(state => state.settings.isDisableButton)

    let dispatch = useDispatch()

    const onClickButtonHandler = () => {
        dispatch(setValue(startValue))
    }

    const onChangeInputMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(onMaxValueChange(+e.currentTarget.value))
    }

    const onChangeInputStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(onStartValueChange(+e.currentTarget.value))
        setStartValue(+e.currentTarget.value)
    }

    return (
        <div className='appItem'>
            <div className='displayField'>
                <div className={s.settings}>
                    <div><span>max value:</span><input type="number" value={maxValue} onChange={onChangeInputMaxValueHandler}/></div>
                    <div><span>start value:</span><input type="number" value={startValueState} onChange={onChangeInputStartValueHandler}/></div>
                </div>
            </div>
            <div className='buttonsField'>
                <Button name={'set'} onClickButtonHandler={onClickButtonHandler} isDisabled={disableButton}/>
            </div>
        </div>
    );
};