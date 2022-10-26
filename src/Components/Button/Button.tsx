import React, {FC} from 'react';
import s from './Button.module.css'

type PropsType = {
    name: string
    onClickButtonHandler: () => void
    isDisabled: boolean
}

export const Button: FC<PropsType> = ({name, onClickButtonHandler, isDisabled}) => {
    return (
        <>
            <button className={s.button} onClick={onClickButtonHandler} disabled={isDisabled}>{name}</button>
        </>
    );
};