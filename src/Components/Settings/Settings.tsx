import React from 'react';
import {Button} from "../Button/Button";

export const Settings = () => {

    const onClickButtonHandler = () => {
        console.log('button set')
    }

    return (
        <div className='appItem'>
            <div className='displayField'>Value</div>
            <div className='buttonsField'>
                <Button name={'set'} onClickButtonHandler={onClickButtonHandler}/>
            </div>
        </div>
    );
};