import React, {ChangeEvent, useState} from 'react';
import {Button} from "../Button/Button";
import s from './Settings.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {onMaxValueChange} from "../../redux/SettingsReducer";

export const Settings = () => {

    let [maxInputValue, setMaxInputValue] = useState(0)

    let maxValue = useSelector<AppRootStateType, number>(state => state.settings.maxValue)
    let isMaxValueChange = useSelector<AppRootStateType, boolean>(state => state.settings.isMaxValueChange)

    let dispatch = useDispatch()

    const onClickButtonHandler = () => {
        console.log('set')
    }

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxInputValue(+e.currentTarget.value)
        dispatch(onMaxValueChange(+e.currentTarget.value))
    }

    return (
        <div className='appItem'>
            <div className='displayField'>
                <div className={s.settings}>
                    <div><span>max value:</span><input type="number" value={maxValue} onChange={onChangeInputHandler}/></div>
                    <div><span>start value:</span><input type="number"/></div>
                </div>
            </div>
            <div className='buttonsField'>
                <Button name={'set'} onClickButtonHandler={onClickButtonHandler} isDisabled={isMaxValueChange}/>
            </div>
        </div>
    );
};