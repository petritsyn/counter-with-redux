import React, {FC} from 'react';
import s from './Button.module.css'

type PropsType = {
    name: string
    onClickButtonHandler: () => void
}

export const Button: FC<PropsType> = ({name, onClickButtonHandler}) => {
    return (
        <>
            <button className={s.button} onClick={onClickButtonHandler}>{name}</button>
        </>
    );
};