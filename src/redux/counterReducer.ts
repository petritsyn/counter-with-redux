type InitialStateType = {
    isDisableButton: boolean
    maxValue: number
    startValue: number
    isMessage: boolean
    counterValue: number
}

type ActionsTypes = ReturnType<typeof onMaxValueChange>
    | ReturnType<typeof onStartValueChange>
    | ReturnType<typeof setValue>
    | ReturnType<typeof increaseCounterValue>
    | ReturnType<typeof resetCounter>

const initialState = {
    isDisableButton: true,
    maxValue: 0,
    startValue: 0,
    isMessage: false,
    counterValue: 0
}

export const counterReducer = (state: InitialStateType = initialState, action: ActionsTypes) => {
    switch (action.type) {

        case 'ON-MAX-VALUE-CHANGE': {
            return {
                ...state,
                maxValue: action.maxValue,
                isDisableButton: false,
                isMessage: true
            }
        }

        case "ON-START-VALUE-CHANGE": {
            return {
                ...state,
                startValue: action.startValue,
                isDisableButton: false,
                isMessage: true
            }
        }

        case "SET-VALUE": {
            return {
                ...state,
                isDisableButton: true,
                isMessage: false,
                counterValue: action.value
            }
        }

        case 'INCREASE-COUNTER-VALUE': {
            return {
                ...state,
                counterValue: action.counterValue + 1
            }
        }

        case 'RESET-COUNTER': {
            return {
                ...state,
                counterValue: action.counterValue
            }
        }

        default:
            return state
    }
}

export const onMaxValueChange = (maxValue: number) => {
    return {
        type: 'ON-MAX-VALUE-CHANGE',
        maxValue
    } as const
}

export const onStartValueChange = (startValue: number) => {
    return {
        type: 'ON-START-VALUE-CHANGE',
        startValue
    } as const
}

export const setValue = (value: number) => {
    return {
        type: 'SET-VALUE',
        value
    } as const
}

export const increaseCounterValue = (counterValue: number) => {
    return {
        type: 'INCREASE-COUNTER-VALUE',
        counterValue
    } as const
}

export const resetCounter = (counterValue: number) => {
    return {
        type: 'RESET-COUNTER',
        counterValue
    } as const
}