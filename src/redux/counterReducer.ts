type InitialStateType = {
    maxValue: number
    startValue: number
    isSetButtonDisabled: boolean
    counterValue: number
    isMessageShow: boolean
    incorrectValue: boolean
}
type ActionsTypes = ReturnType<typeof onMaxValueChangeAC>
    | ReturnType<typeof onStartValueChangeAC>
    | ReturnType<typeof buttonSetAC>
    | ReturnType<typeof increaseCounterAC>
    | ReturnType<typeof buttonResetAC>
    | ReturnType<typeof incorrectValueAC>
    | ReturnType<typeof disableButtonSetAC>

const initialState = {
    maxValue: 0,
    startValue: 0,
    counterValue: 0,
    isSetButtonDisabled: true,
    isMessageShow: false,
    incorrectValue: false
}

export const counterReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "ON-MAX-VALUE-CHANGE":
            return {
                ...state,
                maxValue: action.maxValue,
                isSetButtonDisabled: false,
                isMessageShow: true
            }

        case "ON-START-VALUE-CHANGE":
            return {
                ...state,
                startValue: action.startValue,
                isSetButtonDisabled: false,
                isMessageShow: true
            }

        case "BUTTON-SET":
            return {
                ...state,
                counterValue: state.startValue,
                isMessageShow: false
            }

        case "INCREASE-COUNTER":
            return {
                ...state,
                counterValue: state.counterValue + 1
            }

        case "BUTTON-RESET":
            return {
                ...state,
                counterValue: state.startValue
            }

        case "INCORRECT-VALUE":
            return {
                ...state,
                incorrectValue: action.isIncorrectValue
            }

        case "DISABLE-BUTTON-SET": {
            return {
                ...state,
                isSetButtonDisabled: action.value
            }
        }

        default:
            return state;
    }
}

export const onMaxValueChangeAC = (maxValue: number) => {
    return {
        type: 'ON-MAX-VALUE-CHANGE',
        maxValue
    } as const
}

export const onStartValueChangeAC = (startValue: number) => {
    return {
        type: 'ON-START-VALUE-CHANGE',
        startValue
    } as const
}

export const buttonSetAC = () => {
    return {
        type: 'BUTTON-SET'
    } as const
}

export const increaseCounterAC = () => {
    return {
        type: 'INCREASE-COUNTER'
    } as const
}

export const buttonResetAC = () => {
    return {
        type: 'BUTTON-RESET'
    } as const
}

export const incorrectValueAC = (isIncorrectValue: boolean) => {
    return {
        type: 'INCORRECT-VALUE',
        isIncorrectValue
    } as const
}

export const disableButtonSetAC = (value: boolean) => {
    return {
        type: 'DISABLE-BUTTON-SET',
        value
    } as const
}