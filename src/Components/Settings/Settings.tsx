import React from 'react';
import {Button} from "../Button/Button";
import s from './Settings.module.css'

export const Settings = () => {

    const onClickButtonHandler = () => {
        console.log('button set')
    }

    return (
        <div className='appItem'>
            <div className='displayField'>
                <div className={s.settings}>
                    <div><span>max value:</span><input type="number"/></div>
                    <div><span>start value:</span><input type="number"/></div>
                </div>
            </div>
            <div className='buttonsField'>
                <Button name={'set'} onClickButtonHandler={onClickButtonHandler}/>
            </div>
        </div>
    );
};