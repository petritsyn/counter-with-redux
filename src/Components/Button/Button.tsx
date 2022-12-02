import React, {FC} from 'react';
import s from './Button.module.css'

type PropsType = {
    name: string
    onClickButton: () => void
    isDisabled: boolean
}

export const Button: FC<PropsType> = ({name, onClickButton, isDisabled}) => {
    return (
        <>
            <button className={s.button} onClick={onClickButton} disabled={isDisabled}>{name}</button>
        </>
    );
};