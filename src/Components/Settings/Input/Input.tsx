import React, {ChangeEvent} from 'react';
import s from './Input.module.css'

type PropsType = {
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    isIncorrectValue: boolean
}

export const Input: React.FC<PropsType> = ({value, onChange, isIncorrectValue}) => {
    return <>
        <input type="number" value={value} onChange={onChange} className={isIncorrectValue ? s.incorrectValue : ''}/>
    </>
};